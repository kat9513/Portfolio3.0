import React, { Component } from 'react';

const aggretsuko = require("../../Assets/Images/webDev/aggretsuko.png")
const artsy = require("../../Assets/Images/webDev/Artsy.png")
const burger = require("../../Assets/Images/webDev/burger.png")
const crystal = require("../../Assets/Images/webDev/crystal.png")
const geo = require("../../Assets/Images/webDev/GeoCuisine.png")
const psychic = require("../../Assets/Images/webDev/psychic.png")

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2 className="pageHeading">Portfolio</h2>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={aggretsuko} alt="First slide" />
                            <h5>Trivia Game</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={artsy} alt="Second slide" />
                            <h5>Artsy</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={burger} alt="Third slide" />
                            <h5>Eat da Burger!</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={crystal} alt="Third slide" />
                            <h5>Crystal Collector</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={geo} alt="Third slide" />
                            <h5>GeoCuisine</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={psychic} alt="Third slide" />
                            <h5>Psychic Game</h5>
                            <p>
                            <a href="https://github.com/kat9513/TriviaGame">GitHub</a>
                            <br/>
                            <a href="https://kat9513.github.io/TriviaGame/">Site</a>
                            </p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
