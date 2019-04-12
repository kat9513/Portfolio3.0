import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Katie Higgins</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">About <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                            <a className="nav-item nav-link" href="/contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}