import React, { Component } from 'react'
import { Container ,Card,Row,Col,Form,Image} from 'react-bootstrap'
import CustomTextBox from './CustomBox/TextBox'
import topimage from  '../logo-light.png';
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';





export default class Country extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             country_name:'',
             status:''
        }
    }
    onChange=(e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {country_name,status}=this.state;
        if(country_name ==='' && status ===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        }
        else{
            axios.post('http://ccm.digisailor.in/api/public/country/add',{
                auth: {
                username: 'ccm_auth',
                password: 'ccm_digi123#'
                },
                params:{
                    name: localStorage.getItem('Username'),
                    password: localStorage.getItem('password')
                }
            },{country_name,status})                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Client added", "success")//.then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              }); 
            console.log(this.state.errors)
            
     }
    }

    render() {
        const {status,country_name}=this.state;
        return (
            <div>
      
                <div className="component">
                    <p style={{fontSize:"20px"}}>Country</p>

                     <Card border="dark" sm={6} style={{height:"600px"}}>
                         <Form >
                            <Row style={{marginTop:"3%"}}>
                                <Col  lg={4} sm={4}>
                                <Image src={topimage} rounded style={{width:"100px",marginLeft:"20%"}} />
                                </Col>
                                <Col xs={6} sm={4}>
                                <Form.Group  >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Country Name</Form.Label>
                                                    <Form.Control type="text" name="country_name" value={country_name} id="country_name"  placeholder="Country Name" onChange={this.onChange} style={{padding:"8px"}}/>

                                </Form.Group>
                                </Col>
                                <Col xs={6} sm={4}>
                                    <Form.Group  >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Status</Form.Label>
                                                    <Form.Control as="select" name="status" placeholder="status" value={status} id="status"  onChange={this.onChange} style={{padding:"8px"}}>
                                                    <option value="" disabled>Status</option>
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                    </Form.Control>
                                    </Form.Group>
                                    </Col>
                            </Row>
                            <Row>
                            <button type="button" class="btn btn sbtn" style={{marginTop:"300px"}} onClick={this.onSubmit}> SAVE</button>
                            </Row>
                         </Form>
                        </Card>
                 </div>
            </div>
        )
    }
}
