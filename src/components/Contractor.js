import React, { Component } from 'react'
import { Container ,Card,Row,Col,Form,Image} from 'react-bootstrap'
import CustomTextBox from './CustomBox/TextBox'
import topimage from  '../logo-light.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from './Sidebar'


export default class Contractor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             contractor_name:'',
             email:'',
             country:'',
             status:'',
             phone_number:''

        }
    }
    onChange=(e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {contractor_name,status,email,country,phone_number}=this.state;
        if(contractor_name ==='' && email ==='' && country==='' && status ==='' && phone_number ===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        
        }
        else{
            axios.post('', {contractor_name,status,email,country,phone_number})                   
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
        const {country,status,contractor_name,email,phone_number}=this.state;
        return (
            <div>
        <Sidebar />

                 <div style={{marginLeft:"10%",marginTop:"2%",width:"99%"}}>
                     <p style={{fontSize:"25px"}}>Contractor</p>
                     <Card border="dark" sm={6} style={{width:"90%"}}>
                         <Form >
                            <Row style={{marginTop:"3%"}}>
                                <Col lg={4} sm={4}>
                                <Image src={topimage} rounded style={{width:"100px",marginLeft:"20%"}} />
                                </Col>
                                <Col lg={4} sm={4}>
                                <Form.Group Id="input" >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold"}}>Contractor Name</Form.Label>
                                                    <Form.Control type="text" name="contractor_name"  placeholder="Contractor Name" onChange={this.onChange}
                                                    style={{padding:"10px"}}/>

                                </Form.Group>
                                <br/>
                                <br/>
                                <Form.Group Id="status" >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold"}}>Country</Form.Label>
                                                    <Form.Control as="select" name="status"  onChange={this.onChange}  style={{padding:"10px"}}>
                                                    <option value="India">India</option>
                                                    <option value="Singapoor">Singapur</option>
                                                    <option value="India">India</option>
                                                    <option value="Singapoor">Singapur</option>
                                                    <option value="India">India</option>
                                                    <option value="Singapoor">Singapur</option>
                                                    </Form.Control>
                                    </Form.Group>
                                <br/>
                                <br/>
                                <Form.Group Id="status" >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold"}}>Status</Form.Label>
                                                    <Form.Control as="select" name="status"  onChange={this.onChange}  style={{padding:"10px"}}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                    </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={4} sm={4}>
                                <Form.Group Id="input" >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold"}}>E-Mail</Form.Label>
                                                    <Form.Control type="email" name="email"  placeholder="E-Mail ID" onChange={this.onChange}  style={{padding:"10px"}}/>

                                </Form.Group>
                                <br/>
                                <br/>
                                <Form.Group Id="input" >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold"}}>Phone Number</Form.Label>
                                                    <Form.Control type="tel" name="phone_number"  placeholder="Phone Number" onChange={this.onChange}  style={{padding:"10px"}}/>

                                </Form.Group>
                                
                                </Col>
                            </Row>
                            <Row>
                            <button type="button" class="btn btn sbtn" style={{marginTop:"12%",marginBottom:"2%"}} onClick={this.onSubmit}> SAVE</button>
                            </Row>
                            
                         </Form>
                        </Card>
                 </div>
            </div>
        )
    }
}
