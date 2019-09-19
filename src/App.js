import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import Navbar from './components/NavBar';
import About from "./components/About";
import Toolkit from "./components/ToolKit";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


class App extends Component {
      
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Toolkit />
        <Projects />
        <Contact />
        <Footer />
        </div>
    );
  }
}

export default App;
