import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image,
    Table,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Invoice from './Invoice'
import DatePicker from "react-datepicker";
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
            visible:false,
            visible_key:null,
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
    invoice = (e)=>{
        console.log(e)
        this.setState({
            visible: ! this.state.visible,
            visible_key:e
        })
    }
   
    renderTable = (quotation) =>{
        return (
            <>
            
           <tr key={quotation.id} className={quotation.id % 2 === 0 ? "rowtable":""} onClick={()=>this.invoice(quotation.id)} style={{height:"50px",padding:"10px" }}>
              <td style={{padding:"15px"}}>{quotation.Name}</td>
              <td style={{padding:"15px"}}>{quotation.Address}</td>
              <td style={{padding:"15px"}}>{quotation.Email}</td>
              <td style={{padding:"15px"}}>{quotation.Phone}</td>
              <td style={{padding:"15px"}}>{quotation.Contactperson}</td>
              <td style={{padding:"15px"}}>{quotation.Contactperson}</td>
              
           </tr>
           { this.state.visible && this.state.visible_key==quotation.id && <Invoice id={quotation.id}  />}
             
          
          
           </>
        )
}


    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    setDate = (date, name)=>{
        this.setState({
            [name]:date
        })
    } 

    render() {
        const {quotationList,search,from_date,to_date,country,status} = this.state
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"10%",width:"98%"}}>
                <Card  style={{marginTop:"30px"}} >
                <Row  >
                            <Col lg={3}>
                                <Form.Group as={Col}>
                                <Col>
                                    <Form.Control type="text"  id="search"
                                    placeholder="Search"
                                    onChange={this.onChange}
                                    name="search"
                                    value={search}
                                    onChange={this.handleChange}
                                    style={{borderRadius:"25px",padding:"10px",boxShadow:"2px 2px 5px 1px rgba(161, 162, 163, 0.856)" }}
                                    />
                                    <button style={{position:"relative",
                                                bottom:"30px",
                                                left:"70%",backgroundColor:"white",border:"none"}} onClick={this.search}>
                                    <i className="fa fa-search" 
                                        ></i>
                                    </button>
                                   
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group as={Col}>
                                <Col>
                                    <select className="form-control"  style={{borderRadius:"25px",padding:"5px",boxShadow:"2px 2px 5px 1px rgba(161, 162, 163, 0.856)"}}>
                                        <option disabled selected>Country</option>
                                        <option>Spain</option>
                                        <option>Italy</option>
                                        <option>Germany</option>
                                        <option>China</option>
                                        <option>France</option>
                                    </select>
                                    <i className="fa fa-sort"style={{position:"relative",
                                                bottom:"30px",
                                                left:"70%",fontSize:"18px"}}></i>
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                            <Form.Group as={Col}>
                                <Col>
                                <DatePicker
                                        className="date-style"
                                        selected={from_date}
                                        onChange={(date)=>{this.setDate(date, 'from_date')}}
                                        name="from_date"
                                        dateFormat="YYY/MM/dd"
                                        minDate=''
                                        maxDate={new Date()}
                                        placeholderText="From"
                                        />
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                            <Form.Group as={Col}>
                                <Col>
                                <DatePicker
                                        className="date-style"
                                        selected={to_date}
                                        onChange={(date)=>{this.setDate(date, 'to_date')}}
                                        name="to_date"
                                        dateFormat="YYY/MM/dd"
                                        minDate=''
                                        maxDate={new Date()}
                                        placeholderText="To"
                                        />
                                </Col>
                            </Form.Group>
                            </Col>
                            <Col lg={2}>
                                <Form.Group as={Col}>
                                <Col>
                                    <select className="form-control"  style={{borderRadius:"25px",padding:"5px",boxShadow:"2px 2px 5px 1px rgba(161, 162, 163, 0.856)"}}>
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
                            <Col lg={1}>
                                {/* <Link to="/addcontractor"> */}
                                <button 
                                style={{width:"40%",
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
                        <Table  hover style={{backgroundColor:"white"}}>
                            <thead>
                                <tr>
                                <th>Quotation Number</th>
                                <th >Date Issued</th>
                                <th >Client</th>
                                <th >Description</th>
                                <th >Quote Amount</th>
                                <th >Quote Approval</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotationList.map(this.renderTable)}
                            </tbody> 
                        </Table>
                        
         
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
