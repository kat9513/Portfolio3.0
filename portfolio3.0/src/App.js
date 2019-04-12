import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.component";
import About from "./Pages/About/About.component";
import Portfolio from "./Pages/Portfolio/Portfolio.component";
import Artwork from "./Pages/Artwork/Artwork.component";
import Contact from "./Pages/Contact/Contact.component";




class App extends Component {
  render() {
    return (
      <Router>
        <title>Katie Higgins</title>
        <NavBar></NavBar>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/artwork" component={Artwork} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;