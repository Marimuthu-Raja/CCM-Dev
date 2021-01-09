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
import {Link} from 'react-router-dom';
import axios from 'axios'
import Sidebar from './Sidebar'


export default class QuotationList extends Component {

    constructor(props){
        super(props);
        this.state = {
            quotationList:[],
            search:'',
            from_date:'',
            to_date:'',
            country:'',
            status:'',
        }
    }

    componentDidMount(){
        axios.get("http://www.json-generator.com/api/json/get/bTDFppcrIi?indent=2")
        .then(res => {
            const quotationList = res.data
            console.log(quotationList,"response")
            this.setState({quotationList})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    
    renderTable = (quotation) =>{
        return (
            
           <tr key={quotation.id} className={quotation.id % 2 === 0 ? "table-primary":""} onClick={<renderInvoice/>} style={{height:"50px",padding:"10px" }}>
              <td style={{padding:"15px"}}>{quotation.Name}</td>
              <td style={{padding:"15px"}}>{quotation.Address}</td>
              <td style={{padding:"15px"}}>{quotation.Email}</td>
              <td style={{padding:"15px"}}>{quotation.Phone}</td>
              <td style={{padding:"15px"}}>{quotation.Contactperson}</td>
              <td style={{padding:"15px"}}>{quotation.Contactperson}</td>
              
           </tr>
        )
}


    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {quotationList,search,from_date,to_date,country,status} = this.state
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"10%",width:"98%"}}>
                <Card>
                <Row>
                            <Col lg={2}>
                                <Form.Group as={Col}>
                                <Col>
                                    <Form.Control type="text"  id="search"
                                    placeholder="Search"
                                    onChange={this.onChange}
                                    name="search"
                                    value={search}
                                    onChange={this.handleChange}
                                    style={{borderRadius:"25px",padding:"10px"}}
                                    />
                                    <button style={{position:"relative",
                                                bottom:"30px",
                                                left:"73%",backgroundColor:"white",border:"none"}} onClick={this.search}>
                                    <i className="fa fa-search" 
                                        ></i>
                                    </button>
                                   
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group as={Col}>
                                <Col>
                                    <select className="form-control"  style={{borderRadius:"25px",padding:"10px"}}>
                                        <option disabled selected>Country</option>
                                        <option>Spain</option>
                                        <option>Italy</option>
                                        <option>Germany</option>
                                        <option>China</option>
                                        <option>France</option>
                                    </select>
                                    <i className="fa fa-sort"style={{position:"relative",
                                                bottom:"30px",
                                                left:"73%",fontSize:"18px"}}></i>
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                            <Form.Group as={Col}>
                                <Col>
                                    <Form.Control type="date"  id="date"
                                    placeholder="from"
                                    onChange={this.onChange}
                                    name="from_date"
                                    value={from_date}
                                    onChange={this.handleChange}
                                    style={{borderRadius:"25px",padding:"10px"}}
                                    />
                                    
                                   
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                            <Form.Group as={Col}>
                                <Col>
                                    <Form.Control type="date"  id="date"
                                    placeholder="from"
                                    onChange={this.onChange}
                                    name="to_date"
                                    value={to_date}
                                    onChange={this.handleChange}
                                    style={{borderRadius:"25px",padding:"10px"}}
                                    />
                                    
                                   
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group as={Col}>
                                <Col>
                                    <select className="form-control"  style={{borderRadius:"25px",padding:"10px"}}>
                                        <option disabled selected>Status</option>
                                        <option>Pending</option>
                                        <option>Completed</option>
                                        <option>Cancel</option>
                                    </select>
                                    <i className="fa fa-sort"style={{position:"relative",
                                                bottom:"30px",
                                                left:"73%",fontSize:"18px"}}></i>
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                                {/* <Link to="/addcontractor"> */}
                                <button 
                                style={{width:"14%",
                                height:"50px",
                                backgroundColor:"#4A88DC",
                                border:"none",
                                borderRadius:"10px"}}>
                                    <i className="fa fa-plus" style={{fontSize:"20px",color:"white"}}></i>
                                    </button>
                                {/* </Link> */}
                                
                            </Col>
                            
                        </Row>
                </Card>
                <Card style={{marginTop:"30px",backgroundColor:"white"}}>
                <Row style={{marginTop:"30px"}}>
                        <table className="table" style={{backgroundColor:"white"}}>
                            <thead>
                                <tr>
                                <th scope="col">Quotation Number</th>
                                <th scope="col">Date Issued</th>
                                <th scope="col">Client</th>
                                <th scope="col">Description</th>
                                <th scope="col">Quote Amount</th>
                                <th scope="col">Quote Approval</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotationList.map(this.renderTable)}
                            </tbody> 
                        </table>
                        </Row>
                </Card>
                </div>
            </div>
        )
    }
}


const renderInvoice = () =>{
    return(
        <Card>

        </Card>
    )
}
