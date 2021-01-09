import React, { Component } from 'react';
import {
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Button,
    FormControl,
    Image
} from 'react-bootstrap';
import {Link} from 'react-router-dom';




class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav>
                
                     
                        <div  className="sidebar">
                        <Link to="/" className="nav-link">CWR summary</Link>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/profile" className="nav-link">My Profile</Link>
                        <Link to="/" className="nav-link">Admistration</Link>
                        <Link to="/" className="nav-link">CCM home</Link>
                        
                        </div>
                        
                  
                   
                {/* <div className="sidebar">
                    <Link to="/" className="nav-link">CWR summary</Link>
                    <Link to="/" className="nav-link">Dashboard</Link>
                    <Link to="/" className="nav-link">My Profile</Link>
                    <Link to="/" className="nav-link">Admistration</Link>
                    <Link to="/" className="nav-link">CCM home</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </div> */}
                   
                </nav>

                
            </div>
        )
    }
}

export default Sidebar
