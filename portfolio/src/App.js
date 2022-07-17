import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
