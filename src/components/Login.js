import React, { Component } from 'react'
import { Container ,Card,Row,Col,Form,Image} from 'react-bootstrap'
import topimage from  '../logo-light.png';
import CustomTextBox from './CustomBox/TextBox';
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             user_name:'',
             password:''
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
        const {user_name,password}=this.state;
        if(user_name !=='' && password !==''){
            axios.post('http://www.json-generator.com/api/json/get/bUmzzXVWTC?indent=2',{user_name,password})
                .then(function(response){
                    console.log(response)
                    console.log(this.state,"user_name,password")
                    console.log("action=login")
                }
                )
                .catch(err =>{
                    console.log(err)
                    console.log(this.state,"user_name,password")
                    console.log("action=login")
                })   
     }
    }

    render() {
        const {user_name,password}=this.state;
        return (
            <div className="login" >

                <Row>
                <Col lg={6} sm={6}>
                    
                <Image src={topimage} style={{width:"150px", marginTop:"100px"}} />
                <Row style={{marginTop:"40px"}}>
                    <h2 className="login-title">Crystal Clear Management- </h2>
                    <h2 className="login-title">Leading Facilities Management In Asia</h2>
                </Row>
                
                
                <div class="form-group row">
                    <div class="col-xs-2">
                    <i className="fa fa-user-circle" style={{fontSize:"30px",position:"relative",top:"20%",right:"25%"}}></i>
                        
                        <Form.Control 
                            className="login-input"
                            name="user_name" 
                            type="text" 
                            placeholder="User Name" 
                            onChange={this.onChange}
                         />


                        <i class="fa fa-lock" aria-hidden="true"  style={{fontSize:"30px",position:"relative",top:"43%",right:"25%"}}></i>
                        <Form.Control
                            className="login-input"
                            style={{marginTop:"50px"}}
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            onChange =  {this.onChange}  
                         />
                    </div>
                </div>
                
                
                <br></br>
                </Col>
                </Row>
                <Row>
                    <Col lg={4} sm={4} style={{marginTop:"30px"}}>
                        <h6 style={{fontWeight:"bold"}}>forget your password?</h6>
                    
                    </Col>
                    <Col lg={4} sm={4}>
                       <button className="login-button" type="button"  onClick={this.onSubmit}>Login</button>
                    </Col>

                </Row>
               
            </div>
        )
    }
}

export default Login
