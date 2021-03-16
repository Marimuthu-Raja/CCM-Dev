import React, { Component } from 'react'
import { Col, Row,Card,Container, Form} from 'react-bootstrap'
import axios from 'axios'
import CustomTextBox from './CustomBox/TextBox'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import UserProfile from './UserProfile'

var token = localStorage.getItem('access_token')

class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:'',
             country:'',
             status:'',
             users:[],
             country_list:[],
        }
    }
    
    componentDidMount() {
        axios.post(`https://ccm.digisailor.in/api/public/country/list`,{},{
            params:{ access_token:token }
        }).then((res)=>{
            const country_list = res.data.response.country_list
            this.setState({ country_list })
            console.log(country_list);
        })
        axios.post(`https://ccm.digisailor.in/api/public/user/list`,{},{
            params : { access_token : token }
        })
        .then(res=>{
            const users = res.data.response.user_list
            this.setState({ users })
            console.log(users);
        })
    }
    trashContractor = (id)=>{
        console.log(id)
        axios.post(`https://ccm.digisailor.in/api/public/user/delete`,{id},{
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
            addUser:true,
            user_id:id,
        })
    }
    Back=(e)=>{
        this.setState({
            addUser:false,
            user_id:'',
        })
        this.componentDidMount()
    }

    userTable=(user) =>{
        console.log(user.country)
        return(
            <tr key={user.id} className={user.id % 2 === 0 ? "rowtable":""} style={{height:"40px" }}>
                <td>{user.name}</td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                 {this.state.country_list.map(country=>{     
                      return (user.country===country.id)&&<td>{country.name}</td>                                                                                                    
                  })}
                <td><button onClick={(e)=>this.trashContractor(user.id)} style={{border:"none"}} ><i className="fa fa-trash" style={{fontSize:"18px",color:"red"}}></i></button></td>
                <td> <button onClick={(e)=>this.renderComponent(user.id)} style={{width:"100px",height:"25px",backgroundColor:"#4A88DC",border:"none",color:"white",borderRadius:"10px"}}>EDIT</button></td>
            </tr>                   
        )
    }
    

    render() {
        const{search,country,status,users,addUser,}=this.state
        
        return (
            <div>
       {addUser?<UserProfile id={this.state.user_id} function={this.Back} />:
            <div>
                <h4 style={{font:"san-serif",marginLeft:"200px",marginTop:"20px"}}>USERS</h4>
                <div className="component">
                    <Card style={{backgroundColor:"white"}}>

                        <Row style={{marginTop:"30px", marginBottom:"40px"}}>
                            <Col lg="4">
                            
                                <Form.Group >
                                <Col>
                                    <Form.Control type="search"
                                     name="search" 
                                     value={search}
                                     id="search" 
                                     placeholder="Search" 
                                     onChange={this.onChange}
                                    style={{padding:"10px", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}}/>
                                <button style={{position:"relative",
                                                bottom:"30px",
                                                left:"73%",backgroundColor:"white",border:"none"}} onClick={this.search}>
                                    <i className="fa fa-search" 
                                        ></i>
                                    </button>
                                    </Col>
                                </Form.Group>
                                </Col>     
                            
                            <Col lg="2">
                                <Form.Group as={Col}>
                                <Col>
                                    <Form.Control as="select" name="country" value={country}  id="country"  onChange={this.onChange} 
                                    style={{padding:"10px", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}} required>
                                            <option value="Country"selected disabled> Country</option>
                                            <option value="Country 1">Country 1</option>
                                            <option value="Country 2">Country 2</option>
                                            <option value="Country 3">Country 3 </option>
                                            <option value="Country 4">Country 4</option>
                                        </Form.Control>
                                        </Col>
                                        </Form.Group>
                                       
                                    </Col>

                            <Col lg="2">
                                <Form.Group as={Col}>
                                <Col>
                                <Form.Control as="select"  name="status" value={status} id="status" onChange={this.onChange} 
                                 style={{padding:"10px", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}} required>
                                        <option value="status"selected disabled> status</option>
                                        <option value="status 1" style={{color:"blue"}}>Pending</option>
                                        <option value="status 2" style={{color:"green"}}>Completed</option>
                                        <option value="status 3" style={{color:"red"}}>Canceled</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            </Col>
                       
                            <Col lg="4">
                            <Link to="/UserProfile">
                                <button 
                                style={{width:"15%",
                                height:"60px",
                                marginLeft:"70%",
                                backgroundColor:"#4A88DC",
                                border:"none",
                                borderRadius:"10px"}}>
                                    <i className="fa fa-plus" style={{fontSize:"20px",color:"white"}}></i>
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop:"35px",overflow:"auto"}}>
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DEPARTMENT</th>
                                    <th scope="col">EMAIL ID</th>
                                    <th scope="col">PHONE NO</th>
                                    <th scope="col">COUNTRY</th>
                                    <th scope="col">DELETE</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col"></th>
                                    
                                </tr>
                            </thead>
                
                            <tbody>
                                {users.map(this.userTable)}
                            </tbody>
                        </table>
                        </Row>
                    </Card>
                </div>
                </div>}
            </div>
        )
    }
}

export default User
