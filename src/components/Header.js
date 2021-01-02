import React, { Component } from 'react'
import {
    Image,
    Row,
    Col
} from 'react-bootstrap'
import Logo from '../logo-light.png'

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    
                        <div className="custom-header" style={{width:"180px"}} >
                           <div className="header-img">
                                <Image src={Logo}   ></Image>
                            </div>
                        </div>
                        <div className="header-text">
                            
                                In a world of gray, CCM provides clarity to all construction & facility projects.
                
                        </div>
                    
                    
                    
                    
                </header>
            </div>
        )
    }
}

export default Header
