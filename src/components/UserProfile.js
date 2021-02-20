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
import CustomButton from './Button/Button'
import Logo from '../logo-light.png'
import axios from 'axios'
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

import ReactCountryFlag from "react-country-flag"
import ReactFlagsSelect from 'react-flags-select';
import { Us } from 'react-flags-select';


var token = localStorage.getItem('access_token')


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
            selected_country:0,
            country_list:[],
        }
    }
    componentDidMount(){
        axios.post(`https://ccm.digisailor.in/api/public/country/list`,{},{
            params:{ access_token:token }
        }).then((res)=>{
            const country_list = res.data.response.country_list
            this.setState({ country_list })
        })
    }
    onChange = (e)=>{
        e.preventDefault();

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSelect = (e)=>{
        console.log(e,"code")
    }
    render() {
        const {full_name,user_name,country,email,address,department,phone,selected_country,country_list}=this.state;
        return (
            <div>
               
                <div className="component">
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
                                <Col>
                                <Form.Label style={{marginTop:"35px",fontSize:"20px"}}>Country</Form.Label>        
                                    <Form.Control as="select" className="select-style"  name="country"  value={country} onChange={this.onChange} style={{padding:"10px"}} required>
                                            <option value='0' selected disabled> Country</option>
                                            {country_list.map((country)=>{                   
                                                return<option key={country.id} value={country.id}>{country.name}</option>                                
                                            })}
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
                                <label  className="inner-title">Permissions</label>
                            </Col>
                            <Col lg={7} style={{backgroundColor:"White" , borderRadius:"20px 0 0 20px"}}>
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
                                <label  className="inner-title">Country</label>
                            </Col>
                        
                                
                                <Col lg={3}>        
                                    <Form.Control as="select" className="select-style"  name="selected_country"  value={selected_country} onChange={this.onChange} style={{padding:"10px"}} required>
                                            <option value='0' selected disabled> Country</option>
                                            {country_list.map((country)=>{                   
                                                return<option key={country.id} value={country.id}>{country.name}</option>                                
                                            })}
                                </Form.Control>
                                </Col>
                                <Col lg={6} style={{backgroundColor:"White" , borderRadius:"20px"}}>
                                </Col>
                        
                            
                        </Row>

                        
                        <Row className="row justify-content-md-center" style={{marginTop:"3%"}}>
                        <Link to="/forgot-password"><Button  >Reset Password</Button></Link>
                            <CustomButton btnType="reset" BtnTxt="Add"  disabledButton={this.props.id!==undefined}  ClickEvent={this.onSubmit}  />
                            <CustomButton btnType="reset" BtnTxt="Update" disabledButton={this.props.id===undefined}  ClickEvent={this.onUpdate} />     
                            <CustomButton btnType="reset" BtnTxt="Cancel"   ClickEvent={this.onCancel} />
                            <Link to='/user-list' ><CustomButton btnType="reset" BtnTxt="Back" ClickEvent={this.props.function} /></Link> 
                        </Row>
                       

                    </Card>
                </div>  
            </div>
        )
    }
}

export default UserProfile;
