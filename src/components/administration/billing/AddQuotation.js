import React, { Component } from 'react'
import { Card, Container, Row, Col, Form, } from 'react-bootstrap'
import CustomTextBox from '../../utils/TextBox'
import CustomButton from '../../utils/Button'
import Swal from 'sweetalert2';
import axiosInstance from '../../utils/axiosinstance'
import CurrencyFormat from 'react-currency-format'
import Autocomplete from '@material-ui/lab/Autocomplete';


export class AddQuotation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: '',
            quotation_num: '',
            quotationDate: '',
            client_id: '',
            quoteAmount: '',
            description: '',
            quotationStatus: '',
            clientPO: '',
            margin: '',
            marginAmount: '',
            clientInvoiceNo: '',
            clientIVamount: '',
            InvoiceIssuedDate: '',
            paymentReceivedDate: '',
            receivedAmount: '',
            clientInvoiceCredit: false,
            clientCreditNotes: '',
            clientCreditIssuedDate: '',
            clientCreditAmount: '',
            workCommence: '',
            workComplete: '',
            cont_id: '',
            contractorPO: '',
            purchace_order: '',
            PO_amount: '',
            PO_date: '',
            vendorInvoiceNo: '',
            vendorInvoiceAmount: '',
            vendorInvoiceReceived: '',
            paidAmount: '',
            paidDate: '',
            cont_InvoiceCredit:'',cont_CreditAmount:'',cont_CreditIssuedDate:'',cont_CreditNotes:'',
            tax: '',
            jobComplete: '',
            ticketNo: '',

            client_list:[],
            contractor_list: [],
            client_invoice: [],
            contractor_invoice:[],
        }
    }

    componentDidMount() {
        axiosInstance.post(`/client/list`)
            .then(res => {
                const client_list = res.data.response.client_list
                this.setState({ client_list })
                console.log(client_list);
            })
        axiosInstance.post(`/contractor/list`)
            .then(res => {
                const contractor_list = res.data.response.contractor_list
                this.setState({ contractor_list })
                console.log(contractor_list);
            })
        axiosInstance.post(`/invoice/list`)
            .then(res => {
                const invoice_list = res.data.response.invoice_list
                this.setState({ 
                    client_invoice:invoice_list.filter(invoice=> invoice.cust_type==='1'),
                    contractor_invoice:invoice_list.filter(invoice=> invoice.cust_type==='2') 
                })
            })
            axiosInstance.post(`/quotation/list`)
            .then(res => {
                const quotation_list = res.data.response.quotation_list
                this.setState({ quotation_list })
                console.log(quotation_list, 'quotation_list');
            })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    checkboxChange = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
    }
    onChangeAmount = (values, name) => {
        const { formattedValue, value } = values;
        this.setState({ [name]: value })
    }
    autoComplete = (e, value, name) => {
        console.log(e,value)
         value !== null && this.setState({ [name]: value[name], })
    }
    onSubmit = (e) => {
        console.log(this.state)
    }



    render() {
        const { category, quotation_num, quotationDate, client, quoteAmount, description, quotationStatus, clientPO, margin, marginAmount,
            clientInvoiceNo, clientIVamount, InvoiceIssuedDate, paymentReceivedDate, receivedAmount, clientInvoiceCredit, clientCreditNotes, clientCreditIssuedDate, clientCreditAmount, workCommence, workComplete, contractorName, contractorPO, purchace_order, PO_amount, PO_date, vendorInvoiceNo,
            vendorInvoiceAmount, vendorInvoiceReceived, paidAmount, paidDate, tax, jobComplete, ticketNo,
            quotation_list,client_list,contractor_list,contractor_invoice,client_invoice , cont_InvoiceCredit,cont_CreditAmount,cont_CreditIssuedDate,cont_CreditNotes} = this.state;
        const categoryList = ['Categories Selection', 'FM Contract', 'Interior & General', 'Electrical', 'HVAC System', 'Plumping & Pest', 'Fire Protection', 'AV system', 'IT & Security', 'Carpentry Works', 'Furniture & Rugs', 'Additional Works']
        console.log(client_invoice,contractor_invoice)
        return (
            <div>
                <div className="component">
                    <Row>
                        <Col>
                            <p style={{ fontSize: "20px" }}>Add Quotation</p>
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <select className='select' name="category" value={category} onChange={this.onChange} >
                                {categoryList.map(category => <option value={category} > {category}</option>)}
                            </select>
                        </Col>
                    </Row>
                    <Card>
                        <Row>
                            <Col lg={3}>
                            <Form.Group >
                                    <Form.Label > Quotation No</Form.Label>
                                    <Autocomplete
                                        options={quotation_list}   
                                        onChange={(e, value) =>value !== null ? this.setState({quotation_num : value.quotation_num}) :this.setState({quotation_num : ''})}
                                        getOptionLabel={(option) => option.id}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}>
                                                <Form.Control placeholder='Quotation No' type="text" {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                            <Form.Group >
                                    <Form.Label > Client</Form.Label>
                                    <Autocomplete
                                        options={client_list}   
                                        onChange={(e, value) =>value !== null ? this.setState({client_id : value.id}): this.setState({client_id : ''}) }
                                        getOptionLabel={(option) => option.name}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}>
                                                <Form.Control placeholder='Client Name' type="text" {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label >Quote Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={quoteAmount}
                                        placeholder="Amount"
                                        onValueChange={(values) => this.onChangeAmount(values, 'quoteAmount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Client PO"
                                    txtBoxType="text"
                                    txtBoxName="clientPO"
                                    txtBoxValue={clientPO}
                                    txtBoxPH=" Client PO"
                                    changeEvent={this.onChange}
                                />
                            </Col>


                        </Row>
                        <Row>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Date Issued"
                                    txtBoxType="date"
                                    txtBoxName="quotationDate"
                                    txtBoxValue={quotationDate}
                                    txtBoxPH="Price Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Description"
                                    txtBoxType="text"
                                    txtBoxName="description"
                                    txtBoxValue={description}
                                    txtBoxPH="Description"
                                    changeEvent={this.onChange}
                                />
                            </Col>


                            <Col lg={3}>
                                <Form.Group >
                                    <Form.Label >Quote Approval</Form.Label>
                                    <Form.Control as="select" name="quotationStatus" value={quotationStatus} onChange={this.onChange}>
                                        <option value="" disabled>Quote Approval</option>
                                        <option value="approved">Approved</option>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancel">Cancel</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={1} >
                                <CustomTextBox
                                    txtBoxLabel="Margin"
                                    txtBoxType="text"
                                    txtBoxName="margin"
                                    txtBoxValue={margin}
                                    txtBoxPH="%"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={2} >
                                <CurrencyFormat
                                    className='form-control'
                                    placeholder="Amount"
                                    value={marginAmount}
                                    onValueChange={(values) => this.onChangeAmount(values, 'marginAmount')}
                                    thousandSeparator={true}
                                    style={{ marginTop: "47px" }} />
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px', }} >
                        <Row>

                            <Col lg={3}>
                                <Form.Group >
                                    <Form.Label > Client Invoice No</Form.Label>
                                    <Autocomplete
                                        options={client_invoice}   
                                        onChange={(e, value) => value !== null ? this.setState({clientInvoiceNo : value.num}):this.setState({clientInvoiceNo : ''})  }
                                        getOptionLabel={(option) => option.id}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}>
                                                <Form.Control placeholder='Invoice No' type="text" {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label >Client Invoice Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={clientIVamount}
                                        placeholder="Client Invoice Amount"
                                        onValueChange={(values) => this.onChangeAmount(values, 'clientIVamount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Invoice Issued Date"
                                    txtBoxType="date"
                                    txtBoxName="InvoiceIssuedDate"
                                    txtBoxValue={InvoiceIssuedDate}
                                    txtBoxPH="Commense"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Payment Received Date"
                                    txtBoxType="date"
                                    txtBoxName="paymentReceivedDate"
                                    txtBoxValue={paymentReceivedDate}
                                    txtBoxPH="Commense"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label >Received Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={receivedAmount}
                                        placeholder="Received Amount"
                                        onValueChange={(values) => this.onChangeAmount(values, 'receivedAmount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3} style={{ marginTop: '40px' }}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        style={{ fontSize: '1.3em', fontWeight: 'bold' }}
                                        name='clientInvoiceCredit'
                                        checked={clientInvoiceCredit}
                                        type="checkbox"
                                        label="Is Credit Available ?"
                                        onChange={this.checkboxChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {clientInvoiceCredit &&
                            <Row>
                                <Col lg={3}>
                                    <Form.Group>
                                        <Form.Label >Credit Amount</Form.Label>
                                        <CurrencyFormat
                                            className='form-control'
                                            value={clientCreditAmount}
                                            placeholder="Credit Amount"
                                            onValueChange={(values) => this.onChangeAmount(values, 'clientCreditAmount')}
                                            thousandSeparator={true} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3}>
                                    <CustomTextBox
                                        txtBoxLabel="Credit Issued Date"
                                        txtBoxType="date"
                                        txtBoxName="clientCreditIssuedDate"
                                        txtBoxValue={clientCreditIssuedDate}
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <CustomTextBox
                                        txtBoxLabel="Credit Note"
                                        txtBoxType="text"
                                        txtBoxName="clientCreditNotes"
                                        txtBoxValue={clientCreditNotes}
                                        txtBoxPH="Notes"
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                            </Row>}
                    </Card>
                    <Card style={{ marginTop: '15px', }} >
                        <Row>
                            <Col lg={3} >
                                <Form.Group >
                                    <Form.Label > Contractor Name</Form.Label>
                                    <Autocomplete
                                        options={contractor_list}   
                                        onChange={(e, value) => value !== null ? this.setState({cont_id : value.id}) : this.setState({cont_id : ''}) }
                                        getOptionLabel={(option) => option.name}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}>
                                                <Form.Control placeholder='Contractor Name' type="text" {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} >
                                <CustomTextBox
                                    txtBoxLabel="PO Number"
                                    txtBoxType="text"
                                    txtBoxName="contractorPO"
                                    txtBoxValue={contractorPO}
                                    txtBoxPH="Purchase Order"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3} >
                                <Form.Group>
                                    <Form.Label >PO Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={PO_amount}
                                        placeholder=" Amount "
                                        onValueChange={(values) => this.onChangeAmount(values, 'PO_amount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3} >
                                <CustomTextBox
                                    txtBoxLabel="PO Issued Date"
                                    txtBoxType="date"
                                    txtBoxName="PO_date"
                                    txtBoxValue={PO_date}
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Work Commence"
                                    txtBoxType="date"
                                    txtBoxName="workCommence"
                                    txtBoxValue={workCommence}
                                    txtBoxPH="Commense"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Work Complete"
                                    txtBoxType="date"
                                    txtBoxName="workComplete"
                                    txtBoxValue={workComplete}
                                    txtBoxPH="workComplete"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px' }}>
                        <Row>
                            <Col lg={3}>
                            <Form.Group >
                                    <Form.Label > Contractor Invoice No</Form.Label>
                                    <Autocomplete
                                        options={contractor_invoice}   
                                        onChange={(e, value) => value !== null ? this.setState({vendorInvoiceNo : value.num}) : this.setState({vendorInvoiceNo : ''}) }
                                        getOptionLabel={(option) => option.num}
                                        renderInput={(params) => (
                                            <div ref={params.InputProps.ref}>
                                                <Form.Control placeholder='Invoice No' type="text" {...params.inputProps} />
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label >Contractor Invoice Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={vendorInvoiceAmount}
                                        placeholder=" Amount "
                                        onValueChange={(values) => this.onChangeAmount(values, 'vendorInvoiceAmount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Invoice Received Date"
                                    txtBoxType="date"
                                    txtBoxName="vendorInvoiceReceived"
                                    txtBoxValue={vendorInvoiceReceived}
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Tax Invoice No"
                                    txtBoxType="text"
                                    txtBoxName="tax"
                                    txtBoxValue={tax}
                                    txtBoxPH=""
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Form.Group>
                                    <Form.Label >Paid Amount</Form.Label>
                                    <CurrencyFormat
                                        className='form-control'
                                        value={paidAmount}
                                        placeholder=" Amount "
                                        onValueChange={(values) => this.onChangeAmount(values, 'paidAmount')}
                                        thousandSeparator={true} />
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group>
                                    <CustomTextBox
                                        txtBoxLabel="Paid Date"
                                        txtBoxType="date"
                                        txtBoxName="paidDate"
                                        txtBoxValue={paidDate}
                                        changeEvent={this.onChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={3} style={{ marginTop: '40px' }}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        style={{ fontSize: '1.3em', fontWeight: 'bold' }}
                                        name='cont_InvoiceCredit'
                                        checked={cont_InvoiceCredit}
                                        type="checkbox"
                                        label="Is Credit Available ?"
                                        onChange={this.checkboxChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {cont_InvoiceCredit &&
                            <Row>
                                <Col lg={3}>
                                    <Form.Group>
                                        <Form.Label >Credit Amount</Form.Label>
                                        <CurrencyFormat
                                            className='form-control'
                                            value={cont_CreditAmount}
                                            placeholder="Credit Amount"
                                            onValueChange={(values) => this.onChangeAmount(values, 'cont_CreditAmount')}
                                            thousandSeparator={true} />
                                    </Form.Group>
                                </Col>
                                <Col lg={3}>
                                    <CustomTextBox
                                        txtBoxLabel="Credit Issued Date"
                                        txtBoxType="date"
                                        txtBoxName="cont_CreditIssuedDate"
                                        txtBoxValue={cont_CreditIssuedDate}
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                                <Col lg={6}>
                                    <CustomTextBox
                                        txtBoxLabel="Credit Note"
                                        txtBoxType="text"
                                        txtBoxName="cont_CreditNotes"
                                        txtBoxValue={cont_CreditNotes}
                                        txtBoxPH="Notes"
                                        changeEvent={this.onChange}
                                    />
                                </Col>
                            </Row>}
                    </Card>
                    <Card style={{ marginTop: '15px', backgroundColor: '#C0BFBF' }}>
                        <Row>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="CCM Ticket Number"
                                    txtBoxType="text"
                                    txtBoxName="ticketNo"
                                    txtBoxValue={ticketNo}
                                    txtBoxPH=""
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Job Complete"
                                    txtBoxType="date"
                                    txtBoxName="jobComplete"
                                    txtBoxValue={jobComplete}
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Row className='d-flex justify-content-end' style={{ marginTop: '20px' }}>
                        <CustomButton btnType="reset" BtnTxt="Complete" ClickEvent={this.onComplete} />
                        <CustomButton btnType="reset" BtnTxt="Save" ClickEvent={this.onSubmit} />
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddQuotation
