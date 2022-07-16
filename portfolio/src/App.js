import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js"
function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
    </div>
  );
}

export default App;
