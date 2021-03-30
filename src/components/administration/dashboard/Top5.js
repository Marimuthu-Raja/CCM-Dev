import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image,
    DropdownButton,
    Dropdown,
    Spinner,
    ListGroup,
} from 'react-bootstrap';

export class Top5 extends Component {
    render() {
        const list = [1, 2, 3, 4, 5]
        const amount = {
            color:this.props.color
        }
        const label = {
            padding: '11px 10px',
            fontSize: '1.3em',
        }
        return (
            <>
            <Row className='chartCard' >
                <ListGroup variant="flush">
                {list.map(data=>
                    <ListGroup.Item style={label} >
                        <Row>
                            <Col lg='6' style={amount}> <h6> STEVE VAIN SPAIN </h6></Col>
                            <Col lg='6' >11,200,000.00 </Col>
                        </Row>
                    </ListGroup.Item>)}
                    </ListGroup>
                </Row>
            </>
        )
    }
}

export default Top5
