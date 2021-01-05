import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../logo-light.png'
import {
    Image,
    Row,
    Col
} from 'react-bootstrap'
import $ from 'jquery'

export default class diffsidebar extends Component {

    sidebarOpen = () =>{
       $("#mySidebar").css('display','block')
    }
    sidebarClose = () =>{
       $("#mySidebar").css('display','none')
    }
    render() {
        return (
            <div>
                <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{width:"180px"}} id="mySidebar">
                    <Image src={Logo} style={{marginLeft:"10px",marginTop:"20px"}}/>
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick={this.sidebarClose}>Close &times;</button>
                        <Link to="/" className="nav-link w3-bar-item">CWR summary</Link>
                        <Link to="/dashboard" className="nav-link w3-bar-item">Dashboard</Link>
                        <Link to="/" className="nav-link w3-bar-item">My Profile</Link>
                        <Link to="/" className="nav-link w3-bar-item">Admistration</Link>
                        <Link to="/" className="nav-link w3-bar-item">CCM home</Link>
                        <Link to="/profile" className="nav-link w3-bar-item">Profile</Link>
                </div>
                <div className="w3-main" style={{marginLeft:"180px"}}>
                    <div style={{backgroundColor:"rgb(58,95,133)",height:"80px"}}>
                        <button className="w3-button w3-xlarge w3-hide-large" style={{color:"white"}} onclick={this.sidebarOpen}>&#9776;</button>
                        <div className="w3-container">
                        <h4 style={{color:"white",marginTop:"20px"}} className="header-heading">In a world of gray, CCM provides clarity to all construction & facility projects.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
