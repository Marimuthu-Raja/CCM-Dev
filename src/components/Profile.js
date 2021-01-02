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
            password:'',
            confirm_password:'',
            email:'',
            user_type:'',
            position:'',
            
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
        const { full_name,user_name,country,password,confirm_password,email,user_type,position,} = this.state;
        return (
            <div>
                <Container  >
                    <Card style={{marginTop:"50px"}} >
                        <Row>
                            <Col lg={4} sm={12}>
                                
                                <Image src={Logo} className="profile-img" ></Image>
                            
                            </Col>
                            <Col  lg={4} sm={12}>

                            <CustomTextBox
                            style = ""
                            txtBoxLabel ="Full name"
                            txtBoxType ="text"
                            txtBoxName = "full_name"
                            txtBoxValue = {full_name}
                            txtBoxID = "full_name"
                            txtBoxPH ="Full Name"
                            changeEvent = {this.onChange}
                            />
                            <CustomTextBox
                            style = ""
                            txtBoxLabel ="User name"
                            txtBoxType ="text"
                            txtBoxName = "user_name"
                            txtBoxValue = {user_name}
                            txtBoxID = "user_name"
                            txtBoxPH ="User Name"
                            changeEvent = {this.onChange}
                            />
                            <Form.Group as={Col}>
                                <Form.Label>Country</Form.Label>
                                <Col>
                                <Form.Control as="select" className="select-style" name="country"  value={country} onChange={this.onChange} required>
                                        <option value="country"selected disabled> </option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3 </option>
                                        <option value="Country 4">Country 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <CustomTextBox
                            style = ""
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
                            
                            
                            <Form.Group as={Col}>
                                <Form.Label>User Type</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="user_type" value={user_type}  onChange={this.onChange} required>
                                        <option value=""selected disabled> User type</option>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <CustomTextBox
                            style = ""
                            txtBoxLabel ="Position"
                            txtBoxType ="text"
                            txtBoxName = "position"
                            txtBoxValue = {position}
                            txtBoxID = "position"
                            txtBoxPH ="Position"
                            changeEvent =  {this.onChange}
                            />
                             <CustomTextBox
                            style = ""
                            txtBoxLabel =" Password"
                            txtBoxType ="password"
                            txtBoxName = "password"
                            txtBoxValue = {password}
                            txtBoxID = "password"
                            txtBoxPH ="Password"
                            changeEvent =  {this.onChange}
                            />
                            <CustomTextBox
                            style = ""
                            txtBoxLabel ="Confirm"
                            txtBoxType ="text"
                            txtBoxName = "confirm_password"
                            txtBoxValue = {confirm_password}
                            txtBoxID = "confirm_password"
                            txtBoxPH ="Password"
                            changeEvent = {this.onChange}
                            />
                            </Col>
                        </Row>
                        <Row className="row justify-content-center">
                            <Button onClick={this.onSubmit}>Save</Button>
                        </Row>
                    </Card>
                </Container>
                
            </div>
        )
    }
}

export default Profile
