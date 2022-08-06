import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTopArrow from './components/ScrollTopArrow';
import { ThemeContext } from './components/theme-context';
const App = () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  const [isHover, setIsHover] = useState(false);
const themeBtn = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    borderRadius: 12,
    marginLeft: '.75vw',
    borderColor: isHover ? '#FF8412' : 'black',
    fontFamily: 'Quicksand, sans-serif'
  }
const handleMouseEnter = ()=>{
  setIsHover(true);
}
const handleMouseLeave = ()=>{
  setIsHover(false);
}
  return (
    <div className="overflow" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Navigation />
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} type="button" onClick={toggle} style={themeBtn}>
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
      /><ScrollTopArrow />
      
    </div>

  );
}

export default App;
