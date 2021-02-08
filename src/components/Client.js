import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';
import CustomTextBox from './CustomBox/TextBox'
import Logo from '../logo-light.png'
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';




export default class Client extends Component {
    constructor(props) {
        super(props)

        this.state = {
            client_name:'',
            user_name:'',
            country:'',
            email:'',
            user_type:'',
            address:'',
            phone_number:''
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const {client_name,user_name,country,email,user_type,address,phone_number}=this.state;
        if(client_name ==='' && user_name ==='' && country ==='' && email ==='' && user_type ==='' && address ==='' && phone_number ===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        }
        else{
            axios.post('', {client_name,user_name,country,email,user_type,address,phone_number})                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Client added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              }); 
            console.log(this.state.errors)
            
     }
    }
    
    render() {
        const { client_name,user_name,country,email,user_type,address,phone_number} = this.state;
        return (
            <div>
  

                <div className="component">
                    <p style={{fontSize:"20px"}}>Client</p>
                    <Card style={{width:"90%"}} >
                        <Row style={{marginTop:"3%"}}>
                            <Col lg={4} sm={12}>
                                
                                <Image src={Logo} style={{width:"120px",marginLeft:"20%"}} ></Image>
                            
                            </Col>
                            <Col lg={4} sm={12}>
                            <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Client Name</Form.Label>
                                                    <Form.Control type="text" name="client_name" value={client_name} id="client_name" placeholder="Client Name" onChange={this.onChange}
                                                    style={{padding:"8px"}}/>

                                </Form.Group>
                            <br></br>
                                <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>User Name</Form.Label>
                                                    <Form.Control type="text" name="user_name" value={user_name} id="user_name" placeholder="User Name" onChange={this.onChange}
                                                    style={{padding:"8px"}}/>

                                </Form.Group>
                            
                            <br></br>
                            <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Country</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="country" value={country} onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value="Country"selected disabled> Country</option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3 </option>
                                        <option value="Country 4">Country 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <br></br>
                            <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Address</Form.Label>
                                                    <Form.Control type="text" name="address" value={address} id="address" placeholder="Address" onChange={this.onChange}
                                                    style={{padding:"8px"}}/>

                            </Form.Group>
                            
                            </Col>

                            {/* 2cond col */}

                            <Col lg={4} sm={12}>

                            <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Email</Form.Label>
                                                    <Form.Control type="text" name="email" value={email} id="email" placeholder="Email" onChange={this.onChange}
                                                    style={{padding:"8px"}}/>

                            </Form.Group>
                            <br></br>
                            <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>User Type</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="user_type" value={user_type}  onChange={this.onChange} style={{padding:"8px"}}  required>
                                        <option value="user type"selected disabled> Country</option>
                                        <option value="Admin">Country 1</option>
                                        <option value="User">Country 2</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <br></br>
                            <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Phone Number</Form.Label>
                                                    <Form.Control type="text" name="phone_number" value={phone_number} id="phone_number" placeholder="Phone Number" onChange={this.onChange}
                                                    style={{padding:"8px"}}/>

                            </Form.Group>
                           
                            </Col>
                        </Row>
                        <Row>
                        <button type="button" class="btn btn sbtn" style={{marginTop:"100px"}} onClick={this.onSubmit}> SAVE</button>
                        </Row>
                    </Card>
                </div>
                
            </div>
        )
    }
}

