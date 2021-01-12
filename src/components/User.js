import React, { Component } from 'react'
import { Col, Row,Card,Container, Form} from 'react-bootstrap'
import axios from 'axios'
import CustomTextBox from './CustomBox/TextBox'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar'



class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search:'',
             country:'',
             status:'',
             users:[]
        }
    }
    
    componentDidMount() {
        axios.get(`http://www.json-generator.com/api/json/get/bPOTIaHlGq?indent=2`)
        .then(res => {
            const users = res.data;
            this.setState({users});
            console.log(users,"response");
          })
        .catch(error =>{
            console.log(error)
        }
        )
    }

    userTable=(user) =>{
        return(
            <tr key={user.id} className={user.id % 2 === 0 ? "rowtable":""} style={{height:"40px" }}>
                                    <td>{user.name}</td>
                                    <td>{user.department}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.country}</td>
                                    <td><button style={{border:"none"}}><i class="fas fa-trash" style={{fontSize:"17px", color:"red"}}></i></button></td>
                                    <td><Link to="/UserProfile"><button style={{width:"100px",height:"25px",backgroundColor:"#4A88DC",border:"none",color:"white",borderRadius:"10px"}}>EDIT</button></Link></td>
                                </tr>                   
        )
    }
    

    render() {
        const{search,country,status,users}=this.state
        return (
            <div>
        <Sidebar />

                <h4 style={{font:"san-serif",marginLeft:"200px",marginTop:"20px"}}>USERS</h4>
                <div style={{marginLeft:"10%",marginTop:"2%",width:"99%" }}>
                    <Card style={{backgroundColor:"white"}}>

                        <Row style={{marginTop:"30px", marginBottom:"40px"}}>
                            <Col lg="11" sm="12">
                            <Row>
                            <Col lg="4" sm="12">
                                <Form.Group >
                                    <Form.Control type="search" name="search" value={search} id="search" placeholder="Search" onChange={this.onChange}
                                    style={{padding:"10px",width:"78%", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}}/>
                                </Form.Group>
                            
                                <i class="fa fa-search" style={{fontSize:"20px",position:"relative",bottom:"30px",left:"350px"}}></i> 
                            </Col>
                            <Col lg="3" sm="12">
                                <Form.Group as={Col}>
                                    <Form.Control as="select"  name="country" value={country}  id="country"  onChange={this.onChange} 
                                    style={{padding:"10px",width:"78%", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}} required>
                                            <option value="Country"selected disabled> Country</option>
                                            <option value="Country 1">Country 1</option>
                                            <option value="Country 2">Country 2</option>
                                            <option value="Country 3">Country 3 </option>
                                            <option value="Country 4">Country 4</option>
                                        </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg="3" sm="12">
                            <Form.Group as={Col}>
                                
                                <Form.Control as="select"  name="status" value={status} id="status" onChange={this.onChange} 
                                 style={{padding:"10px",width:"78%", borderRadius: "30px",border:"none", boxShadow:"5px 5px 8px #888888"}} required>
                                        <option value="status"selected disabled> status</option>
                                        <option value="status 1" style={{color:"blue"}}>Pending</option>
                                        <option value="status 2" style={{color:"green"}}>Completed</option>
                                        <option value="status 3" style={{color:"red"}}>Canceled</option>
                                    </Form.Control>
                            </Form.Group>
                            </Col>
                            </Row>
                            </Col>

                            <Col lg="1" sm="12">
                            <Link to="/UserProfile">
                                <button 
                                style={{width:"60%",
                                height:"60px",
                                // marginLeft:"70%",
                                backgroundColor:"#4A88DC",
                                border:"none",
                                borderRadius:"10px"}}>
                                    <i className="fa fa-plus" style={{fontSize:"20px",color:"white"}}></i>
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"35px"}}>
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DEPARTMENT</th>
                                    <th scope="col">EMAIL ID</th>
                                    <th scope="col">PHONE NO</th>
                                    <th scope="col">COUNTRY</th>
                                    <th scope="col">DELETE</th>
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
            </div>
        )
    }
}

export default User
