import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTopArrow from './components/ScrollTopArrow';
import { ThemeContext } from './components/theme-context';
import {Nav,  Navbar} from 'react-bootstrap';
import { Link } from "react-scroll";
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
    color: '#FF8412'
}

const App = () => {
  const { theme, toggle } = React.useContext(ThemeContext)

  return (
    <div className="overflow" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand to="/"style={navBrand} className="nav-logo" alt="Logo.">ep</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Link  id="about" to="about"  spy={true} smooth={true} offset={350}  duration={0} style={navItem}>ABOUT</Link>
                        <Link  id="projects" to="projects" spy={true} smooth={true} offset={1100} duration={0} style={navItem}>PROJECTS</Link>
                        <Link  id="contacts" to="contacts" spy={true} smooth={true} offset={1600}  duration={0} style={navItem}>CONTACT</Link>
                        <Link> 
                        <div id="toggle" >
                            <i class="indicator" onClick={toggle}></i>
                        </div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
      </Navbar>
      <Hero />
      <About
        title="ABOUT"
        id="about"
      />
      <Projects
        title="PROJECTS"
        id="projects"
      />
      <Contact
        title="CONTACT"
        id="contact"
      /><ScrollTopArrow />
      
    </div>

  );
}

export default App;
