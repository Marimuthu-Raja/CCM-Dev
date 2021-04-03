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

            visible: false,
            visible_key: null,
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
        axios.get(`http://www.json-generator.com/api/json/get/cePWspeKMi?indent=2`)
            .then(res => {
                console.log(res.data, "response")
                this.setState({ quotation_list: res.data })
            })
        // axiosInstance.post(`/quotation/list`)
        //     .then(res => {
        //         const quotation_list = res.data.response.quotation_list
        //         console.log(quotation_list, "response")
        //         this.setState({ quotation_list })
        //     })
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
                <tr key={quotation.quotationNo} className={quotation.id % 2 === 0 ? "rowtable" : ""} onClick={() => this.invoice(quotation.id)} style={{ height: "50px", padding: "10px" }}>
                    <td  >{quotation.quotationNo}</td>
                    <td >{quotation.quotationDate}</td>
                    <td >{quotation.client}</td>
                    <td >{quotation.description}</td>
                    <td >{quotation.quoteAmount}</td>
                    <td >{quotation.quotationStatus}</td>
                    <td >{quotation.clientPO}</td>
                    <td >{quotation.margin}</td>
                    <td >{quotation.marginAmount}</td>
                    <td >{quotation.ticketNo}</td>
                    <td >{quotation.jobComplete}</td>

                </tr>
                { this.state.visible && this.state.visible_key == quotation.quotationNo && <Invoice id={quotation.quotationNo} />}
            </>
        )
    }


    onChange= (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    setDate = (date, name) => {
        this.setState({
            [name]: date
        })
    }

    render() {
        const { quotation_list, country_list, emailSearch, countrySearch, fromDate, toDate, status, } = this.state
        return (
            <div>
                {/* {addQuotation ? <AddQuotation /> : */}
                <div className="component">
                    <Card style={{ marginTop: "30px" }} >
                        <Row  >
                            <Col lg={3}>
                                <Form.Control
                                    type="text"
                                    name='emailSearch'
                                    placeholder="Enter email"
                                    value={emailSearch}
                                    onChange={this.onChange}
                                />
                                <button className='iconButtton' >
                                    <i className="fa fa-search" onClick={this.onSearch} ></i>
                                </button><br />
                            </Col>
                            <Col lg={2}>
                                <Form.Control as='select' value={countrySearch} name="countrySearch" onChange={this.onChange} >
                                    <option value='' >Select Country</option>
                                    {country_list.map(country => <option key={country.id} value={country.id} > {country.name} </option>)}
                                </Form.Control><br />
                                <button className='iconButtton' style={{ bottom: '55px' }} >
                                    <i className="fa fa-angle-right" style={{ fontSize: '25px' }} onClick={this.onSearch} ></i>
                                </button><br />
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
                                <Form.Control as='select' value={status} name="status" onChange={this.onChange} >
                                    <option value='' disabled selected>Status</option>
                                    <option value='pending'>Pending</option>
                                    <option value='completed'>Completed</option>
                                    <option value='cancel'>Cancel</option>
                                </Form.Control><br />
                            </Col>
                            <Col lg={1}>
                                <Link to='/addQuotation' ><button className='addIcon' >
                                    <i className="fa fa-plus" style={{ fontSize: "20px", color: "white" }}></i>
                                </button>
                                </Link>
                            </Col>

                        </Row>
                    </Card>
                    <Card style={{ marginTop: "30px", backgroundColor: "white" }}>
                        <Row>
                            <Table style={{ backgroundColor: "white" }} responsive>
                                <thead>
                                    <tr>
                                        <th >QUOTATION NUMBER</th>
                                        <th >DATE ISSUED</th>
                                        <th >CLIENT</th>
                                        <th >DESCRIPTION</th>
                                        <th >QUOTE AMOUNT</th>
                                        <th >QUOTE APPROVAL</th>
                                        <th>CLIENT PO</th>
                                        <th>MARGIN %</th>
                                        <th>MARGIN AMOUNT</th>
                                        <th>CCM TICKET NO</th>
                                        <th>JOB COMPLETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quotation_list.map(this.renderTable)}
                                </tbody>
                            </Table>
                        </Row>
                    </Card>
                </div>
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
