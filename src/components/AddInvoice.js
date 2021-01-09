import React, { Component } from 'react'
import { Container,Card,Row,Col,Form } from 'react-bootstrap'
import CustomTextBox from './CustomBox/TextBox'
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';
import Sidebar from './Sidebar'



export class AddInvoice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             invoice:'',
             customername:'',
             description:'',
             price:'',
             date:''
        }
    }
    
    onChange=(e) =>{
        e.preventDefault();
        
        this.setState({
            [e.target.name]: e.target.value
        })
        const{invoice,customername,description,price,date}=this.state;
        $("#invoice").focusout(function(){
            if(invoice ==='' ){
                $("#invoice").css("border", "1px solid red");
                $("#invoiceerror").css('display','block')
            }
             else{
                $("#invoice").css("border", "1px solid green");
                $("#invoiceerror").css('display','none')
             }
             } )
             $("#description").focusout(function(){
                if(description ==='' ){
                    $("#description").css("border", "1px solid red");
                    $("#descriptionerror").css('display','block')
                }
                 else{
                    $("#description").css("border", "1px solid green");
                    $("#descriptionerror").css('display','none')
                 }
                 } )
                 $("#customername").focusout(function(){
                    if(customername ==='' ){
                        $("#customername").css("border", "1px solid red");
                        $("#customererror").css('display','block')
                    }
                     else{
                        $("#customername").css("border", "1px solid green");
                        $("#customererror").css('display','none')
                     }
                     } )
                     $("#price").focusout(function(){
                        if(price ==='' ){
                            $("#price").css("border", "1px solid red");
                            $("#priceerror").css('display','block')
                        }
                         else{
                            $("#price").css("border", "1px solid green");
                            $("#priceerror").css('display','none')
                         }
                         } )
                         $("#date").focusout(function(){
                            if(date ==='' ){
                                $("#date").css("border", "1px solid red");
                                $("#dateerror").css('display','block')
                            }
                             else{
                                $("#date").css("border", "1px solid green");
                                $("#dateerror").css('display','none')
                             }
                             } )
    } 

    onSubmit=(e) =>{
        const{invoice,customername,description,price,date}=this.state;
        if(invoice === '' && customername==='' && description==='' && price==='' && date===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        }
        else{
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
        const{invoice,customername,description,price,date}=this.state;
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"15%",marginTop:"2%" }}>
                    <p style={{fontSize:"20px"}}>Quotation</p>
                    <Card>
                        <Row>
                            <Col lg={6} sm={12}>
                            
                                <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Invoice No</Form.Label>
                                <Form.Control as="select"  name="invoice" id="invoice" value={invoice} onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value=""selected disabled> invoice</option>
                                        <option value="invoice 1">invoice 1</option>
                                        <option value="invoice 2">invoice 2</option>
                                        <option value="invoice 3">invoice 3 </option>
                                        <option value="invoice 4">invoice 4</option>
                                    </Form.Control>
                            </Form.Group>
                            <span style={{display:"none", color:"red"}} id="invoiceerror">Invalid Data</span>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={description} id="description" placeholder="Description" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                                </Form.Group>

                           
                            <span style={{display:"none", color:"red"}} id="descriptionerror">Invalid Data</span>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Date</Form.Label>
                                    <Form.Control type="date" name="date" value={date} id="date" placeholder="Date" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>

                            <span style={{display:"none", color:"red"}} id="dateerror">Invalid Data</span>
                            </Col>

                            <Col lg={6} sm={12}>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Customer Name</Form.Label>
                                    <Form.Control type="text" name="customername" value={customername} id="customername" placeholder="Customer Name" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                                </Form.Group>

                            
                            <span style={{display:"none", color:"red"}} id="customererror">Invalid Data</span>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Price</Form.Label>
                                    <Form.Control type="number" name="price" value={price} id="price" placeholder="Price" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                                </Form.Group>

                        
                            <span style={{display:"none", color:"red"}} id="priceerror">Invalid Data</span>
                            </Col>
                        </Row>
                        <button type="button" class="btn btn sbtn" style={{marginTop:"100px"}} onClick={this.onSubmit}> SAVE</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default AddInvoice
