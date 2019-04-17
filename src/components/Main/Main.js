import React, { Component } from "react";

import {
    Route,
    HashRouter
} from "react-router-dom";

import NavBar from "../NavBar/NavBar.component"

import About from "../../Pages/About/About.component";
import Portfolio from "../../Pages/Portfolio/Portfolio.component";
import Artwork from "../../Pages/Artwork/Artwork.component";
import Contact from "../../Pages/Contact/Contact.component";


class Main extends Component {
    render() {
        return (
            <div id="Main">
                <NavBar />
                <HashRouter>
                    <div>
                        <ul className="header">

                        </ul>
                        <div className="content">
                            <Route exact path="/" component={About} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/artwork" component={Artwork} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main;