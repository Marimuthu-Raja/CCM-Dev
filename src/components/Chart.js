import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import Sidebar from './Sidebar'




class Chart extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            chartData:{},
            labelData1:[],
            labelData2:[],
            labelData3:[]
      }
    }
    
    componentDidMount(){

        axios.get("http://www.json-generator.com/api/json/get/bVEmBtzcQy?indent=2")
        .then(res=>{
            const labelData3=res.data;
            console.log(labelData3,"res")
            // console.log(labelData2,"res")
            // console.log(labelData3,"res")
    
            this.setState({labelData3},()=>{console.log(this.state,"state")})
        })
    
        .catch(err=>{
            console.log(err)
        })
    
    }

    render() {
        const ChartData={
            labels:['Remaining', 'Received', 'Total'],
            datasets:[{
                label:'Remaining',
                data:this.state.labelData3,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                ]
            },
          
        ] 
        }
        const options={
            title:{
                display:true,
                text:"barchart",
                fontSize:30
            },
            legend:{
                display:true,
                position:"right"
            }
           
               
           }
        return (
            <div>
        <Sidebar />

                <Card style=
                {{width:"70%",marginLeft:"20%"}}>
                    <Bar 
                        data={ChartData}
                        options={options}

                    />
                </Card>
            </div>
        )
    }
}

export default Chart
