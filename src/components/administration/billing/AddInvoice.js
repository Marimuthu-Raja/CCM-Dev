import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image,
    Input,
} from 'react-bootstrap';
import CustomTextBox from '../../utils/TextBox'
import CustomButton from '../../utils/Button'
import Logo from '../../img/logo-light.png'
import axios from 'axios'
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

var token = localStorage.getItem('access_token')

export class AddInvoice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            invoice_id: '',

            cust_type: '1',
            cust_id:'',
            cust_name:'',
            price: '',
            description: '',
            date: '',
            client_list: [],
            contractor_list: [],
        }
    }
    componentDidMount() {
        axios.post(`https://ccm.digisailor.in/api/public/client/list`, {}, {
            params: { access_token: token }
        })
            .then(res => {
                const client_list = res.data.response.client_list
                this.setState({ client_list })
                console.log(client_list);
            })
        axios.post(`https://ccm.digisailor.in/api/public/contractor/list`, {}, {
            params: { access_token: token }
        })
            .then(res => {
                const contractor_list = res.data.response.contractor_list
                this.setState({ contractor_list })
                console.log(contractor_list);
            })
    }

    onChange = (e) => {  
        if(e.target.name ==='cust_type'){
            this.setState({ cust_id:'', cust_name: '', })
        }
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    customerSearch = (e, value) => {
        console.log(value)
        value !== null && this.setState({ cust_id: value.id, cust_name: value.name, })
    }
    // contractorSearch = (e, value) => {
    //     value !== null && this.setState({ contractor_id: value.id, contractor_name: value.name, client_id: '' })
    // }

    onSubmit = (e) => {
        const { invoice_id,cust_type,cust_id, price, description, date } = this.state;
    
        const data = { cust_type, cust_id, price, description, date, }
        console.log(data, 'data')
        axios.post(`https://ccm.digisailor.in/api/public/invoice/add`, data, {
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
            .catch((e) => {
                console.log(e)
            })
    }

    onCancel = () => {
        this.setState({
            invoice_id: '',
            cust_type: 'client',
            client_id: '',
            contractor_id: '',
            price: '',
            description: '',
            date: '',
            client_list: [],
            contractor_list: [],
        })
        this.componentDidMount()
    }
    render() {
        const { cust_type,cust_name,cust_id, client_list, contractor_list, client_name, contractor_name, price, description, date } = this.state;
        return (
            <div>
                <div className="component">
                    <p style={{ fontSize: "20px" }}>Add Invoice</p>

                    <Card sm={6} >
                        <Form >
                            <Row>
                                <Col lg={{ span: '5', offset: '1' }}>
                                    <Form.Group  >
                                        <Form.Label > Customer Type </Form.Label>
                                        <Form.Control as="select" className="select-style" name="cust_type" defaultValue={cust_type} onChange={this.onChange} required>
                                            <option value='' disabled> Select</option>
                                            <option value='1' > Client</option>
                                            <option value='2' > Contractor</option>

                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={{ span: '5', }}>
                                    <Form.Group  >
                                        {cust_type === '1'
                                            ? <>
                                                <Form.Label style={{ marginTop: "5px", }} > Client</Form.Label>
                                                <Autocomplete
                                                    options={client_list} 
                                                    onChange={(e, value) => this.customerSearch(e, value)}
                                                    getOptionLabel={(option) => option.name}
                                                    style={{ backgroundColor: 'white', boxShadow: '1px 2px 6px #989898' }}
                                                    renderInput={(params) => <TextField {...params} size='small' variant="outlined" />}
                                                />

                                            </>
                                            : <>
                                                <Form.Label style={{ marginTop: "5px", }}> Contractor</Form.Label>
                                                <Autocomplete
                                                    options={contractor_list}
                                                    onChange={(e, value) => this.customerSearch(e, value)}
                                                    getOptionLabel={(option) => option.name}
                                                    style={{ backgroundColor: 'white', boxShadow: '1px 2px 6px #989898' }}
                                                    renderInput={(params) => <TextField {...params} size='small' variant="outlined" />}
                                                /> </>}
                                    </Form.Group>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={{ span: '5', offset: '1' }}>
                                    <CustomTextBox
                                        txtBoxLabel="Price"
                                        txtBoxType="text"
                                        txtBoxName="price"
                                        txtBoxValue={price}
                                        txtBoxID="price"
                                        txtBoxPH="Price Amount"
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                                <Col lg={{ span: '5', }}>
                                    <CustomTextBox
                                        txtBoxLabel="Description"
                                        txtBoxType="text"
                                        txtBoxName="description"
                                        txtBoxValue={description}
                                        txtBoxID="description"
                                        txtBoxPH="Description"
                                        changeEvent={this.onChange}
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={{ span: '5', offset: '1' }}>
                                    <CustomTextBox
                                        txtBoxLabel="Date"
                                        txtBoxType="date"
                                        txtBoxName="date"
                                        txtBoxValue={date}
                                        txtBoxID="price"
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                            </Row>

                            <Row className='d-flex justify-content-center' style={{ marginTop: '80px' }}>
                                <CustomButton btnType="reset" BtnTxt="Add" ClickEvent={this.onSubmit} />
                                {/* <CustomButton btnType="reset" BtnTxt="Update" ClickEvent={this.onUpdate} />
                                <CustomButton btnType="reset" BtnTxt="Delete" ClickEvent={this.onDelete} />
                                <CustomButton btnType="reset" BtnTxt="Cancel" ClickEvent={this.onCancel} /> */}
                            </Row>

                        </Form>
                    </Card>
                </div>

            </div>
        )
    }
}

export default AddInvoice
