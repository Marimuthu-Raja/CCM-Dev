import React, { Component } from 'react'
import { Card, Container, Row,Col,Form } from 'react-bootstrap'
import CustomTextBox from './CustomBox/TextBox'
import Swal from 'sweetalert2';
import axios from 'axios';
import swal from 'sweetalert';





export class Quotation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quotation:'',
             in_voice:'',
             description:'',
             date:'',
             amount:'',
             marginamount:'',
             status:'',
             client:'',
             client_po:'',
             margin:'',
             work_schedule:'',
             complete:'',
             contractor:'',
             purchace_order:'',
             po_amount:'',
             po_date:''
        }
    }

    onChange=(e)=>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        const {quotation,in_voice,description,date,amount,status,client,client_po,margin,marginamount,work_schedule,complete,contractor,purchace_order,po_amount,po_date}=this.state;
        if(quotation ==='' && in_voice ==='' && description==='' && status ==='' && date ==='' && amount ==='' && client ===''  && margin ==='' && marginamount ==='' && work_schedule ==='' && complete ==='' && contractor ==='' && purchace_order ==='' && po_amount ==='' && po_date ==='' ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Fillout all the Fields!',
              })
        
        }
        else{
            axios.post('', {quotation,in_voice,description,date,amount,status,client,client_po,margin,marginamount,work_schedule,complete,contractor,purchace_order,po_amount,po_date})                   
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
        const {quotation,in_voice,description,date,amount,status,client,client_po,margin,marginamount,work_schedule,complete,contractor,purchace_order,po_amount,po_date}=this.state;
        return (
            <div>
      

                <div className="component">
                    <p style={{fontSize:"20px"}}>Quotation</p>
                    <Card>
                        <Row>
                        <Col lg={4} sm={12}>
                        <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Quotation No</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="quotation" value={quotation} onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value="Quotation"selected disabled> Quotation</option>
                                        <option value="Quotation 1">Quotation 1</option>
                                        <option value="Quotation 2">Quotation 2</option>
                                        <option value="Quotation 3">Quotation 3 </option>
                                        <option value="Quotation 4">Quotation 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>In-Voice No</Form.Label>
                                <Col>
                                <Form.Control as="select"  name="in_voice" value={in_voice} onChange={this.onChange} style={{padding:"8px"}} required>
                                        <option value="in_voice"selected disabled> invoice</option>
                                        <option value="in_voice 1">invoice 1</option>
                                        <option value="in_voice 2">invoice 2</option>
                                        <option value="in_voice 3">invoice 3 </option>
                                        <option value="in_voice 4">invoice 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Description</Form.Label>
                                    <Form.Control type="text" name="description" value={description} id="description" placeholder="Description" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                            </Form.Group>
                            
                            </Col>

                            <Col lg={4} sm={12}>
                            <Form.Group >
                                    <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Date</Form.Label>
                                    <Form.Control type="date" name="date" value={date} id="date" placeholder="Date" onChange={this.onChange}
                                    style={{padding:"8px"}}/>

                                </Form.Group>

                            <Form.Group >
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"25px"}}>Amount</Form.Label>
                                <Form.Control type="number" name="amount" value={amount} id="amount" placeholder="Amount" onChange={this.onChange}
                                style={{padding:"8px",marginTop:"5px"}}/>

                            </Form.Group>

                            
                            <Form.Group >
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"30px"}}>Status</Form.Label>
                                <Form.Control as="select" name="status" id="status" onChange={this.onChange} style={{padding:"8px",marginTop:"5px"}}>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                        <Form.Group >
                            <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Client</Form.Label>
                            <Form.Control type="text" name="client" value={client} id="client"  onChange={this.onChange}
                                style={{padding:"8px"}}/>

                        </Form.Group>
                        

                        <Form.Group >
                            <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Client PO</Form.Label>
                                <Form.Control type="text" name="client_po" value={client_po} id="client_po" onChange={this.onChange}
                                style={{padding:"8px"}}/>

                        </Form.Group>
                        
                        <Row>
                        <Col lg={5} sm={12}>
                        <Form.Group >
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Margin</Form.Label>
                                <Form.Control type="text" name="margin" value={margin} id="margin" placeholder="%" onChange={this.onChange}
                                style={{padding:"8px"}}/>

                        </Form.Group>
                       
                        </Col>
                        <Col lg={6} sm={12}>
                        <Form.Group >
                            
                            <Form.Control type="number" name="marginamount" value={marginamount} id="marginamount" placeholder="Amount" onChange={this.onChange}
                            style={{padding:"8px",marginTop:"48px"}}/>

                            </Form.Group>
                        
                            </Col>
                            </Row>
                        </Col>
                        </Row>
                        <br></br>
                        <hr/>

                    <Row>
                    <Col lg={4} sm={12}>
                        <Row>
                        <Col lg={5} sm={12}>
                        <Form.Group >
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Work Schedule</Form.Label>
                                <Form.Control type="text" name="work_schedule" value={work_schedule} id="work_schedule" placeholder="Commense" onChange={this.onChange}
                                style={{padding:"8px"}}/>
                        </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                        <Form.Group >
                                <Form.Control type="text" name="complete" value={complete} id="complete" placeholder="Complete" onChange={this.onChange}
                                style={{padding:"8px",marginTop:"48px"}}/>
                        </Form.Group>
                        </Col>
                        </Row>
                            
                    </Col>

                        <Col lg={4} sm={12}>
                        <Form.Group as={Col}>
                                
                                <Col>
                                <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Contractor Name</Form.Label>
                                <Form.Control as="select"  name="in_voice" value={contractor} onChange={this.onChange}  style={{padding:"8px"}} required>
                                        <option value="Country"selected disabled> Country</option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3 </option>
                                        <option value="Country 4">Country 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                    
                        </Col>

                        <Col lg={4} sm={12}>
                        <Row>
                        
                        <Col lg={5} sm={12}>

                        <Form.Group >
                        <Form.Label style={{fontSize:"17px",fontWeight:"bold",marginTop:"15px"}}>Contractor Name</Form.Label>
                                <Form.Control type="text" name="purchace_order" value={purchace_order} id="purchace_order" placeholder="Purchace Order" onChange={this.onChange}
                                style={{padding:"8px"}}/>

                        </Form.Group>
                        
                        </Col>
                        <Col lg={4} sm={12}>
                        <Form.Group >
                                <Form.Control type="amount" name="po_amount" value={po_amount} id="po_amount" placeholder="Amount" onChange={this.onChange}
                                style={{padding:"8px",marginTop:"48px"}}/>

                        </Form.Group>
                        
                        </Col>
                        <Col lg={3} sm={12}>
                        <Form.Group >
                                
                                <Form.Control type="text" name="po_date" value={po_date} id="po_date" placeholder="Date" onChange={this.onChange}
                                style={{padding:"8px",marginTop:"48px"}}/>

                        </Form.Group>
                        
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                    <button type="button" class="btn btn sbtn" style={{marginTop:"150px"}} onClick={this.onSubmit}> SUBMIT</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Quotation
