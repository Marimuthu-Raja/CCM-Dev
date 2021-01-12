import React, { Component } from 'react'
import { Card, Container, Row,Col,Form } from 'react-bootstrap'
import CustomTextBox from './CustomBox/TextBox'
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';
import Sidebar from './Sidebar'




export class ContractorInvoice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             contractor_invoice:'',
             date_issued:'',
             status:'',
             client_invoice:'',
             tax:'',
             amount:'',
             received_date:'',
             date:''
        }
    }

    onChange=(e)=>{
        e.preventDefault();
        
        this.setState({
            [e.target.name]: e.target.value
        })
        const { contractor_invoice,date_issued,status,client_invoice,tax,amount,received_date,date } = this.state
        $("#contractor_invoice").focusout(function(){
            if(contractor_invoice ==='' ){
                $("#contractor_invoice").css("border", "1px solid red");
                $("#coninerror").css('display','block')
            }
            else{
                $("#contractor_invoice").css("border", "1px solid green");
                $("#coninerror").css('display','none')
            }
        })
        $("#date_issued").focusout(function(){
        if(date_issued ===''){
            $("#date_issued").css("border", "1px solid red");
            $("#dateissueerror").css('display','block')
        }
        else{
            $("#date_issued").css("border", "1px solid green");
            $("#dateissueerror").css('display','none')
        }
        })
        $("#status").focusout(function(){
        if(status ==='' ){
            $("#status").css("border", "1px solid red");
            $("#statuserror").css('display','block')
        }
         else{
            $("#status").css("border", "1px solid green");
            $("#statuserror").css('display','none')
         }
         } )
         $("#client_invoice").focusout(function(){
        if(client_invoice ==='' ){
            $("#client_invoice").css("border", "1px solid red");
            $("#clientinerror").css('display','block')
        } 
        else{
            $("#client_invoice").css("border", "1px solid green");
            $("#clientinerror").css('display','none')
        }
         })
        $("#tax").focusout(function(){ 
        if(tax ==='' ){
            $("#tax").css("border", "1px solid red");
            $("#taxerror").css('display','block')
        }
        else{
            $("#tax").css("border", "1px solid green");
            $("#taxerror").css('display','none')
        }
        })
        $("#amount").focusout(function(){
        if(amount ===''){
            $("#amount").css("border", "1px solid red");
            $("#amounterror").css('display','block')
        }
        else{
            $("#amount").css("border", "1px solid green");
            $("#amounterror").css('display','none')
        }
        })
        $("#received_date").focusout(function(){
        if(received_date===''){
            $("#received_date").css("border", "1px solid red");
            $("#receivederror").css('display','block')
        }
        else{
            $("#received_date").css("border", "1px solid green");
            $("#receivederror").css('display','none')
        }
        })
        $("#date").focusout(function(){
        if(date ==='' ){
             $("#date").css("border", "1px solid red");
             $("#dateerror").css('display','block')
        }
        else{
            $("#date").css("border", "1px solid green");
            $("#dateerror").css('display','none')
        }  
        })
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        const {contractor_invoice,date_issued,status,client_invoice,tax,amount,received_date,date}=this.state;
        if(contractor_invoice ==='' && date_issued ==='' && status ==='' && tax ==='' && date ==='' && amount ==='' && client_invoice ===''  && received_date===''   ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        
        }
        else{
        const {contractor_invoice,date_issued,status,client_invoice,tax,amount,received_date,date}=this.state;
        axios.post('', {})                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Client added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              }); 
            console.log(this.state.errors)
            }
     }
    


    render() {
        const {contractor_invoice,date_issued,status,client_invoice,tax,amount,received_date,date}=this.state;
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"15%",marginTop:"2%" }}>
                    <p style={{fontSize:"20px"}}>Contractor Invoice</p>
                    <Card>
                    <Row>
                    <Col lg={4} sm={12}>
                    <span style={{display:"none", color:"red"}} id="coninerror">Invalid Data</span>
                    <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Contractor Invoice No</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="contractor_invoice" id="contractor_invoice" value={contractor_invoice} onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value=""selected disabled> invoice</option>
                                        <option value="in_voice 1">invoice 1</option>
                                        <option value="in_voice 2">invoice 2</option>
                                        <option value="in_voice 3">invoice 3 </option>
                                        <option value="in_voice 4">invoice 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            </Col>
                     <Col lg={4} sm={12}>
                     <span style={{display:"none", color:"red"}} id="dateerror">Invalid Data</span>
                            
                        </Col>
                        <Col lg={4} sm={12}>
                        <span style={{display:"none", color:"red"}} id="statuserror">Invalid Data</span>
                            <Form.Group >
                                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Status</Form.Label>
                                                    <Form.Control as="select" name="status" Id="status"  onChange={this.onChange} style={{padding:"8px"}}>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                    </Form.Control>
                            </Form.Group>
                            </Col>
                    </Row>
                    <hr/>
                    <Row>
                    <Col lg={4} sm={12}>
                    <span style={{display:"none", color:"red"}} id="clientinerror">Invalid Data</span>
                    <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Client Invoice No</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="client_invoice" value={client_invoice} id="client_invoice" onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value=""selected disabled> invoice</option>
                                        <option value="in_voice 1">invoice 1</option>
                                        <option value="in_voice 2">invoice 2</option>
                                        <option value="in_voice 3">invoice 3 </option>
                                        <option value="in_voice 4">invoice 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <span style={{display:"none", color:"red"}} id="taxerror">Invalid Data</span>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Tax</Form.Label>
                                    <Form.Control type="number" name="tax" value={tax} id="tax" placeholder="Tax" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>
                           
                        </Col>
                        <Col lg={4} sm={12}>
                        <span style={{display:"none", color:"red"}} id="dateissueerror">Invalid Data</span>
                        <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Date Issued</Form.Label>
                                    <Form.Control type="date" name="date_issued" value={date_issued} id="date_issued" placeholder="Date Issued" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>
                        
                        <span style={{display:"none", color:"red"}} id="amounterror">Invalid Data</span>
                        <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Amount</Form.Label>
                                    <Form.Control type="number" name="amount" value={amount} id="amount" placeholder="Amount" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>
                        
                        </Col>
                        <Col lg={4} sm={12}> 
                        <span style={{display:"none", color:"red"}} id="receivederror">Invalid Data</span>
                        <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Received Date</Form.Label>
                                    <Form.Control type="date" name="received_date" value={received_date} id="received_date" placeholder="Received Date" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>
                        
                            </Col>
                    
                    </Row>
                    <button type="button" class="btn btn sbtn" style={{marginTop:"100px"}} onClick={this.onSubmit}> SAVE</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ContractorInvoice
