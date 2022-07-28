import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeContext } from './components/theme-context';
const App = () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  return (

    <div className="overflow" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      <button type="button" onClick={toggle} style={{backgroundColor: theme.backgroundColor,color: theme.color,outline: 'none'}}>
        {!dark ? 'Dark' : 'Light'}
      </button>
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
    </div>

  );
}

export default App;
