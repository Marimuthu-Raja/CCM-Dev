import React, { Component } from 'react'
import { Container ,Card,Row,Col,Form,Image} from 'react-bootstrap'
import topimage from  '../logo-light.png';
import CustomTextBox from './CustomBox/TextBox'


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
            user_name: e.target.value,
            password: e.target.value
        })
    }
    

    render() {
        const {user_name,password}=this.state;
        return (
            <div style={{backgroundColor:"rgb(202,229,245)",height:"960px", textAlign: "center",fontFamily: "sans-serif",
            color: "rgb(71,115,160)"}}>
                <Row>
                <Col lg={6} sm={6}>
                <Image src={topimage} style={{width:"150px", marginTop:"100px"}} />

                <h2 style={{fontWeight:"bold", color:" rgb(71,115,160)",marginTop:"40px"}}>Crystal Clear Management- </h2>
                <h2 style={{fontWeight:"bold",color:" rgb(71,115,160)"}}>Leading Facilities Management In Asia</h2>
                
                <div class="form-group row">
                    <div class="col-xs-2">
                    <i className="fa fa-user-circle" style={{fontSize:"30px",position:"relative",top:"45px",right:"300px"}}></i>
                        <input class="form-control form-control-lg col-xs-4" style={{marginLeft:"135px",textAlign:"center", width:"500px",borderRadius: "30px",border:"none", boxShadow: "10px 5px 7px rgba(10, 9, 9, 0.376)"}} type="text" placeholder="Country Name"></input>
                        <i class="fa fa-lock" aria-hidden="true"  style={{fontSize:"30px",position:"relative",top:"95px",right:"300px"}}></i>
                        <input class="form-control form-control-lg col-xs-2" style={{marginTop:"50px",textAlign:"center",marginLeft:"135px", width:"500px",borderRadius: "30px",border:"none", boxShadow: "10px 5px 7px rgba(10, 9, 9, 0.376)"}} type="password" placeholder="Password" name="password" changeEvent =  {this.onChange} ></input>
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
                    <button className="cbtn" type="button" class="btn " style={{marginRight:"800px", backgroundColor:"rgb(41,88,140)", color:"white",marginTop:"20px", width:"150px", borderRadius:"15px"}}>Login</button>
                    </Col>

                </Row>
               
            </div>
        )
    }
}

export default Login
