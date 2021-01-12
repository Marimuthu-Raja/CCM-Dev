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
import Logo from '../logo-light.png'
import axios from 'axios'
import Sidebar from './Sidebar'



export default class Addcontractor extends Component {
    constructor(props){
        super(props);
        this.state ={
            contractorName:'',
            address:'',
            country:'',
            phone:'',
            email:'',
            contactPerson:'',
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        const {contractorName,address,phone,email,contactPerson,country} = this.state
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"10%",width:"95%"}}>
                
                <Card style={{marginTop:"3%"}}>
                    <Row>
                    <h5>ADD/EDIT VENDOR PROFILE</h5>
                        <Col lg={4}>
                            <Image src={Logo} style={{marginLeft:"30%",marginTop:"80px"}}></Image>
                        </Col>
                        <Col lg={4}>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Contractor Name</Form.Label>
                                    <Form.Control type="text"  id="contractorName"
                                    placeholder="Full Name"
                                    name="contractorName"
                                    value={contractorName}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Address</Form.Label>
                                    <Form.Control type="text"  id="address"
                                    placeholder="Address"
                                    name="address"
                                    value={address}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Country</Form.Label>
                                    <Form.Control type="text"  id="country"
                                    placeholder="Country"
                                    name="country"
                                    value={country}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Phone Number</Form.Label>
                                    <Form.Control type="text"  id="phone"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={phone}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        </Col>
                        <Col lg={4}>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Email</Form.Label>
                                    <Form.Control type="text"  id="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Contact Person</Form.Label>
                                    <Form.Control type="text"  id="contactPerson"
                                    placeholder="Full Name"
                                    name="contactPerson"
                                    value={contactPerson}
                                    onChange={this.handleChange}
                                    style={{padding:"10px"}}
                                    />
                                </Col>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button style={{marginLeft:"60%", marginTop:"50px"}}>DELETE</Button>
                        <Button style={{marginTop:"50px"}}>SAVE</Button>
                    </Row>
                </Card>
                </div>
               
            </div>
        )
    }
}
