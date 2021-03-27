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
import Logo from '../../img/logo-light.png'
import axios from 'axios'
import CustomButton from '../../utils/Button'
import { pathOr, equals, head, filter, } from 'ramda';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

var token = localStorage.getItem('access_token')

export default class Addcontractor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractor_id: this.props.id,
            name: '',
            address: '',
            country: 0,
            phone: '',
            email: '',
            contact_person: '',
            country_list: [],
        }
    }

    componentDidMount() {
        axios.post(`https://ccm.digisailor.in/api/public/country/list`, {}, {
            params: { access_token: token }
        }).then((res) => {
            const country_list = res.data.response.country_list
            this.setState({ country_list })
        })

        if (this.state.contractor_id !== null) {
            axios.post(`https://ccm.digisailor.in/api/public/contractor/get_contractor_details`, { id: this.state.contractor_id }, {
                params: { access_token: token }
            })
                .then(res => {
                    const contractor_details = res.data.response.contractor_details
                    this.setState({
                        name: contractor_details.name,
                        address: contractor_details.address,
                        country: contractor_details.country,
                        phone: contractor_details.phone,
                        email: contractor_details.email,
                        contact_person: contractor_details.contact_person,
                    })
                })
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    onSubmit = (e) => {
        const { name, address, phone, email, contact_person, country } = this.state;
        const data = { name, email, country, address, contact_person, phone, }

        axios.post(`https://ccm.digisailor.in/api/public/contractor/add`, data, {
            auth: {
                username: 'ccm_auth',
                password: 'ccm_digi123#'
            },
            params: { access_token: token }
        })
            .then((res) => {
                console.log(res);
                if (res.data.message.success !== undefined) {
                    swal("success!", `${res.data.message.success}`, "success").then(() => this.onCancel())
                } else {
                    swal("error!", `${res.data.message.error}`, "error")
                }

            })
    }
    onUpdate = (e) => {
        const { name, address, phone, email, contact_person, country, contractor_id } = this.state;
        const data = { name, email, country, address, contact_person, phone, }

        axios.post(`https://ccm.digisailor.in/api/public/contractor/edit/` + contractor_id, data, {
            auth: {
                username: 'ccm_auth',
                password: 'ccm_digi123#'
            },
            params: { access_token: token }
        })
            .then((res) => {
                console.log(res);
                if (res.data.message.success !== undefined) {
                    swal("success!", `${res.data.message.success}`, "success").then(() => this.onCancel())
                } else {
                    swal("error!", `${res.data.message.error}`, "error")
                }
                this.props.Back()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    onCancel = () => {
        this.setState({
            contractor_id: this.props.id,
            name: '',
            address: '',
            country: 0,
            phone: '',
            email: '',
            contact_person: '',
            contractor_list: [],
            country_list: [],
        })
        this.componentDidMount();
    }
    render() {
        const { name, address, phone, email, contact_person, country, country_list } = this.state;
        return (
            <div>
                <div className="component">
                    <h5>ADD/EDIT VENDOR PROFILE</h5>
                    <Card style={{ marginTop: "3%" }}>
                        <Form>
                            <Row>
                                <Col style={{ marginTop: "80px" }} lg={4}>
                                    <Image src={Logo} className='profile-img'></Image>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Col>
                                            <Form.Label >Contractor Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Full Name"
                                                name="name"
                                                value={name}
                                                onChange={this.onChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Address"
                                            name="address"
                                            value={address}
                                            onChange={this.onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Country</Form.Label>
                                        <Form.Control as="select" className="select-style" name="country" value={country} onChange={this.onChange} required>
                                            <option value='0' selected disabled> Country</option>
                                            {country_list.map((country) => {
                                                return <option key={country.id} value={country.id}>{country.name}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col lg={4}>
                                    <Form.Group>
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label >Contact Person</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Full Name"
                                            name="contact_person"
                                            value={contact_person}
                                            onChange={this.onChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="row justify-content-md-center" style={{ marginTop: "3%" }}>
                                <CustomButton btnType="reset" BtnTxt="Back" ClickEvent={this.props.Back} />
                                <CustomButton btnType="reset" BtnTxt="Add" disabledButton={this.props.id !== undefined} ClickEvent={this.onSubmit} />
                                <CustomButton btnType="reset" BtnTxt="Update" disabledButton={this.props.id === undefined} ClickEvent={this.onUpdate} />
                                <CustomButton btnType="reset" BtnTxt="Cancel" ClickEvent={this.onCancel} />
                            </Row>
                        </Form>
                    </Card>
                </div>

            </div>
        )
    }
}
