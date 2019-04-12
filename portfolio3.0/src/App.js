import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import NavBar from "./components/NavBar/NavBar.component";



class App extends Component {
  render() {
    return (
      <Router>
        <NavBar></NavBar>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    );
  }
}

export default App;