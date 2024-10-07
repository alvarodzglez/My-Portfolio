import './App.css';
import './variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";


import MyNavbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Router>
    </>
  );
}

export default App;
