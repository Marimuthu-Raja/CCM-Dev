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
import $ from 'jquery'
import swal from 'sweetalert'
import Sidebar from './Sidebar'
import ReactCountryFlag from "react-country-flag"
import ReactFlagsSelect from 'react-flags-select';

class UserProfile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            full_name:"",
            user_name:"",
            country:"", 
            email:"",
            address:"",
            department:"",
            phone:"",
            selected_country:'',
        }
    }
    onChange = (e)=>{
        e.preventDefault();

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSelect = (code)=>{
        console.log(code,"code")
    }
    render() {
        const {full_name,user_name,country,email,address,department,phone,selected_country}=this.state;
        return (
            <div>
                <Sidebar />
                <div style={{marginLeft:"10%",width:"95%"}}>
                    <Card style={{marginTop:"20px"}}>
                        <Row style={{marginTop:"20px"}}>
                            <Col lg={2}>
                            <Image src={Logo} className="profile-img" ></Image>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                style = "label-style"
                                txtBoxLabel ="Full name"
                                txtBoxType ="text"
                                txtBoxName = "full_name"
                                txtBoxValue = {full_name}
                                txtBoxID = "full_name"
                                txtBoxPH ="Full Name"
                                changeEvent = {this.onChange}
                                />
                                <CustomTextBox
                                style = "label-style"
                                txtBoxLabel ="User name"
                                txtBoxType ="text"
                                txtBoxName = "user_name"
                                txtBoxValue = {user_name}
                                txtBoxID = "user_name"
                                txtBoxPH ="User Name"
                                changeEvent = {this.onChange}
                                />
                               <Form.Group as={Col}>
                                    <Form.Label className="label-style">Country</Form.Label>
                                    <Col>
                                    <Form.Control as="select" className="select-style" name="country"  value={country} onChange={this.onChange} required>
                                            <option value="Country"selected disabled> Country</option>
                                            <option value="Country 1">Country 1</option>
                                            <option value="Country 2">Country 2</option>
                                            <option value="Country 3">Country 3 </option>
                                            <option value="Country 4">Country 4</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                style = "label-style"
                                txtBoxLabel ="Email"
                                txtBoxType ="text"
                                txtBoxName = "email"
                                txtBoxValue = {email}
                                txtBoxID = "email"
                                txtBoxPH ="Email"
                                changeEvent =  {this.onChange}
                                />
                                <CustomTextBox
                                style = "label-style"
                                txtBoxLabel ="Address"
                                txtBoxType ="text"
                                txtBoxName = "address"
                                txtBoxValue = {address}
                                txtBoxID = "address"
                                txtBoxPH ="Address"
                                changeEvent =  {this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <Form.Group as={Col}>
                                    <Form.Label className="label-style">Department</Form.Label>
                                    <Col>
                                    <Form.Control as="select" className="select-style" name="department"  value={department} onChange={this.onChange} required>
                                            <option value="Plumping" selected disabled> Plumping</option>
                                            <option value="department 1">department 1</option>
                                            <option value="department 2">department 2</option>
                                            <option value="department 3">department 3 </option>
                                            <option value="department 4">department 4</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <CustomTextBox
                                style = "label-style"
                                txtBoxLabel ="Phone Number"
                                txtBoxType ="text"
                                txtBoxName = "phone"
                                txtBoxValue = {phone}
                                txtBoxID = "phone"
                                txtBoxPH ="Phone Number"
                                changeEvent =  {this.onChange}
                                />
                            </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}} >
                            <Col lg={2}>
                                <label  className="search-title">Permissions</label>
                            </Col>
                            <Col lg={5} style={{backgroundColor:"White" , borderRadius:"20px 0 0 20px"}}>
                                <div className="inner-space">
                                    <Form.Group as={Row}> 
                                       <Form.Label className="label-style" column lg={8}>Quotation/Invoice Management</Form.Label>
                                       <Form.Label className="label-style" column lg={2}>View</Form.Label>
                                       <Form.Label className="label-style" column lg={2}>Edit</Form.Label>
                                    </Form.Group>
                                    <Form.Group as={Row}> 
                                       <Form.Label column lg={8} style={{fontSize:"1.2em"}}> Quotation Client Section</Form.Label>
                                       <Col lg={2}>
                                            <Form.Check  type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}> 
                                       <Form.Label column lg={8} style={{fontSize:"1.2em"}}> Quotation Contractor Section</Form.Label>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}> 
                                       <Form.Label column lg={8} style={{fontSize:"1.2em"}}> Invoice Client Section</Form.Label>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}> 
                                       <Form.Label column lg={8} style={{fontSize:"1.2em"}}> Invoice Contractor Section</Form.Label>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                       <Col lg={2}>
                                            <Form.Check type="checkbox" name="" value="" onChange="" />
                                       </Col>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col lg={3}style={{backgroundColor:"White" , borderRadius:"0 20px 20px 0"}}>
                                <div className="inner-space2">
                                    <Form.Group>
                                        <Form.Label className="label-style">Administration</Form.Label>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Check type="checkbox" name="" value="" onChange="" label="View User" />
                                            </Col>
                                            <Col lg={6}>
                                                    <Form.Check type="checkbox" name="" value="" onChange=""  label="Manage User" />
                                            </Col>
                                        </Row> 
                                    </Form.Group>
                                </div>
                                <div className="inner-space2">
                                <Form.Group>
                                    <Form.Label className="label-style">Other Priviliges</Form.Label>
                                    <Form.Check type="checkbox" name="" value="" onChange="" label="View Dashboard" />
                                </Form.Group>
                                </div>
                            </Col>
                        </Row>

                        <Row style={{marginTop:"20px"}}>
                            <Col lg={2}>
                                <label  className="search-title">Country</label>
                            </Col>
                            <Col lg={8} style={{backgroundColor:"White" , borderRadius:"20px"}}>
                            </Col>
                        </Row>



                        {/* <Row>
                            
                            <ReactCountryFlag
                countryCode="US"
                svg
                
                title="US"
            />
                        </Row> */}
                        <Row>

                            <Col sm={2} lg={2}> 
                            
                            <ReactFlagsSelect selected={selected_country} name="selected_country" placeholder="Add Country" onSelect={this.onSelect}/>
                            
                            </Col>
                            <Col sm={2} lg={{span:4, offset:6}}> 
                            <Button  >Reset Password</Button>
                            <Button >Save </Button>
                            </Col>
                        </Row>

                    </Card>
                </div>  
            </div>
        )
    }
}

export default UserProfile;
