import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../logo-light.png'
import {
    Image,
    Row,
    Col,
    DropdownButton,
    Dropdown,
    NavDropdown
} from 'react-bootstrap'
import $ from 'jquery'

export default class Sidebar extends Component {

    sidebarOpen = () =>{
       $("#mySidebar").css('display','block')
    }
    sidebarClose = () =>{
       $("#mySidebar").css('display','none')
    }
    render() {
        return (
            <div>
<<<<<<< HEAD
                <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{width:"180px"}} id="mySidebar">
                    <Image src={Logo} style={{marginLeft:"30px",marginTop:"20px"}}/>
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onclick={this.sidebarClose}>Close &times;</button>
                        <Link to="/" className="nav-link w3-bar-item">CWR summary</Link>
                        <Link to="/dashboard" className="nav-link w3-bar-item">Dashboard</Link>
                        <Link to="/" className="nav-link w3-bar-item">My Profile</Link>
=======
                <nav>
                
                     
                        <div  className="sidebar">
                        <Link to="/" className="nav-link">CWR summary</Link>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/profile" className="nav-link">My Profile</Link>
                        <Link to="/" className="nav-link">Admistration</Link>
                        <Link to="/" className="nav-link">CCM home</Link>
                        
                        </div>
>>>>>>> d7c27fa06628026e57705094d00384b388b288a2
                        
                        <NavDropdown title="Administration" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to="/user" className="nav-link">User</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/clientlist" className="nav-link">Client</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/contractor-list" className="nav-link">Contractor</Link></NavDropdown.Item>  
                        </NavDropdown>
                       
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
