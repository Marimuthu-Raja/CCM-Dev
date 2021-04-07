import React, { Component } from 'react'
import { Card,Row,Col,Form,Button,Image } from 'react-bootstrap'
import CountryFlags from './CountryFlags'
import { Link } from "react-router-dom";
import axios from '../../utils/axiosinstance'
import Logo from '../../img/logo-light.png'
export default class LandingPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             countries:[],
        }
    }
    


    componentDidMount(){
        axios.post('/country/list')
        .then((res)=>{
            const countries = res.data.response.country_list
            this.setState({countries})
            console.log(countries)
        })
    }
    render() {
        const { countries } = this.state
        return (
            <div>
                <div className="component">
                <h4>Client List</h4>

                    <Row>
                        <Col>
                            <Card lg={4}>
                                <Col>
                                    <Form.Control type="text"  id="search"
                                    placeholder="Search"
                                    onChange={this.onChange}
                                    name="search"
                                    />
                                   <button className='iconButtton' >
                                    <i className="fa fa-search" onClick={this.onSearch} ></i>
                                </button><br/>
                                </Col>
                                        {countries.map((country,i)=>(
                                                <CountryFlags key={i} country={country.name}/>))}
                            <Row style={{marginTop:"20%"}}>
                                <Link to="/country"><Button>Add Country</Button></Link>
                            </Row>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <Card style={{height:"800px"}}>
                            <Form.Control type="text"  id="search"
                                    placeholder="Search"
                                    onChange={this.onChange}
                                    name="search"
                                    />
                                    <i className="fa fa-search" style={{position:"relative",
                                                bottom:"30px",
                                                left:"90%",cursor:'pointer',fontSize:"20px",color:'grey'}}
                                        ></i>

                                <Row>
                                <Col>
                                    <Card style={{backgroundColor:"white",marginTop:"30px"}}>
                                        <Row>
                                        <Col lg={6}>
                                        <i className="fa fa-tasks" style={{fontSize:"20px"}}></i>
                                        <Link to='/cwr-summary' style={{fontWeight:"bold",fontSize:"17px",marginLeft:"20px",textDecoration:"none"}}>CWR SUMMARY</Link>
                                        </Col>
                                        <Col lg={6}>
                                        <i className="fa fa-sitemap" aria-hidden="true"></i><Link to='/dashboard' style={{fontWeight:"bold",fontSize:"17px",marginLeft:"20px",textDecoration:"none"}}>DASHBOARD</Link>
                                        </Col>
                                        </Row>
                                    </Card>
                                    <Image src={Logo} style={{marginTop:"20%"}} className="profile-img" ></Image>
                                </Col>
                                
                            </Row>
                            </Card>
                           
                        </Col>
                    
                    </Row>
                    
                    
                </div>
            </div>
        )
    }
}
