import React,{ useState } from 'react'
import { Card,Form,Row,Col,Button,Image } from 'react-bootstrap'
import Logo from '../../logo-light.png'
import axios from 'axios'
import { Alert } from '../utils/Utilities'

export default function Forgotpassword() {

    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')


    const onSubmit = () =>{
        const data = {
            password:Password,
            confirm_password:ConfirmPassword,
        }
        if(Password === '' || ConfirmPassword === ''){
            Alert("error","Oops","Please Fillout All Fields!")
        }
        else if(Password !== ConfirmPassword){
            Alert("error","Oops","Password Mismatched!")
        }
        else{
            Alert("success","Success","Password Reset Successful")
        }
    }


    return (
        <div>
            <div className="component">
            <div style={{margin:"auto"}}>
                    <h3>Reset Password</h3>
                </div>
            <Card border="dark" sm={6} >
                <Row>
                <Col  lg={4} sm={4}>
                    <Image src={Logo} rounded style={{width:"100px",marginLeft:"30%",marginTop:"20%"}} />
                </Col>
                <Col lg={8} sm={8}>
                <div style={{width:"40%",height:"500px"}}>
                    <div style={{marginTop:"30%"}}>

                    <Row style={{marginTop:"10%"}}>
                        <Form.Group>
                        <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Password</Form.Label>
                        <Form.Control
                        style={{width:"90%",height:"40px"}}
                        type = "password"
                        id = "password"
                        name = "password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        ></Form.Control>
                        </Form.Group>
                    </Row>

                    <Row style={{marginTop:"10%"}}>
                        <Form.Group>
                        <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Confirm Password</Form.Label>
                        <Form.Control
                        style={{width:"90%",height:"40px"}}
                        type = "password"
                        id = "confirm_password"
                        name = "confirm_password"
                        placeholder="Confirm Password"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        ></Form.Control>
                        </Form.Group>
                    </Row>
                    
                    <Row style={{marginTop:"10%"}}>
                        <Button style={{marginLeft:"30%"}} onClick={()=>onSubmit()}>Reset</Button>
                    </Row>
                    </div>
                </div>
                </Col>
                </Row>
            </Card>
            </div>
        </div>
    )
}
