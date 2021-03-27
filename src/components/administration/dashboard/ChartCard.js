import React, { Component } from 'react'
import { Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
import { PieOptions } from './ChartData'

export class ChartCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: '',
            toDate: '',
            labels: ["Total", "Received", "Remaining"],
            data: [36380000.00, 12380000.00, 24000000.00]
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { labels, data, fromDate, toDate } = this.state;
        const dataset = {
            labels: labels,
            datasets: [
                {
                    data: data,
                    toolTipContent: "{label}:${data}",
                    borderWidth: 1,
                    backgroundColor: [
                        '#9B9D9F',
                        '#438EEB',
                        '#FD7F59',
                    ],
                }],
        }
        const Options = PieOptions()
        const button = {
            border: 'none',
            backgroundColor: "#52AF66",
            color: 'white',
            padding: '8px',
        }
        const label = {
            paddingTop: '5px',
        }
        const labelAmount = {
            paddingTop: '5px',
            color: '#2A6BA4',
        }
        return (
            <>
                <Col xl='4'>
                    {this.props.calender === 'true' ?
                        <Row>
                            <Col > <h6 style={{ marginTop: '10px' }}> {this.props.text}</h6> </Col>
                            <Col lg='4'>
                                <Form.Control
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    onChange={this.onChange}
                                    style={{ boxShadow: 'none', border: 'none', borderBottom: '3px solid grey', }}
                                /><br />
                            </Col>
                            <Col lg='4'>
                                <Form.Control
                                    type="date"
                                    name="toDate"
                                    value={toDate}
                                    onChange={this.onChange}
                                    style={{ boxShadow: 'none', border: 'none', borderBottom: '3px solid grey', }}
                                /><br />
                            </Col>
                        </Row> :
                        <Row>
                            <Col > <h6 style={{ marginTop: '38px' }}> {this.props.text}</h6> </Col>
                        </Row>
                    }


                    <Row className='chartCard'>
                        <Row>
                            <Col sm='3'>
                                <Col>
                                    <label style={{ paddingTop: '5px', }} > TOTAL </label>
                                </Col>
                                <Col>
                                    <label style={{ paddingTop: '5px', }}> RECEIVED </label>
                                </Col>
                                <Col>
                                    <label style={{ paddingTop: '5px', }}> REMAINING </label>
                                </Col>
                            </Col>
                            <Col sm={{ offset: '1', span: '5' }}>
                                {data.map(data =>
                                    <Col>
                                        <label style={{ color: '#2A6BA4', paddingTop: '5px' }} > 36380000.00 </label>
                                    </Col>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <div style={{ maxHeight: '500px', maxWidth: '500px' }}>
                                <Pie data={dataset} options={Options} />
                            </div>

                            <div style={{ position: 'relative', bottom: '30px', left: '15%' }} >
                                <h6 > Profit </h6>
                                <button style={button} > 6546563 </button>
                            </div>
                        </Row>
                    </Row>
                </Col>
            </>
        )
    }
}

export default ChartCard
