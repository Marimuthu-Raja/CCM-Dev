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
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import AddContractor from './Addcontractor'

var token = localStorage.getItem('access_token')



export default class contractor_list extends Component {
    constructor(props){
        super(props);
        this.state ={
            contractor_list:[],
            country_list:[],
            search:'',
    
        }
    }

    componentDidMount(){

        axios.post(`https://ccm.digisailor.in/api/public/country/list`,{},{
            params:{ access_token:token }
        }).then((res)=>{
            const country_list = res.data.response.country_list
            this.setState({ country_list })
            console.log(country_list);
        })

        axios.post(`https://ccm.digisailor.in/api/public/contractor/list`,{},{
            params : { access_token : token }
        })
        .then(res=>{
            const contractor_list = res.data.response.contractor_list
            this.setState({ contractor_list })
            console.log(contractor_list);
        })
        
    }

    handleSearch = e => {
        this.setState({search:e.target.value})
    }
    trashContractor = (id)=>{
        console.log(id)
        axios.post(`https://ccm.digisailor.in/api/public/contractor/delete`,{id},{
            auth: {
                username: 'ccm_auth',
                password: 'ccm_digi123#'
                },
            params : { access_token : token }
        })
        .then( (res)=> {
            console.log(res);   
            if(res.data.message.success!==undefined) {
                swal("success!", `${res.data.message.success}`, "success").then(()=>this.componentDidMount())
            }else{
                swal("error!", `${res.data.message.error}`, "error")
            }
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    renderComponent = (id)=>{
        this.setState({
            addContractor:true,
            contractor_id:id,
        })
    }
    Back=(e)=>{
        this.setState({
            addContractor:false,
            contractor_id:'',
        })
        this.componentDidMount()
    }
    renderTable = (contractor,i) =>{
            return (
               <tr key={contractor.id} className={i % 2 === 0 ? "rowtable":""} style={{height:"30px"}}>
                  <td>{contractor.name}</td>
                  <td>{contractor.address}</td>
                  <td>{contractor.email}</td>
                  <td>{contractor.phone}</td>
                  {this.state.country_list.map(country=>{                      
                      return (contractor.country===country.id)&&<td>{country.name}</td>                                                                                        
                  })}
                  <td>{contractor.contact_person}</td>
                  <td><button onClick={(e)=>this.trashContractor(contractor.id)} style={{border:"none"}} ><i className="fa fa-trash" style={{fontSize:"18px",color:"red"}}></i></button></td>
                  <td> <button onClick={(e)=>this.renderComponent(contractor.id)} style={{width:"100px",height:"25px",backgroundColor:"#4A88DC",border:"none",color:"white",borderRadius:"10px"}}>EDIT</button></td>
               </tr>
            )
    }

    search = () =>{
        // alert("Hello Wrold")
    }
    render() {
        const {contractor_list,search,addContractor} = this.state
        return (
            <div>
                {addContractor?<AddContractor id={this.state.contractor_id} function={this.Back} />:
                <div className="component">
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
                        <Row style={{marginTop:"30px",overflow:"auto"}}>
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
                                <th scope="col">Edit</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {contractor_list.map(this.renderTable)}
                            </tbody> 
                        </table>
                        </Row>
                    </Card>
                </div>
    }
            </div>
        )
    }
}
