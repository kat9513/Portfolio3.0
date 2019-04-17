import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">Katherine Higgins</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i class="fas fa-arrow-circle-down fa-1x"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link active" href="/">About <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="/#/portfolio">Portfolio</a>
                            <a className="nav-item nav-link" href="/#/artwork">Artwork</a>
                            <a className="nav-item nav-link" href="/#/contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}