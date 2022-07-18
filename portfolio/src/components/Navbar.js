import React from 'react';
import {Nav,  Navbar} from 'react-bootstrap';

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
const Navigation = () => {

        return (
            <Navbar collapseOnSelect expand="lg" style={navColor}>
                <Navbar.Brand href="#home"style={navBrand}>ep</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link href="#features" style={navItem}>ABOUT</Nav.Link>
                        <Nav.Link href="#pricing"style={navItem}>PROJECTS</Nav.Link>
                        <Nav.Link href="#deets"style={navItem}>CONTACT</Nav.Link>
                        <Nav.Link href="#deets"style={navItem}>LINKEDIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

}
export default Navigation;