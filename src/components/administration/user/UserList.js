import React, { Component } from 'react'
import { Col, Row, Card, Container, Form } from 'react-bootstrap'
import axiosInstance from '../../utils/axiosinstance'
import CustomTextBox from '../../utils/TextBox'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import UserProfile from './AddUser'

var token = localStorage.getItem('access_token')

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailSearch: '',
            countrySearch: '',
            status: '',
            user_id: null,
            addUser: false,
            users: [],
            country_list: [],
        }
    }

    componentDidMount() {
        axiosInstance.post(`/country/list`)
            .then((res) => {
                const country_list = res.data.response.country_list
                this.setState({ country_list })
                console.log(country_list)
            })
        axiosInstance.post(`/user/list`)
            .then(res => {
                const users = res.data.response.user_list
                this.setState({ users })
                console.log(users);
            })
    }
    trashContractor = (id) => {
        console.log(id)
        axiosInstance.post(`https://ccm.digisailor.in/api/public/user/delete`, { id })
            .then((res) => {
                console.log(res);
                if (res.data.message.success !== undefined) {
                    swal("success!", `${res.data.message.success}`, "success").then(() => this.componentDidMount())
                } else {
                    swal("error!", `${res.data.message.error}`, "error")
                }
            })
    }
    renderComponent = (id) => {
        this.setState({
            addUser: true,
            user_id: id,
        })
    }
    Back = (e) => {
        this.setState({
            addUser: false,
            user_id: null,
        })
        this.componentDidMount()
    }

    userTable = (user) => {
        console.log(user.country)
        return (
            <tr key={user.id} className={user.id % 2 === 0 ? "rowtable" : ""} style={{ height: "40px" }}>
                <td>{user.name}</td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {this.state.country_list.map(country => {
                    return (user.country === country.id) && <td>{country.name}</td>
                })}
                <td><button onClick={(e) => this.trashContractor(user.id)} style={{ border: "none" }} ><i className="fa fa-trash" style={{ fontSize: "18px", color: "red" }}></i></button></td>
                <td> <button onClick={(e) => this.renderComponent(user.id)} style={{ width: "100px", height: "25px", backgroundColor: "#4A88DC", border: "none", color: "white", borderRadius: "10px" }}>EDIT</button></td>
            </tr>
        )
    }


    render() {
        const { emailSearch, countrySearch, status, users, addUser, country_list } = this.state

        return (
            <div>
                {addUser ? <UserProfile id={this.state.user_id} Back={this.Back} /> :
                    <div>

                        <div className="component">
                            <h3 style={{ marginTop: "30px" }}>User List</h3>
                            <Card style={{ marginTop: "20px", backgroundColor: "white" }}>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Control
                                            type="text"
                                            name='emailSearch'
                                            placeholder="Enter email"
                                            value={emailSearch}
                                        />
                                        <button className='iconButtton' ><i className="fa fa-search" onClick={this.onSearch} ></i></button><br />
                                    </Col>
                                    <Col lg={3}>
                                        <Form.Control as='select' value={countrySearch} name="countrySearch"  >
                                            <option value='' >Select Country</option>
                                            {country_list.map(country => <option key={country.id} value={country.id} > {country.name} </option>)}
                                        </Form.Control><br />
                                        <button className='iconButtton' style={{ bottom: '55px' }} >
                                            <i className="fa fa-angle-right" style={{ fontSize: '25px' }} onClick={this.onSearch} ></i>
                                            </button><br />
                                    </Col>
                                    <Col lg={2}>
                                        <Form.Control as='select' value={status} name="status"  >
                                            <option value='' disabled selected>Status</option>
                                            <option value='pending'>Pending</option>
                                            <option value='completed'>Completed</option>
                                            <option value='cancel'>Cancel</option>
                                        </Form.Control><br />
                                    </Col>
                                    <Col lg={{offset:'2'}}>
                                        <button className='addIcon' onClick={() => this.setState({ addUser: !addUser })} >
                                            <i className="fa fa-plus" style={{ fontSize: "20px", color: "white" }}></i>
                                        </button>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: "35px", overflow: "auto" }}>
                                    <table class="table ">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">DEPARTMENT</th>
                                                <th scope="col">EMAIL ID</th>
                                                <th scope="col">PHONE NO</th>
                                                <th scope="col">COUNTRY</th>
                                                <th scope="col">DELETE</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col"></th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {users.map(this.userTable)}
                                        </tbody>
                                    </table>
                                </Row>
                            </Card>
                        </div>
                    </div>}
            </div>
        )
    }
}

export default User
