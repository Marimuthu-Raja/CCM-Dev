import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import Sidebar from './Sidebar'



export class BarChart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        chartData:{},
        labelValue:[],
        labelData1:[],
        labelData2:[],
        labelData3:[]
  }
}

componentDidMount(){

    axios.get("http://www.json-generator.com/api/json/get/cfFjAhAOjS?indent=2")
    .then(res=>{
        const labelData1=res.data[1].data1;
        const labelData2=res.data[2].data2;
        const labelData3=res.data[3].data3;
        console.log(labelData1,"res")
        console.log(labelData2,"res")
        console.log(labelData3,"res")

        this.setState({labelData1,labelData2,labelData3},()=>{console.log(this.state,"state")})
    })

    .catch(err=>{
        console.log(err)
    })

}

  render() {
  // const chartData={
  //   labels: this.state.labelValue,
  //   datasets: [{
  //       label: 'COLORS',
  //       data:  [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
        
  //       ]}
  //       ,
  //       {
  //         label: 'COLORS',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor:[
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)',
          
  //         ]}
  //         ,
  //   //       {
  //   //         label: 'COLORS',
  //   //         data: this.state.labelData3,
  //   //         backgroundColor: [
  //   //             // 'rgba(54, 162, 235, 1)',
  //   //             // 'rgba(54, 162, 235, 1)',
  //   //             // 'rgba(255, 206, 86, 1)',
  //   //             // 'rgba(75, 192, 192, 1)',
  //   //             // 'rgba(153, 102, 255, 1)',
  //   //             // 'rgba(255, 159, 64, 1)'
            
  //   // ]}
  // ],
   
  //     }
  //     const options={
  //       title:{
  //           display:true,
  //           text:"barchart",
  //           fontSize:30
  //       },
  //       legend:{
  //           display:true,
  //           position:"bottom"
  //       }  
  //      }
  const ChartData={
    labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets:[{
        data:[1,2,3,4,5,6],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ]
    },
    {
        data:[12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ]
    },
    {
              label: 'COLORS',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:[
            'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
              
              ]}
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
        position:"bottom"
    }
   
       
   }
    return (
      <div className="chart">
        <Sidebar />

        <Card style={{backgroundColor:"white",marginLeft:"15%",width:"80%"}}>
       <Bar 
       data={ChartData}
       options={options}
       />
       </Card>
      </div>
    )
  }
}

export default BarChart
