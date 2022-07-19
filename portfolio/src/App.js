import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (

    <div className="overflow">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
