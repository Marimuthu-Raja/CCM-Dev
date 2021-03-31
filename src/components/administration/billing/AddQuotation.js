import React, { Component } from 'react'
import { Card, Container, Row, Col, Form, } from 'react-bootstrap'
import CustomTextBox from '../../utils/TextBox'
import CustomButton from '../../utils/Button'
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';


export class AddQuotation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quotationNo: '',
            clientInvoiceNo: '',
            description: '',
            date: '',
            amount: '',
            marginamount: '',
            status: '',
            client: '',
            client_po: '',
            margin: '',
            workCommence: '',
            complete: '',
            contractor: '',
            purchace_order: '',
            po_amount: '',
            po_date: ''
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { quotationNo, clientInvoiceNo, description, date, amount, status, client, client_po, margin, marginamount, workCommence, complete, contractor, purchace_order, po_amount, po_date } = this.state;
        if (quotationNo === '' && clientInvoiceNo === '' && description === '' && status === '' && date === '' && amount === '' && client === '' && margin === '' && marginamount === '' && workCommence === '' && complete === '' && contractor === '' && purchace_order === '' && po_amount === '' && po_date === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
            })

        }
        else {
            axios.post('', { quotationNo, clientInvoiceNo, description, date, amount, status, client, client_po, margin, marginamount, workCommence, complete, contractor, purchace_order, po_amount, po_date })
                .then(function (response) {
                    //access the results here....           
                    swal("success!", "Client added", "success").then(setInterval(function () { window.location.reload(); }, 1500));// alert
                    console.log(response);// log
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(this.state.errors)
        }
    }



    render() {
        const { category, quotationNo, quotationDate, client, quoteAmount, description, quotationStatus, clientPO, margin, marginAmount, clientInvoiceNo, clientIVamount, InvoiceIssuedDate, paymentReceivedDate, receivedAmount, workCommence, workComplete, contractorName, contractorPO, purchace_order, PO_amount, PO_date, vendorInvoiceNo,
            vendorInvoiceAmount, vendorInvoiceReceived, paidAmount, paidDate, tax, jobComplete, ticketNo } = this.state;
        const categoryList = ['Categories Selection', 'FM Contract', 'Interior & General', 'Electrical', 'HVAC System', 'Plumping & Pest', 'Fire Protection', 'AV system', 'IT & Security', 'Carpentry Works', 'Furniture & Rugs', 'Additional Works']
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
                                <Form.Group>
                                    <Form.Label >Quotation No</Form.Label>
                                    <Form.Control as="select" name="quotation" value={quotationNo} onChange={this.onChange} required>
                                        <option value="Quotation" selected disabled> Quotation No</option>
                                        <option value="Quotation 1">Quotation 1</option>
                                        <option value="Quotation 2">Quotation 2</option>
                                        <option value="Quotation 3">Quotation 3 </option>
                                        <option value="Quotation 4">Quotation 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Client"
                                    txtBoxType="text"
                                    txtBoxName="client"
                                    txtBoxValue={client}
                                    txtBoxPH=" Client"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Quote Amount"
                                    txtBoxType="text"
                                    txtBoxName="quoteAmount"
                                    txtBoxValue={quoteAmount}
                                    txtBoxPH=" Quote Amount"
                                    changeEvent={this.onChange}
                                />
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
                                <Form.Control
                                    type="number"
                                    name="marginAmount"
                                    value={marginAmount}
                                    placeholder="Amount"
                                    onChange={this.onChange}
                                    style={{ marginTop: "45px" }} />
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px', }} >
                        <Row>

                            <Col lg={3}>
                                <Form.Group >
                                    <Form.Label >Client Invoice No</Form.Label>
                                    <Form.Control as="select" name="clientInvoiceNo" value={clientInvoiceNo} onChange={this.onChange} required>
                                        <option value="" disabled> Invoice No </option>
                                        <option value="clientInvoiceNo 1">invoice 1</option>
                                        <option value="clientInvoiceNo 2">invoice 2</option>
                                        <option value="clientInvoiceNo 3">invoice 3 </option>
                                        <option value="clientInvoiceNo 4">invoice 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Client Invoice Amount"
                                    txtBoxType="number"
                                    txtBoxName="clientIVamount"
                                    txtBoxValue={clientIVamount}
                                    txtBoxPH="Client Invoice Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Invoice Issued Date"
                                    txtBoxType="date"
                                    txtBoxName="clientIVdate"
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
                                <CustomTextBox
                                    txtBoxLabel=" Received Amount"
                                    txtBoxType="number"
                                    txtBoxName="receivedAmount"
                                    txtBoxValue={receivedAmount}
                                    txtBoxPH="Received Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px', }} >
                        <Row>
                            <Col lg={3} >
                                <Form.Group >
                                    <Form.Label >Contractor Name </Form.Label>
                                    <Form.Control as="select" name="contractorName" value={contractorName} onChange={this.onChange} required>
                                        <option value="contractor" disabled> Country</option>
                                        <option value="contractor 1">contractor 1</option>
                                        <option value="contractor 2">contractor 2</option>
                                        <option value="contractor 3">contractor 3 </option>
                                        <option value="contractor 4">contractor 4</option>
                                    </Form.Control>
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
                                <CustomTextBox
                                    txtBoxLabel="PO Amount"
                                    txtBoxType="text"
                                    txtBoxName="PO_amount"
                                    txtBoxValue={PO_amount}
                                    txtBoxPH="Amount"
                                    changeEvent={this.onChange}
                                />
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
                                    <Form.Label >Contractor Invoice No</Form.Label>
                                    <Form.Control as="select" name="vendorInvoiceNo" value={vendorInvoiceNo} onChange={this.onChange} required>
                                        <option value="" selected disabled> Invoice No</option>
                                        <option value="vendorInvoiceNo 1">invoice 1</option>
                                        <option value="vendorInvoiceNo 2">invoice 2</option>
                                        <option value="vendorInvoiceNo 3">invoice 3 </option>
                                        <option value="vendorInvoiceNo 4">invoice 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col lg={3}>
                                <CustomTextBox
                                    txtBoxLabel="Contractor Invoice Amount"
                                    txtBoxType="number"
                                    txtBoxName="vendorInvoiceAmount"
                                    txtBoxValue={vendorInvoiceAmount}
                                    txtBoxPH="Amount"
                                    changeEvent={this.onChange}
                                />
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
                            <Col lg={1}>
                                <CustomTextBox
                                    txtBoxLabel="Paid Amount"
                                    txtBoxType="number"
                                    txtBoxName="paidAmount"
                                    txtBoxValue={paidAmount}
                                    txtBoxPH=" Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={2} style={{ marginTop: '12px' }}>
                                <CustomTextBox
                                    txtBoxType="date"
                                    txtBoxName="paidDate"
                                    txtBoxValue={paidDate}
                                    changeEvent={this.onChange}

                                />
                            </Col>
                        </Row>
                        <Row>
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
                        <CustomButton btnType="reset" BtnTxt="Submit" ClickEvent={this.onSubmit} />
                    </Row>
                </div>
            </div>
        )
    }
}

export default AddQuotation
