import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import topimage from  '../img/logo-light.png';
import loginimage from  '../img/loginscrn.png';
import { Row,Col,Form,Image } from 'react-bootstrap'
import Swal from 'sweetalert2';
import axios from 'axios';


export default function Login() {
const [Username, setUsername] = useState('');
const [Password, setPassword] = useState('');
const history = useHistory()

const onSubmit=(e)=>{
    e.preventDefault()
    if(Username !=='' && Password !==''){
        axios.get('https://ccm.digisailor.in/api/public/login/login', {
            auth: {
            username: 'ccm_auth',
            password: 'ccm_digi123#'
            },
            params:{
                name: Username,
                password: Password
            }
          })
            .then((res)=>{
                console.log(res) 
                const data = res.data
                if(data.response.is_login===true && data.session.users!==undefined){
                    const access_token = data.response.access_token
                    localStorage.setItem('isLogin',true)
                    localStorage.setItem('access_token',access_token)
                    window.location.replace('/list')
                    //window.location.replace('https://fir-2304e.web.app/dashboard')

                }
                else{   
                    Swal.fire({
                        icon:"error",
                        title:"Oops!",
                        text:"Check Username and Password"
                    })
                }  
            })
            .catch(err =>{
                console.log(err)
            })   
 }
 else{
    Swal.fire({
        icon:"error",
        title:"Oops!",
        text:"Please Fillout All Fields"
    })
 }
}

    return (
        <div>
            <div style={{backgroundColor:"rgb(202,229,245)"}}>
            <Row>
                <Col lg={6}>
                    <div style={{width:"600px",height:"80%",margin:"auto",marginTop:"15%"}}>
                        <div style={{width:"20%",margin:"auto"}}>
                            <Image src={topimage} style={{marginTop:"10%"}} />
                        </div>
                        <div style={{marginTop:"5%"}}>
                            <Row>
                                <h3 className="login-title" style={{marginLeft:"20%"}}>Crystal Clear Management- </h3>
                            </Row>
                            <Row>
                                <h3  className="login-title" style={{marginLeft:"2%"}}>Leading Facilities Management Service In Asia</h3>
                            </Row>
                        </div>
                        <div style={{width:"400px",height:"50%",margin:"auto",marginTop:"10%"}}>
                                <Form.Control
                                    className="login-input"
                                    name="Username" 
                                    type="text" 
                                    placeholder="Username" 
                                    onChange={(e)=>setUsername(e.target.value)}
                                />
                                <i className="fa fa-user-circle" style={{position:"relative",bottom:"12%",left:"3%",fontSize:"25px",color:"rgb(71,115,160)"}}></i>
                                 <Form.Control
                                    className="login-input"
                                    style={{marginTop:"50px"}}
                                    name="Password" 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange =  {(e)=>setPassword(e.target.value)}  
                                />
                                <i class="fa fa-lock" aria-hidden="true"  style={{fontSize:"25px",position:"relative",bottom:"11%",left:"3%",color:"rgb(71,115,160)"}}></i>
                                <Row style={{marginTop:"10%"}}>
                                    <Col lg={6}>
                                        {/* <h6 style={{marginTop:"10px"}}>forgot your password?</h6> */}
                                    </Col>
                                    <Col lg={6}>
                                        <button className="login-button" type="button"  onClick={onSubmit}>Login</button>
                                    </Col>
                                </Row>
                        </div>

                    </div>
                </Col>
                <Col lg={6} style={{marginTop:"50px"}}>
                <div>
                    <img style={{width:"100%",height:"100%"}} src={loginimage} alt="img missing"/>
                </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}
