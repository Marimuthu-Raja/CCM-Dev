import React, { Component } from 'react'
import { Card, Form, Row, Col, Button, Image } from 'react-bootstrap'
import Logo from '../img/logo-light.png'
import axios from 'axios'
import CustomTextBox from '../utils/TextBox'
import { Alert } from '../utils/Utilities'


export class Forgotpassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Password: '', 
            ConfirmPassword: '',
        }
    }
    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = ()=>{
        const { Password, ConfirmPassword ,} = this.state
        if (Object.values(this.state).every(x => x)  ) {
            if( Password !== ConfirmPassword ) {
                Alert("error","Oops","Password Mismatched!")
                return
            }
            Alert("success", "Success", "Password Reset Successful") 
            this.props.Back()
        }
        else {
            Alert("error", "Oops", "Please Fillout All Fields!")
        }
    } 

    render() {
        const { Password, ConfirmPassword ,} = this.state
        return (
            <div>
                <div className="component">
                <Card border="dark" sm={6} >
                     <Row>
                         <Col sm={4}>
                             <Image src={Logo} rounded style={{ width: "100px", marginLeft: "30%", marginTop: "20%" }} />
                         </Col>
                         <Col sm={4} style={{marginTop:'50px'}}>
                         <CustomTextBox
                             txtBoxLabel="Password"
                             txtBoxType="password"
                             txtBoxName="Password"
                             txtBoxValue={Password}
                             txtBoxPH="Password"
                             changeEvent={this.onChange}
                         />
                         <CustomTextBox
                             txtBoxLabel="Confirm Password"
                             txtBoxType="password"
                             txtBoxName="ConfirmPassword"    
                             txtBoxValue={ConfirmPassword}                         
                             txtBoxPH="ConfirmPassword"
                             changeEvent={this.onChange}
                         />
                         </Col>
                     </Row>
                     <Row className='d-flex justify-content-center' style={{ marginTop: "10%" }}>
                         <Button onClick={this.onSubmit}>Reset</Button>
                     </Row>
                 </Card>
             </div>
            </div>
        )
    }
}

export default Forgotpassword

// export default function Forgotpassword(props) {

//     const [Password, setPassword] = useState('')
//     const [ConfirmPassword, setConfirmPassword] = useState('')


//     const onSubmit = () => {
//         const data = { Password, ConfirmPassword,}
//         if (Object.values(data).every(x => x)) {
//             Alert("success", "Success", "Password Reset Successful")
//             props.status = false
//         }
//         else {
//             Alert("error", "Oops", "Please Fillout All Fields!")
//         }
//         if (Password !== ConfirmPassword) {
//             Alert("error", "Oops", "Password Mismatched!")
//         }
//     }

//     return (
//         <div>
//             <div className="component">
//                 <Card border="dark" sm={6} >
//                     <Row>
//                         <Col sm={4}>
//                             <Image src={Logo} rounded style={{ width: "100px", marginLeft: "30%", marginTop: "20%" }} />
//                         </Col>
//                         <Col sm={4} >
//                         <CustomTextBox
//                             txtBoxLabel="Password"
//                             txtBoxType="text"
//                             txtBoxName="Password"
//                             txtBoxID="Password"
//                             txtBoxPH="Password"
//                             onChange={(e)=>setPassword(e.target.value)}
//                         />
//                         <CustomTextBox
//                             txtBoxLabel="Confirm Password"
//                             txtBoxType="text"
//                             txtBoxName="ConfirmPassword"
//                             txtBoxID="ConfirmPassword"
//                             txtBoxPH="ConfirmPassword"
//                             onChange={(e)=>setConfirmPassword(e.target.value)}
//                         />
//                         </Col>
//                     </Row>
//                     <Row className='d-flex justify-content-center' style={{ marginTop: "10%" }}>
//                         <Button onClick={() => onSubmit()}>Reset</Button>
//                     </Row>
//                 </Card>
//             </div>
//         </div>
//     )
// }
