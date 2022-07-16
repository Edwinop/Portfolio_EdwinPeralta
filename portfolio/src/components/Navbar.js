import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar} from 'react-bootstrap';
import './Navbar.css'

const navcolor ={backgroundColor: '#EEECE1'};
class Navigation extends Component{

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={navcolor}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link href="#deets">LinkedIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
export default Navigation;