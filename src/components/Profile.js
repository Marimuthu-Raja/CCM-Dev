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
                    <Card style={{ marginTop: "30px" }} >
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
                        </Row>
                        <Row className='d-flex justify-content-end' style={{ marginTop: "3%" }} >
                                <Button onClick={this.setPassword} >Reset Password</Button>
                                <Button onClick={this.onSubmit}>Save</Button>
                        </Row>
                    </Card>
                </div>}

            </div>
        )
    }
}

export default Profile
