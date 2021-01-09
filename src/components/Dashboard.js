import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';
import CustomTextBox from './CustomBox/TextBox'
import Logo from '../logo-light.png'
import $ from 'jquery'
import swal from 'sweetalert'
import Sidebar from './Sidebar'


export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           Date_From:"",
           Date_To:"",
           select_month:"",
           quotation:500,
           invoice:200,
        }
    }
    
    render() {
        const {Date_From,Date_To,select_month}= this.state;
        return (
            <div>
        <Sidebar />

                <Container>
                    <Card>
                        <Row>
                            <Col style={{width:"100px"}} >
                            <Form.Group as={Col}>
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date"  />
                            </Form.Group>
                            </Col>
                            <Col  >
                            <Form.Group as={Col}>
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date"  />
                            </Form.Group>
                            </Col>
                            {/* <Col lg={{span:3, offset:3}}>
                                <Col>
                                <Form.Control as="select" className="select-style" name="select_month"  value={select_month} onChange={this.onChange}  required>
                                        <option value="January 2021" >January 2021 </option>
                                        <option value="February 2021">February 2021</option>
                                        <option value="March 2021">March 2021</option>
                                        <option value="April 2021">April 2021</option>
                                    </Form.Control>
                                </Col>
                          
                        </Col> */}
                           </Row>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Dashboard
