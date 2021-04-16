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
import CustomTextBox from './utils/TextBox'
import Logo from '../components/img/logo-light.png'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import Forgotpassword from './auth/Forgotpassword'


export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_name: '',
            user_name: '',
            country: '',
            email: '',
            email: '',
            department: '',
            password: '',
            address: '',
            mobile: '',
            resetPassword:false,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { full_name, user_name, country, password, confirm_password, email, user_type, position, } = this.state;
    }
    setPassword =()=>{
        this.setState({ resetPassword: !this.state.resetPassword  })
    }

    render() {
        const { full_name, user_name, country, email, department, password, address, mobile, resetPassword } = this.state;
        return (
            <div>
                {resetPassword ? <Forgotpassword Back={this.setPassword} /> :
                <div className="component">
                    
                        <Row  >
                            <Col lg={3} style={{ marginTop: '100px' }}>
                                <Image src={Logo} className="profile-img" ></Image>
                            </Col>

                            <Col lg={4} >
                                <CustomTextBox
                                    txtBoxLabel="Full name"
                                    txtBoxType="text"
                                    txtBoxName="full_name"
                                    txtBoxValue={full_name}
                                    txtBoxPH="Full Name"
                                    changeEvent={this.onChange}
                                />
                                <CustomTextBox
                                    txtBoxLabel="User name"
                                    txtBoxType="text"
                                    txtBoxName="user_name"
                                    txtBoxValue={user_name}
                                    txtBoxPH="User Name"
                                    changeEvent={this.onChange}
                                />
                                <Form.Group >
                                    <Form.Label >Country</Form.Label>
                                    <Form.Control as="select" name="country" value={country} onChange={this.onChange} required>
                                        <option value="" disabled>Select Country</option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3 </option>
                                        <option value="Country 4">Country 4</option>
                                    </Form.Control>
                                </Form.Group>
                                <CustomTextBox
                                    txtBoxLabel="Email"
                                    txtBoxType="text"
                                    txtBoxName="email"
                                    txtBoxValue={email}
                                    txtBoxPH="Email"
                                    changeEvent={this.onChange}
                                />
                            </Col>

                            {/* 2cond col */}

                            <Col lg={4} >
                                <Form.Group >
                                    <Form.Label >Department</Form.Label>
                                    <Form.Control as="select" name="department" value={department} onChange={this.onChange} required>
                                        <option value="" selected disabled> Plumping</option>
                                        <option value="Admin">department 2</option>
                                        <option value="User">department 3</option>
                                        <option value="Admin">department 4</option>
                                        <option value="User">department 5</option>
                                    </Form.Control>
                                </Form.Group>
                                <CustomTextBox
                                    txtBoxLabel=" Password"
                                    txtBoxType="password"
                                    txtBoxName="password"
                                    txtBoxValue={password}
                                    txtBoxID="password"
                                    txtBoxPH="********"
                                    changeEvent={this.onChange}
                                />
                                <CustomTextBox
                                    txtBoxLabel="Address"
                                    txtBoxType="text"
                                    txtBoxName="address"
                                    txtBoxValue={address}
                                    txtBoxID="address"
                                    txtBoxPH="Address"
                                    changeEvent={this.onChange}
                                />
                                <CustomTextBox
                                    txtBoxLabel="Phone Number"
                                    txtBoxType="text"
                                    txtBoxName="mobile"
                                    txtBoxValue={mobile}
                                    txtBoxID="mobile"
                                    txtBoxPH="mobile"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row><br/>
                        <Row>
                        <Col lg={3} style={{ marginTop: '100px' }}>
                        <div className='ui center aligned container'><div className='ui huge label'>Permissions</div></div>
                            </Col>

                            <Col lg={4} md={12} sm={12}>
                            
                            <Card >
                            
                            {/* <div className='row'>
                            
                                <div className='col-7 mx-sm-3'>
                                
                                <Form.Label >Quotations/Invoice Management</Form.Label><br/><br/>
                                <label className='h6'><b>Quotation Client Section</b></label><br/><br/>
                                <label className='h6'><b>Quotation Contractor Section</b></label><br/><br/>
                                <label className='h6'><b>Invoice Client Section</b></label><br/><br/>
                                <label className='h6'><b>Invoice Contractor Section</b></label>
                                   </div>
                                   
                                   <div className='col mx-sm-2'>
                                    <Form.Label >View</Form.Label><br/><br/>
                                    <div className='mx-sm-2'>
                                    <Form.Check type="checkbox" /><br/>
                                    <Form.Check type="checkbox" /><br/>
                                    <Form.Check type="checkbox" /><br/>
                                    <Form.Check type="checkbox" /></div>
                                    </div> 

                                        <div className='col'>             
                                        <Form.Label >Edit</Form.Label><br/><br/>
                                        <div className='mx-sm-2'>
                                        <Form.Check type="checkbox" /><br/>
                                        <Form.Check type="checkbox" /><br/>
                                        <Form.Check type="checkbox" /><br/>
                                        <Form.Check type="checkbox" /></div>
                                        </div></div> */}

                                        <table class="table table-borderless table-condensed table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">Quotations/Invoice Management</th>
                                            <th scope="col">View</th>
                                            <th scope="col">Edit</th>
                                           
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td scope="row"> <label className='h6'>Quotation Client Section</label></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            
                                            </tr>
                                            <tr>
                                            <td scope="row"><label className='h6'>Quotation Contractor Section</label></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                           
                                            </tr>
                                            <tr>
                                            <td scope="row"><label className='h6'>Invoice Client Section</label></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            
                                            </tr>
                                            <tr>
                                            <td scope="row"><label className='h6'>Invoice Contractor Section</label></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            <td> <Form.Check type="checkbox" /></td>
                                            
                                            </tr>
                                        </tbody>
                                        </table>
                            </Card><br/></Col>

                                <Col lg={4} >  
                                            
                                <Card >
                                
                                <div className='ui checkbox'><input type="checkbox" /><Form.Label >Administration</Form.Label></div><br/>
                                <div>
                                <div className='ui checkbox'><input type="checkbox" /><Form.Label >View User</Form.Label></div> <nbsp/>   
                                <div className='ui checkbox mx-sm-5'><input type="checkbox" /><Form.Label >Manage User</Form.Label></div>
                                </div>
            
                                </Card> <br/>
                                
                                <Card >
                                    <Form.Label >Other Privileges</Form.Label><br/>
                                    <div>
                                    <div className='ui checkbox'><input type="checkbox" />
                                    <Form.Label >View Dashboard</Form.Label></div></div>
                                </Card>
                               
                                </Col>                        
                        </Row><br/>
                        <Row>
                        <Col lg={3} style={{ marginTop: '70px' }}>
                                <div className='ui center aligned container'><div className='ui huge label'>Country</div></div>
                            </Col>

                            <Col lg={8} >
                            
                            <Card>
                            <div className='ui six cards mx-sm-2' >               
                                        <div className='ui yellow fluid card' style={{ width: '15rem' }}>
                                       <div className='content mx-sm-3' >
                                       <i className='ui flag th'></i>
                                       <Form.Label >Thailand</Form.Label>
                                       <label className='ui right floated green circular label'>6</label></div>
                                        </div>
                                        <div className='ui yellow fluid card mx-sm-2' style={{ width: '15rem' }}>
                                       <div className='content mx-sm-3' >
                                       <i className='ui flag vn'></i>
                                       <Form.Label >Vietnam</Form.Label>
                                       <label className='ui  right floated green circular label'>6</label></div>
                                        </div>                      
                                        <div className='ui yellow fluid card' style={{ width: '15rem' }}>
                                       <div className='content mx-sm-3' >
                                       <i className='ui flag sg'></i>
                                       <Form.Label >Singapore</Form.Label>
                                       <label className='ui right floated green circular label'>6</label></div>
                                        </div>
                                        <div className='ui yellow fluid card' style={{ width: '15rem' }}>
                                       <div className='content mx-sm-3' >
                                       <i className='ui flag ph'></i>
                                       <Form.Label >Philipines</Form.Label>
                                       <label className='ui right floated green circular label'>6</label></div>
                                        </div>
                                        <div className='ui yellow fluid card mx-sm-2' style={{ width: '15rem' }}>
                                       <div className='content mx-sm-3' >
                                       <i className='ui flag hk'></i>
                                       <Form.Label >Hong Kong</Form.Label>
                                       <label className='ui right floated green circular label'>6</label></div>
                                        </div></div>
                                                                     
                            </Card></Col>                      
                        </Row>
                        <Row className='d-flex justify-content-end' style={{ marginTop: "2%" }} >
                                <Button onClick={this.setPassword} >Reset Password</Button>
                                <Button onClick={this.onSubmit}>Save</Button>
                        </Row>
                   
                </div>}

            </div>
        )
    }
}

export default Profile
