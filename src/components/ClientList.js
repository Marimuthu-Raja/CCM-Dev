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
import AddClient from './AddClient'

var token = localStorage.getItem('access_token')




export default class ClientList extends Component {
    constructor(props){
        super(props);
        this.state ={
            client_list:[],
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
        })

        axios.post(`http://ccm.digisailor.in/api/public/client/list`,{},{
            params : { access_token : token }
        })
        .then(res=>{
            const client_list = res.data.response.client_list
            this.setState({ client_list })
            console.log(client_list);
        })
    }

    handleSearch = e => {
        this.setState({search:e.target.value})
    }
    trashClient = (id)=>{
        axios.post(`http://ccm.digisailor.in/api/public/client/delete`,{id},{
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
            addClient:true,
            client_id:id,
        })
    }
    Back=()=>{
        this.setState({
            addClient:false,
            client_id:'',
        })
        this.componentDidMount()
    }
   
    renderTable = (client,i) =>{
        return (
           <tr key={client.id} className={i % 2 === 0 ? "rowtable":""} style={{height:"30px"}}>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              {this.state.country_list.map(country=>{                      
                  return (client.country===country.id)&&<td>{country.name}</td>                                                                                        
              })}
              <td>{client.contact_person}</td>
              <td><button onClick={(e)=>this.trashClient(client.id)} style={{border:"none"}} ><i className="fa fa-trash" style={{fontSize:"18px",color:"red"}}></i></button></td>
              <td> <button onClick={(e)=>this.renderComponent(client.id)} style={{width:"100px",height:"25px",backgroundColor:"#4A88DC",border:"none",color:"white",borderRadius:"10px"}}>EDIT</button></td>
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
        const {client_list,search,addClient} = this.state
        return (
            <div>
                {addClient?<AddClient id={this.state.client_id} function={this.Back} />:
                <div className="component">
                <h3 style={{marginTop:"30px"}}>Client List</h3>
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
                                <Link to="/addclient">
                                <button 
                                style={{width:"14%",
                                height:"50px",
                                marginLeft:"70%",
                                backgroundColor:"#4A88DC",
                                border:"none",
                                borderRadius:"10px",
                                boxShadow:"5px 5px 8px #888888"}}>
                                    <i className="fa fa-plus" style={{fontSize:"20px",color:"white"}}></i>
                                    </button>
                                </Link>
                                
                            </Col>
                        </Row>
                        <Row style={{marginTop:"30px",overflow:"auto"}}>
                        <table className="table ">
                            <thead>
                                <tr>
                                <th scope="col">Client Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Contact Person</th>
                                <th scope="col">Store ID</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {client_list.map(this.renderTable)}
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
