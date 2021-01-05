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


export default class QuotationList extends Component {

    constructor(props){
        super(props);
        this.state = {
            quotationList:[]
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
           <tr key={quotation.id} className={quotation.id % 2 === 0 ? "table-primary":""} style={{height:"30px"}}>
              <td>{quotation.Name}</td>
              <td>{quotation.Address}</td>
              <td>{quotation.Email}</td>
              <td>{quotation.Phone}</td>
              <td>{quotation.Contactperson}</td>
              
           </tr>
        )
}
    render() {
        const {quotationList} = this.state
        return (
            <div>
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
                                    // value={search}
                                    onChange={this.handleSearch}
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
                                    name="date"
                                    // value={search}
                                    onChange={this.handleSearch}
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
                                    name="date"
                                    // value={search}
                                    onChange={this.handleSearch}
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
                <Card style={{marginTop:"30px"}}>
                <Row style={{marginTop:"30px"}}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Quotation Number</th>
                                <th scope="col">Date Issued</th>
                                <th scope="col">Client</th>
                                <th scope="col">Description</th>
                                <th scope="col">Quote Amount</th>
                                <th scope="col">Quote Approval</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <button>
                            <tbody>
                                {quotationList.map(this.renderTable)}
                            </tbody> 
                            </button>
                        </table>
                        </Row>
                </Card>
                </div>
            </div>
        )
    }
}
