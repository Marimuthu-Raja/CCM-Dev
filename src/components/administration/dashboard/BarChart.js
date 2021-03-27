import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
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
} from 'react-bootstrap';
import { BarOptions } from './ChartData'

export class BarChart extends Component {
    render() {
        const BarData = {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'Total',
                    barThickness: 20,
                    backgroundColor: '#9B9D9F',
                    data: [2860, 2654, 2860, 2654, 2860, 2654, 2860, 2654, 2860, 2654, 2860, 2654,],
                },
                {
                    label: 'Received',
                    barThickness: 20,
                    backgroundColor: '#438EEB',
                    data: [3231, 3250, 3231, 3250, 3231, 3250, 3231, 3250, 3231, 3250, 3231, 3250,],
                },
                {
                    label: 'Remaining',
                    barThickness: 20,
                    backgroundColor: '#FD7F59',
                    data: [3640, 2466, 3640, 2466, 3640, 2466, 3640, 2466, 3640, 2466, 3640, 2466],
                },
            ]
        };
        const Options = BarOptions()
        return (
            <Col>
                <Row className='chartCard'>
                    <Col   style={{ maxHeight: '1300px', maxWidth: '1500px' }}>
                    <Bar data={BarData} options={Options} height='110px' />
                    </Col> 
                </Row>
            </Col>
        )
    }
}

export default BarChart
