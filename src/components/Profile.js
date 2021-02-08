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



export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            full_name:'',
            user_name:'',
            country:'',
            email:'',
            email:'',
            department:'',
            password:'',
            address:'',
            mobile:'',
            
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    swalAlert =(name)=>{
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'please fillout '+name,
              button:{
                OK:true
              },
            }).then((value)=>{
              $("#"+name).focus()
            });
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const { full_name,user_name,country,password,confirm_password,email,user_type,position,} = this.state;
    
        const condition=(full_name==="")?this.swalAlert("full_name"): 
        (user_name==="")?this.swalAlert("user_name"):
        (country==="")?this.swalAlert("country"):
        (email==="")?this.swalAlert("email"): 
        (user_type==="")?this.swalAlert("user_type"): 
        (position==="")?this.swalAlert("position"):
        (password==="")?this.swalAlert("password"):
        (confirm_password==="")?this.swalAlert("confirm_password"): 
        swal({icon: 'success',text: 'Profile submitted successfully'})
       

    }
    
    render() {
        const { full_name,user_name,country,email, department, password,address, mobile} = this.state;
        return (
            <div>
              
                 <div className="component">
                    <Card style={{marginTop:"30px"}} >
                        <Row style={{marginTop:"50px"}} >
       
                            <Col lg={4} sm={12}>
                                
                                <Image src={Logo} className="profile-img" ></Image>
                            
                            </Col>
                            <Col  lg={4} sm={12}>

                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel ="Full name"
                            txtBoxType ="text"
                            txtBoxName = "full_name"
                            txtBoxValue = {full_name}
                            txtBoxID = "full_name"
                            txtBoxPH ="Full Name"
                            changeEvent = {this.onChange}
                            />
                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel ="User name"
                            txtBoxType ="text"
                            txtBoxName = "user_name"
                            txtBoxValue = {user_name}
                            txtBoxID = "user_name"
                            txtBoxPH ="User Name"
                            changeEvent = {this.onChange}
                            />
                            <Form.Group as={Col} style={{paddingBottom:"10px"}}>
                                <Form.Label className="lg-label-style">Country</Form.Label>
                                <Col>
                                <Form.Control as="select" className="select-style" name="country"  value={country} onChange={this.onChange} required>
                                        <option value="country"selected disabled> </option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3 </option>
                                        <option value="Country 4">Country 4</option>
                                    </Form.Control><i class="fas fa-angle-down" style={{fontSize:"20px", position:"relative", bottom:"26px", left:"70%"}}></i>
                    
                                </Col>
                            </Form.Group>
                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel ="Email"
                            txtBoxType ="text"
                            txtBoxName = "email"
                            txtBoxValue = {email}
                            txtBoxID = "email"
                            txtBoxPH ="Email"
                            changeEvent =  {this.onChange}
                            />
                           
                            
                            
                            </Col>

                            {/* 2cond col */}

                            <Col lg={4} sm={12}>
                            
                            
                            <Form.Group as={Col} style={{paddingBottom:"10px"}}>
                                <Form.Label  className="lg-label-style">Department</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="department" value={department}  onChange={this.onChange} required>
                                        <option value=""selected disabled> Plumping</option>
                                        <option value="Admin">department 2</option>
                                        <option value="User">department 3</option>
                                        <option value="Admin">department 4</option>
                                        <option value="User">department 5</option>
                                    </Form.Control> 
                                </Col>
                            </Form.Group>
                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel =" Password"
                            txtBoxType ="password"
                            txtBoxName = "password"
                            txtBoxValue = {password}
                            txtBoxID = "password"
                            txtBoxPH ="********"
                            changeEvent =  {this.onChange}
                            />
                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel ="Address"
                            txtBoxType ="text"
                            txtBoxName = "address"
                            txtBoxValue = {address}
                            txtBoxID = "address"
                            txtBoxPH ="Address"
                            changeEvent =  {this.onChange}
                            />
                            <CustomTextBox
                            style = "lg-label-style"
                            txtBoxLabel ="Phone Number"
                            txtBoxType ="text"
                            txtBoxName = "mobile"
                            txtBoxValue = {mobile}
                            txtBoxID = "mobile"
                            txtBoxPH ="mobile"
                            changeEvent =  {this.onChange}
                            />
                            </Col>
                        </Row>
                        <Row style={{marginTop:"200px"}} >
                            <Col sm={{span:4, offset:8}} lg={{span:4, offset:8}}> 
                                <Button  >Reset Password</Button>
                                <Button onClick={this.onSubmit}>Save</Button>
                            </Col> 
                        </Row>
                    </Card>
                </div>
                
            </div>
        )
    }
}

export default Profile
