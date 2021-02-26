import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import ReactCountryFlag from 'react-country-flag'
import {getCode} from 'country-list'
export default function CountryFlags(props) {

    return (
        <div>
            <Card style={{backgroundColor:"white",marginTop:"10px",width:"80%"}}>
                <Row>
                    <Col lg={3}>
                    <ReactCountryFlag countryCode={getCode(props.country)} style={{fontSize:"25px"}} svg />
                    </Col>
                    <Col lg={9}>
                        <h6 style={{cursor:"pointer"}}>{props.country}</h6>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
