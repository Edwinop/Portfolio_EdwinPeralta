import React, {Component} from 'react';
import {Nav,  Navbar} from 'react-bootstrap';
import { Link } from "react-scroll";
const navColor ={
    backgroundColor: '#333341',
    color: 'white'
};
const navItem = {
    marginTop: '18px',
    marginLeft: '50px',
    marginRight: '50px',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 18
};
const navBrand ={
    marginLeft: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 30,
    color: 'white'
}

export default class Navigation extends Component {
    render() {

        return (
            <Navbar collapseOnSelect expand="lg" style={navColor}>
                <Navbar.Brand to="/"style={navBrand} className="nav-logo" alt="Logo." onClick={this.scrollToTop}>ep</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Link  id="about" to="about"  spy={true} smooth={true} offset={350}  duration={0} style={navItem}>ABOUT</Link>
                        <Link  id="projects" to="projects" spy={true} smooth={true} offset={1100} duration={0} style={navItem}>PROJECTS</Link>
                        <Link  id="contacts" to="contacts" spy={true} smooth={true} offset={1600}  duration={0} style={navItem}>CONTACT</Link>
                        <Link  style={navItem}>LINKEDIN</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        }
}
