import React, { Component } from 'react'
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Image,
    DropdownButton,
    Dropdown,
} from 'react-bootstrap';
import CustomTextBox from './CustomBox/TextBox'
import Logo from '../logo-light.png'
import $ from 'jquery'
import swal from 'sweetalert'
import axios from 'axios'
import {CanvasJSChart} from 'canvasjs-react-charts'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           Date_From:null,
           Date_To:null,
           select_month:"",
           total_amount:380,
           received_amount:280,
           remaining_amount:100,
           quotation:[],
           invoice:[],
        }
    }

    componentDidMount() {
        axios('http://www.json-generator.com/api/json/get/cqUHhMhfvS?indent=2' )
        .then(res =>{
            const quotation = res.data
            this.setState({quotation})
            console.log(quotation,"quotation")
            
        })
        axios('http://www.json-generator.com/api/json/get/ckCdZLcVua?indent=2' )
        .then(res =>{
            const invoice = res.data
            this.setState({invoice})
            console.log(invoice,"invoice")
            let sum=0;
            this.state.invoice.map(invoice=>{
            sum = sum + invoice.amount
            }) 
            this.setState({Total:sum},()=>{console.log(this.state,"state")})
        })
        // axios('http://dev.digisailor.in/ccm_json/invoice.json')
        // .then(res =>{
        //     const invoice = res.data
        //     this.setState({invoice})
        //     console.log(invoice,"invoice")
        // })
        
           
    
        
    }
    chartData1= ()=>{
		
        const option1 = {
            animationEnabled: true,
            theme: "light1", //"light1", "dark1", "dark2"
            height:400,
            data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>${y}</strong>",
				indexLabel: "${y}",
                indexLabelPlacement: "inside",
                dataPoints: [
					{ y: 222, label: "Total",  },
					{ y: 100, label: "Remaining", },
					{ y: 280, label: "Received" },
				]
			}]
            // axisX:{
            //     title:"Release_name",
            //     titleFontColor:"#DD2735",
            //     titleFontSize:25,
            //     labelFontSize:20,
                
            // },
            // axisY:{
            //     title:"Builds",
            //     titleFontColor:"#DD2735",
            //     titleFontSize:25,
            //     labelFontSize:15,
            //     maximum:25,
            //     minimum:5,
            // },
            // data: [{
            //     type: "column", 
            //     dataPoints: this.state.option1_Data.map(e=>{
            //         console.log(e,"e")
            //         return {label:e.release_name, y:e.builds }
            //     })
            
            // }]
        }
        
        return (option1);
}

        changeFormat = (input) =>{

        }

        onChange = (e)=>{
            e.preventDefault();
            const { Date_From,Date_To,total_amount,invoice_amount,remaining_amount,quotation,invoice} = this.state;
            console.log(this.state,"state")
            if(e.target.name=="Date_To"){
                
                this.setState({Date_To:e.target.value}) 
                if(Date_From!=null && e.target.value!=null){
                   
                    let sum=0;
                   
                    this.state.quotation.map(quotation=>{
                        
                        const quotation_date = Date.parse(quotation.date)
                        const from = Date.parse(Date_From)
                        const end = Date.parse(e.target.value)
                        
                        if(quotation_date>from && quotation_date<end){
                           
                            sum = sum + quotation.amount
                            console.log(sum)
                        }
                    }) 
                
                    this.setState({total_amount:sum},()=>{console.log(this.state,"state")})
                }
                return
            }
            
            this.setState({
                [e.target.name]:e.target.value
            },()=>{console.log(e.target.value,"value")})
        }


    render() {
        const option1 = this.chartData1(); 
        const {Date_From,Date_To,select_month,total_amount,remaining_amount,received_amount}= this.state;
        return (
            <div>
                <div style={{marginLeft:"10%", width:"98%"}}>

                <Row className="justify-content-md-center">
                       <Col lg={1}><Form.Label className="select-bold" >DASHBOARD</Form.Label></Col>
                        <Col lg={5}><Form.Control className="search" type='text' name="" value="" placeholder="Search"/></Col>   
                </Row>
                   
                    <Card style={{marginTop:"30px"}}>
                        <Row>
                            <Col lg={2}>
                            
                            <Form.Control as="select" className="select" name=""  value="" onChange="" required>
                                        <option value="January 2021" >Country </option>
                                        <option value="February 2021">February 2021</option>
                                        <option value="March 2021">March 2021</option>
                                        <option value="April 2021">April 2021</option>
                            </Form.Control><i class="fa fa-angle-down" style={{position:"relative",bottom:"24px" , left:"65%",fontSize:"20px"}} ></i>
                            </Col>
                            <Col lg={2}>
                            <Form.Control as="select" className="select" name=""  value="" onChange="" required>
                                        <option value="January 2021" >Client </option>
                                        <option value="February 2021">February 2021</option>
                                        <option value="March 2021">March 2021</option>
                                        <option value="April 2021">April 2021</option>
                            </Form.Control><i class="fa fa-angle-down" style={{position:"relative",bottom:"24px" , left:"65%",fontSize:"20px"}} ></i>
                            </Col>
                            <Col lg={2}>
                            <Form.Control as="select" className="select" name=""  value="" onChange="" required>
                                        <option value="January 2021" >Contractor</option>
                                        <option value="February 2021">Contractor 1</option>
                                        <option value="March 2021">Contractor 2</option>
                                        <option value="April 2021">Contractor 3</option>
                            </Form.Control><i class="fa fa-angle-down" style={{position:"relative",bottom:"24px" , left:"65%",fontSize:"20px"}} ></i>
                            </Col>
                            <Col lg={{span:2, offset:4}}>
                            <Form.Control as="select" className="select" name=""  value="" onChange="" required>
                                        <option value="January 2021" >Currency</option>
                                        <option value="February 2021">February 2021</option>
                                        <option value="March 2021">March 2021</option>
                                        <option value="April 2021">April 2021</option>
                            </Form.Control><i class="fa fa-angle-down" style={{position:"relative",bottom:"24px" , left:"65%",fontSize:"20px"}} ></i>
                            </Col>
                        </Row>
                        
                    <Row >
                        <Col lg={8} className="inner-card">
                            <Row>
                                <Col lg={3}>
                                <Form.Group>
                                    <label>From</label>
                                    <div>
                                    <input type="date" className="select" name="Date_From" value={Date_From} onChange={this.onChange} />
                                    </div>
                                    
                                </Form.Group>
                                </Col>
                                <Col lg={3}>
                                <Form.Group>
                                    <label>To</label>
                                    <div>
                                    <input type="date" className="select" name="Date_To" value={Date_To} onChange={this.onChange} />
                                    </div>
                                   
                                </Form.Group>
                                </Col>
                                <Col lg={{span:3, offset:3}}>
                            <Form.Control as="select" className="select-bold" name=""  value="" onChange="" required>
                                        <option value="January 2021" >January 2021</option>
                                        <option value="February 2021">December 2020</option>
                                        <option value="March 2021">November 2020</option>
                                        <option value="April 2021">October 2020</option>
                            </Form.Control><i class="fa fa-angle-down" style={{position:"relative",bottom:"24px" , left:"65%",fontSize:"20px",fontWeight:'bold'}} ></i>
                            </Col>   
                            </Row>
                            <CanvasJSChart  options = {option1}/>
                        </Col>
                        <Col lg={4}>
                        <Row>
                                <div className="inner-title">Client Amount</div>
                                <Row  className="inner-row" style={{backgroundColor:"rgb(33,213,155)"}}>
                                    <Col lg={4} sm={4} >
                                        <div className="in-in-col">
                                        <label style={{color:"rgb(33,213,155)"}}>Total</label>
                                        <div>${total_amount}K</div>
                                        </div>
                                    </Col>
                                    <Col lg={4} sm={4}>
                                    <div className="in-in-col">
                                        <label style={{color:"rgb(33,213,155)"}}>Received</label>
                                        <div>${received_amount}K</div>
                                    </div>
                                    </Col>
                                    <Col lg={4} sm={4}>
                                    <div className="in-in-col">
                                        <label style={{color:"rgb(33,213,155)"}}>Remaining</label>
                                        <div>${remaining_amount}K</div>
                                    </div>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <div className="inner-title">Contractor Amount</div>
                                <Row  className="inner-row" style={{backgroundColor:"rgb(87,98,214)"}}>
                                    <Col lg={4} sm={4} >
                                        <div className="in-in-col" >
                                        <label style={{color:"rgb(87,98,214)"}}>Total</label>
                                        <div> ${total_amount}K </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}  sm={4}>
                                    <div className="in-in-col">
                                        <label style={{color:"rgb(87,98,214)"}}>Paid</label>
                                        <div>${received_amount}K</div>
                                    </div>
                                    </Col>
                                    <Col lg={4} sm={4} >
                                    <div className="in-in-col">
                                        <label style={{color:"rgb(87,98,214)"}}>Remaining</label>
                                        <div>${remaining_amount}K</div>
                                    </div>
                                    </Col>
                                </Row>
                            </Row>
                            <Row >
                            <div className="inner-title">Profit(Margin)</div>
                                <Row className="inner-row" style={{backgroundColor:"rgb(250, 143, 214)"}}>
                                    <Col lg={4}  sm={4}>
                                    <div className="in-in-col">
                                        <label style={{color:"rgb(250, 143, 214)", marginTop:"40px" }}>P&L</label>
                                    </div>
                                    </Col >
                                    <Col lg={8} sm={8}>
                                    <label className="center-col">+5280K</label>
                                    </Col>
                                </Row>
                            </Row>
                            
                        </Col>
                    </Row>
                            
                        

                       
                    </Card>
               </div> 
            </div>
        )
    }
}

export default Dashboard
