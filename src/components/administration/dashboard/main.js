import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import ChartCard from './ChartCard'
import BarChart from './BarChart'
import Sidebar from './Sidebar'
import Top5 from './Top5'
import axiosInstance from '../../utils/axiosinstance'

export class main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country: '',
            currency: '', 
            client: '',
            contractor: '',
            country_list: [],
        }
    }
    componentDidMount() {
        axiosInstance.post(`/country/list`)
            .then((res) => {
                const country_list = res.data.response.country_list
                this.setState({ country_list })
                console.log(country_list)
            })
    }
    onChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        const { country, currency, client,contractor, country_list } = this.state;
        return (
            <div>
                <div className="component">
                    <h4> DASHBOARD </h4>
                    <Card style={{ marginTop: "2%" }}>
                        <Row >
                            <Col lg='2'>
                                <Form.Control as='select' value={country} name="country" onChange={this.onChange} style={{padding:'5px 10px'}} >
                                    <option value='' > Country</option>
                                    {country_list.map(country =>
                                        <option key={country.id} value={country.id} > {country.name} </option>
                                    )}
                                </Form.Control><br />
                                <button className='iconButtton' style={{ bottom: '50px', left:'80%' }} ><i className="fa fa-angle-right"  onClick={this.onSearch} ></i></button><br />
                            </Col>
                            <Col lg='2'>
                                <Form.Control as='select' value={currency} name="currency" onChange={this.onChange} style={{padding:'5px 10px'}} >
                                    <option value='' > Currency </option>
                                    <option value='rupee' > Rupee </option>
                                    <option value='dollar' > Dollar </option>
                                    <option value='yuan' > Yuan </option>
                                </Form.Control><br />
                                <button className='iconButtton' style={{ bottom: '50px',left:'80%' }} ><i className="fa fa-angle-right"  onClick={this.onSearch} ></i></button><br />
                            </Col>
                            <Col lg='4' >
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{boxShadow:'1px 2px 6px #989898'}} >Client</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        type='text'
                                        name='client'
                                        value={client}
                                        onChange={this.onChange}
                                        style={{padding:'0px 10px'}}
                                    />
                                </InputGroup>
                            </Col>
                            <Col lg='4' >
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{boxShadow:'1px 2px 6px #989898'}} >Contractor</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        type='text'
                                        name='contractor'
                                        value={contractor}
                                        onChange={this.onChange}
                                        style={{padding:'0px 10px'}}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card>
                    <Card style={{ marginTop: "2%" }}>
                        <h5> ACCOUNT STATEMENT </h5>
                        <Row>
                            <ChartCard text='CALENDAR' calender='true' />
                            <ChartCard text='MONTHLY' />
                            <ChartCard text='YEARLY' />
                        </Row>
                        <Row>
                            <h5>MONTHLY STATEMENT PER YEAR</h5>
                            <BarChart />
                        </Row>
                        <Row>
                            <Col xl='6'>
                                <h5>AGED RECEIVABLES</h5>
                                <Sidebar color='#438EEB' />
                            </Col>
                            <Col xl='6'>
                                <h5>TOP 5 AGED RECEIVABLES</h5>
                                <Top5 color='#438EEB' />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl='6'>
                                <h5>AGED PAYABLES</h5>
                                <Sidebar color='#FD7F59' />
                            </Col>
                            <Col xl='6'>
                                <h5>TOP 5 AGED PAYABLES</h5>
                                <Top5 color='#FD7F59' />
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}

export default main
