import React, { Component } from 'react'
import { Card, Container, Row, Col, Form } from 'react-bootstrap'
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
            in_voice: '',
            description: '',
            date: '',
            amount: '',
            marginamount: '',
            status: '',
            client: '',
            client_po: '',
            margin: '',
            work_schedule: '',
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
        const { quotationNo, in_voice, description, date, amount, status, client, client_po, margin, marginamount, work_schedule, complete, contractor, purchace_order, po_amount, po_date } = this.state;
        if (quotationNo === '' && in_voice === '' && description === '' && status === '' && date === '' && amount === '' && client === '' && margin === '' && marginamount === '' && work_schedule === '' && complete === '' && contractor === '' && purchace_order === '' && po_amount === '' && po_date === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
            })

        }
        else {
            axios.post('', { quotationNo, in_voice, description, date, amount, status, client, client_po, margin, marginamount, work_schedule, complete, contractor, purchace_order, po_amount, po_date })
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
        const { quotationNo, quotationDate, in_voice, client, quotationAmount, description, date, quotationStatus, clientPO, margin, marginAmount, work_schedule, workStatus, contractor, contractorPO, purchace_order, PO_amount, PO_date } = this.state;
        return (
            <div>
                <div className="component">
                    <p style={{ fontSize: "20px" }}>Add Quotation</p>
                    <Card>
                        <Row>
                            <Col lg={4}>
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
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Quotation Date"
                                    txtBoxType="date"
                                    txtBoxName="quotationDate"
                                    txtBoxValue={quotationDate}
                                    txtBoxPH="Price Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Client"
                                    txtBoxType="text"
                                    txtBoxName="client"
                                    txtBoxValue={client}
                                    txtBoxPH=" Client"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group >
                                    <Form.Label >In-Voice No</Form.Label>
                                    <Form.Control as="select" name="in_voice" value={in_voice} onChange={this.onChange} required>
                                        <option value="in_voice" selected disabled> invoice</option>
                                        <option value="in_voice 1">invoice 1</option>
                                        <option value="in_voice 2">invoice 2</option>
                                        <option value="in_voice 3">invoice 3 </option>
                                        <option value="in_voice 4">invoice 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Quotation Amount"
                                    txtBoxType="text"
                                    txtBoxName="quotationAmount"
                                    txtBoxValue={quotationAmount}
                                    txtBoxPH=" Quotation Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
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
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Description"
                                    txtBoxType="text"
                                    txtBoxName="description"
                                    txtBoxValue={description}
                                    txtBoxPH="Description"
                                    changeEvent={this.onChange}
                                />

                            </Col>
                            <Col lg={4}>
                                <Form.Group >
                                    <Form.Label >Status</Form.Label>
                                    <Form.Control as="select" name="quotationStatus" value={quotationStatus} onChange={this.onChange}>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancel">Cancel</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={2} >
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
                            <Col lg={4} sm={12}>
                                <Row>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px', backgroundColor:'#C0BFBF' }} >
                        <Row>
                            <Col lg={2}>
                                <CustomTextBox
                                    txtBoxLabel="Work Schedule"
                                    txtBoxType="text"
                                    txtBoxName="work_schedule"
                                    txtBoxValue={work_schedule}
                                    txtBoxPH="Commense"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={2}>
                                <Form.Control
                                    type="text"
                                    name="workStatus"
                                    value={workStatus}
                                    placeholder="Complete"
                                    onChange={this.onChange}
                                    style={{ marginTop: "45px" }} />
                            </Col>
                            <Col lg={4} >
                                <Form.Group >
                                    <Form.Label >Contractor </Form.Label>
                                    <Form.Control as="select" name="contractor" value={contractor} onChange={this.onChange} required>
                                        <option value="contractor" disabled> Country</option>
                                        <option value="contractor 1">contractor 1</option>
                                        <option value="contractor 2">contractor 2</option>
                                        <option value="contractor 3">contractor 3 </option>
                                        <option value="contractor 4">contractor 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col lg={2} >
                                <CustomTextBox
                                    txtBoxLabel=" PO Details"
                                    txtBoxType="text"
                                    txtBoxName="contractorPO"
                                    txtBoxValue={contractorPO}
                                    txtBoxPH="Purchase Order"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={1} >
                                <Form.Control
                                    type="number"
                                    name="PO_amount"
                                    value={PO_amount}
                                    placeholder="Amount"
                                    onChange={this.onChange}
                                    style={{ marginTop: "45px" }} />
                            </Col>
                            <Col lg={1} >
                                <Form.Control
                                    type="date"
                                    name="PO_date"
                                    value={PO_date}
                                    onChange={this.onChange}
                                    style={{ marginTop: "45px" }} />
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: '15px' }}>
                        <Row>
                            <Col lg={4}>
                                <Form.Group >
                                    <Form.Label >Contractor Invoice No</Form.Label>
                                    <Form.Control as="select" name="in_voice" value={in_voice} onChange={this.onChange} required>
                                        <option value="in_voice" selected disabled> invoice</option>
                                        <option value="in_voice 1">invoice 1</option>
                                        <option value="in_voice 2">invoice 2</option>
                                        <option value="in_voice 3">invoice 3 </option>
                                        <option value="in_voice 4">invoice 4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Quotation Date"
                                    txtBoxType="date"
                                    txtBoxName="quotationDate"
                                    txtBoxValue={quotationDate}
                                    txtBoxPH="Price Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
                                <Form.Group >
                                    <Form.Label >Status</Form.Label>
                                    <Form.Control as="select" name="quotationStatus" value={quotationStatus} onChange={this.onChange}>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancel">Cancel</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Client Invoice Number"
                                    txtBoxType="number"
                                    txtBoxName="description"
                                    txtBoxValue={description}
                                    txtBoxPH="Description"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel=" Date Issued"
                                    txtBoxType="date"
                                    txtBoxName="quotationDate"
                                    txtBoxValue={quotationDate}
                                    txtBoxPH="Price Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Received Date"
                                    txtBoxType="date"
                                    txtBoxName="quotationDate"
                                    txtBoxValue={quotationDate}
                                    txtBoxPH="Price Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Tax"
                                    txtBoxType="number"
                                    txtBoxName="description"
                                    txtBoxValue={description}
                                    txtBoxPH="Description"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                            <Col lg={4}>
                                <CustomTextBox
                                    txtBoxLabel="Quotation Amount"
                                    txtBoxType="text"
                                    txtBoxName="quotationAmount"
                                    txtBoxValue={quotationAmount}
                                    txtBoxPH=" Quotation Amount"
                                    changeEvent={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-end'>
                        <CustomButton btnType="reset" BtnTxt="Submit" ClickEvent={this.onSubmit} />
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

export default AddQuotation
