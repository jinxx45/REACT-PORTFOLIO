import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav}  from 'react-bootstrap'

import './Navbar.css'


import logo from '../../Images/brand png.png'




const navbar  =  () =>{
    return(
        <div>
        <Navbar className="fixed-top" bg="info"  expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt ="logo" height="40" width="40"/>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav ">
                     <Nav className="mr-auto ">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
               </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default navbar



