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

                <h2 style={{fontWeight:"bold", color:" rgb(71,115,160)",marginTop:"40px"}}>Crystal Clear Management- </h2>
                <h2 style={{fontWeight:"bold",color:" rgb(71,115,160)"}}>Leading Facilities Management In Asia</h2>
                
                <div class="form-group row">
                    <div class="col-xs-2">
                    <i className="fa fa-user-circle" style={{fontSize:"30px",position:"relative",top:"20%",right:"25%"}}></i>
                        <input class="form-control form-control-lg col-xs-4" 
                        style={{marginLeft:"135px",
                        textAlign:"center", 
                        width:"500px",
                        padding:"15px",
                        borderRadius: "20px",
                        border:"none",
                        boxShadow: "10px 5px 7px rgba(10, 9, 9, 0.376)"}}
                        name="user_name" type="text" placeholder="Country Name" onChange={this.onChange}></input>


                        <i class="fa fa-lock" aria-hidden="true"  style={{fontSize:"30px",position:"relative",top:"43%",right:"25%"}}></i>
                        <input class="form-control form-control-lg col-xs-2"
                         style={{marginTop:"50px",
                         textAlign:"center",
                         marginLeft:"135px",
                         width:"500px",
                        borderRadius: "20px",
                        border:"none",
                        padding:"15px",
                        boxShadow: "10px 5px 7px rgba(10, 9, 9, 0.376)"}} 
                        name="password" type="password" placeholder="Password" name="password" onChange =  {this.onChange} ></input>
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
                       <button className="cbtn" type="button" class="btn " 
                    style={{marginRight:"80%", backgroundColor:"rgb(41,88,140)", color:"white",marginTop:"20px", width:"150px", borderRadius:"12px",padding:"10px",fontSize:"18px"}}
                    onClick={this.onSubmit}>Login</button>
                    </Col>

                </Row>
               
            </div>
        )
    }
}

export default Login
