import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image,
    Table,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosinstance'
import axios from 'axios'
import Invoice from '../../Invoice'
import DatePicker from "react-datepicker";
import AddQuotation from './AddQuotation'

var token = localStorage.getItem('access_token')

export default class quotation_list extends Component {

    constructor(props) {
        super(props);
        this.state = {

            emailSearch: '',
            countrySearch: '',
            fromDate: '',
            toDate: '',
            status: '',
            
            visible:false,
            visible_key:null,
            addQuotation: false,
            country_list: [],
            quotation_list: [],
        }
    }

    componentDidMount() {
        axiosInstance.post(`/country/list`)
            .then((res) => {
                const country_list = res.data.response.country_list
                this.setState({ country_list })
                console.log(country_list)
            })
        axiosInstance.post(`/quotation/list`)
            .then(res => {
                const quotation_list = res.data.response.quotation_list
                console.log(quotation_list, "response")
                this.setState({ quotation_list })
            })
    }
    invoice = (e) => {
        console.log(e)
        this.setState({
            visible: !this.state.visible,
            visible_key: e
        })
    }

    renderTable = (quotation) => {
        return (
            <>

                <tr key={quotation.id} className={quotation.id % 2 === 0 ? "rowtable" : ""} onClick={() => this.invoice(quotation.id)} style={{ height: "50px", padding: "10px" }}>
                    <td style={{ padding: "15px" }}>{quotation.Name}</td>
                    <td style={{ padding: "15px" }}>{quotation.Address}</td>
                    <td style={{ padding: "15px" }}>{quotation.Email}</td>
                    <td style={{ padding: "15px" }}>{quotation.Phone}</td>
                    <td style={{ padding: "15px" }}>{quotation.Contactperson}</td>
                    <td style={{ padding: "15px" }}>{quotation.Contactperson}</td>

                </tr>
                { this.state.visible && this.state.visible_key == quotation.id && <Invoice id={quotation.id} />}



            </>
        )
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    setDate = (date, name) => {
        this.setState({
            [name]: date
        })
    }

    render() {
        const { quotation_list, country_list, emailSearch, countrySearch, fromDate, toDate, status, addQuotation } = this.state
        return (
            <div>
                {addQuotation ? <AddQuotation /> :
                <div className="component">
                    <Card style={{ marginTop: "30px" }} >
                        <Row  >
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    name='emailSearch'
                                    placeholder="Enter email"
                                    value={emailSearch}
                                />
                                <button className='iconButtton' ><i className="fa fa-search" onClick={this.onSearch} ></i></button><br />
                            </Col>
                            <Col lg={2}>
                                <Form.Control as='select' value={countrySearch} name="countrySearch"  >
                                    <option value='' >Select Country</option>
                                    {country_list.map(country => <option key={country.id} value={country.id} > {country.name} </option>)}
                                </Form.Control><br />
                                <button className='iconButtton' style={{bottom:'55px'}} ><i className="fa fa-angle-right" style={{fontSize:'25px'}} onClick={this.onSearch} ></i></button><br />
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    onChange={this.onChange}
                                /><br />
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    type="date"
                                    name="toDate"
                                    value={toDate}
                                    onChange={this.onChange}
                                /><br />
                            </Col>
                            <Col lg={2}>
                                <Form.Control as='select' value={status} name="status"  >
                                    <option value='' disabled selected>Status</option>
                                    <option value='pending'>Pending</option>
                                    <option value='completed'>Completed</option>
                                    <option value='cancel'>Cancel</option>
                                </Form.Control><br />
                            </Col>
                            <Col lg={1}>
                                <button className='addIcon' onClick={() => this.setState({ addQuotation: !addQuotation })} >
                                    <i className="fa fa-plus" style={{ fontSize: "20px", color: "white" }}></i>
                                </button>
                            </Col>

                        </Row>
                    </Card>
                    <Card style={{ marginTop: "30px", backgroundColor: "white" }}>
                        <Row style={{ marginTop: "30px" }}>
                            <Table hover style={{ backgroundColor: "white" }}>
                                <thead>
                                    <tr>
                                        <th>Quotation Number</th>
                                        <th >Date Issued</th>
                                        <th >Client</th>
                                        <th >Description</th>
                                        <th >Quote Amount</th>
                                        <th >Quote Approval</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {quotation_list.map(this.renderTable)} */}
                                </tbody>
                            </Table>
                        </Row>
                    </Card>
                </div>}
            </div>
        )
    }
}


// const renderInvoice = () => {
//     return (
//         <Card>

//         </Card>
//     )
// }
