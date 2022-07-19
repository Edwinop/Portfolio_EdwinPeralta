import React, {Component} from 'react';
import {Nav,  Navbar} from 'react-bootstrap';
import {Link} from 'react-scroll'
const navColor ={
    backgroundColor: '#EEECE1',
};
const navItem = {
    color : 'black',
    marginTop: '18px',
    marginLeft: '50px',
    marginRight: '50px',
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 18
};
const navBrand ={
    marginLeft: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontSize: 30
}

export default class Navigation extends Component {
    render() {

        return (
            <Navbar collapseOnSelect expand="lg" style={navColor}>
                <Navbar.Brand to="/"style={navBrand}>ep</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Link id="about" to="/about"  spy={true} smooth={true} style={navItem}>ABOUT</Link>
                        <Link id="projects" to="/projects" spy={true} smooth={true} style={navItem}>PROJECTS</Link>
                        <Link id="contacts" to="/contacts" spy={true} smooth={true} style={navItem}>CONTACT</Link>
                        <Link href="#deets"style={navItem}>LINKEDIN</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        }
}
