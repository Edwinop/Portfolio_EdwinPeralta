import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {

  return (

    <div className="overflow">
      <Fragment>  
          <Navigation />
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
          />     
      </Fragment>
    </div>

  );
}

export default App;
