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
import axios from 'axios'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar'



export default class Contractorlist extends Component {
    constructor(props){
        super(props);
        this.state ={
            contractorList:[],
            search:''
        }
    }

    componentDidMount(){
        axios.get("http://dev.digisailor.in/ccm_json/contractorlist.php")
        .then(res => {
            const contractorList = res.data
            console.log(contractorList,"response")
            this.setState({contractorList})
        })
        .catch(error =>{
            console.log(error)
        })
    }

    handleSearch = e => {
        this.setState({search:e.target.value})
    }
    renderTable = (contractor) =>{
            return (
               <tr key={contractor.id} className={contractor.id % 2 === 0 ? "rowtable":""} style={{height:"30px"}}>
                  <td>{contractor.Name}</td>
                  <td>{contractor.Address}</td>
                  <td>{contractor.Email}</td>
                  <td>{contractor.Phone}</td>
                  <td>{contractor.Contactperson}</td>
                  <td><button style={{border:"none"}}><i className="fa fa-trash" style={{fontSize:"18px",color:"red"}}></i></button></td>
                    <td><Link to="/addcontractor"> <button style={{width:"100px",height:"25px",backgroundColor:"#4A88DC",border:"none",color:"white",borderRadius:"10px"}}>EDIT</button></Link></td>
               </tr>
            )
    }

    search = () =>{
        // alert("Hello Wrold")
    }

    Delete = (id) =>{
        // alert(`${id}`)
        console.log(id)
    }
    render() {
        const {contractorList,search} = this.state
        return (
            <div>
        <Sidebar />

                <div style={{marginLeft:"10%",width:"98%"}}>
                <h3 style={{marginTop:"30px"}}>Contractor List</h3>
                    <Card style={{marginTop:"30px",backgroundColor:"white"}}>
                        <Row>
                            <Col lg={4}>
                                <Form.Group as={Col}>
                                <Col>
                                    <Form.Control type="text"  id="search"
                                    placeholder="Search"
                                    onChange={this.onChange}
                                    name="search"
                                    value={search}
                                    onChange={this.handleSearch}
                                    style={{borderRadius:"25px",padding:"10px",boxShadow:"5px 5px 8px #888888"}}
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
                            <Col lg={4}>
                                <Form.Group as={Col}>
                                <Col>
                                    <select className="form-control"  style={{borderRadius:"25px",padding:"10px",boxShadow:"5px 5px 8px #888888"}}>
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
                            <Col lg={4}>
                                <Link to="/addcontractor">
                                <button 
                                style={{width:"14%",
                                height:"50px",
                                marginLeft:"70%",
                                backgroundColor:"#4A88DC",
                                border:"none",
                                borderRadius:"10px"}}>
                                    <i className="fa fa-plus" style={{fontSize:"20px",color:"white"}}></i>
                                    </button>
                                </Link>
                                
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px"}}>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Contractor Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Country</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Delete</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contractorList.map(this.renderTable)}
                            </tbody> 
                        </table>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}
