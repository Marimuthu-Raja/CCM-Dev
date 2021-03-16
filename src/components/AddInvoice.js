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
import CustomTextBox from './CustomBox/TextBox'
import CustomButton from './Button/Button'
import Logo from '../logo-light.png'
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
            invoice_user: 'client',
            client_id: '',
            contractor_id: '',
            price: '',
            description: '',
            date: '',
            client_list: [],
            contractor_list:[],
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
        this.setState({ [e.target.name]: e.target.value })
    }

    clientSearch = (e, value)=>{
        value !== null && this.setState({ client_id: value.id, client_name:value.name ,contractor_id:''})  
    }
    contractorSearch = (e, value)=>{
        value !== null && this.setState({ contractor_id: value.id, contractor_name: value.name,client_id:''  })
    }

    onSubmit = (e) => {
        const { invoice_id,  client_id, contractor_id, price, description, date } = this.state;
        var data = '';
          if( client_id !== ''){
            data = { client_id, price, description, date, }
          }else{
            data = { contractor_id, price, description, date, }
          }
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

    onCancel = ()=>{
        this.setState({
            invoice_id: '',
            invoice_user: 'client',
            client_id: '',
            contractor_id: '',
            price: '',
            description: '',
            date: '',
            client_list: [],
            contractor_list:[],
        })
        this.componentDidMount()
    }
    render() {
        const { invoice_user, client_list, contractor_list,client_name, contractor_name, price, description, date } = this.state;
        return (
            <div>
                <div className="component">
                    <p style={{ fontSize: "20px" }}>Add Invoice</p>

                    <Card border="dark" sm={6} style={{ height: "500px" }}>
                        <Form >
                            <Row>
                                <Col lg={{ span: '5', offset: '1' }}>
                                    <Form.Label style={{ marginTop: "10px", fontSize: "18px" }}> Invoice </Form.Label>
                                    <Form.Control as="select" className="select-style" name="invoice_user" defaultValue={invoice_user} onChange={this.onChange} style={{ padding: "10px" }} required>
                                        <option value='' disabled> Select</option>
                                        <option value='client' > Client</option>
                                        <option value='contractor' > Contractor</option>

                                    </Form.Control>
                                </Col>
                                <Col lg={{ span: '5', }}>
                                    <Form.Group  >
                                        {invoice_user === 'client'
                                            ? <>
                                                <Form.Label style={{ marginTop: "10px", fontSize: "18px" }}> Client</Form.Label>
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    options={client_list}
                                                    value={client_name}
                                                    onChange={(e, value)=>this.clientSearch(e, value)}
                                                    getOptionLabel={(option) => option.name}
                                                    style={{ width: '80% ', backgroundColor:'white', padding:'0px'}}
                                                    renderInput={(params) => <TextField {...params} size='small'   variant="outlined" />}
                                                />

                                            </>
                                            : <>
                                            <Form.Label style={{ marginTop: "10px", fontSize: "18px" }}> Contractor</Form.Label>
                                               <Autocomplete
                                                    id="combo-box-demo"
                                                    options={contractor_list}
                                                    value={contractor_name}
                                                    onChange={(e,value)=>this.contractorSearch(e, value)}
                                                    getOptionLabel={(option) => option.name}
                                                    style={{ width: '80% ', backgroundColor:'white', padding:'0px'}}
                                                    renderInput={(params) => <TextField {...params} size='small'  variant="outlined" />}
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
