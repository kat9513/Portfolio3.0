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
                <h4 class="text-center col-8 offset-md-2">Click on the title below each image to launch the live site, or the GitHub link to view the repository!</h4>
                <div id="carouselExampleIndicators" class="carousel slide container" data-interval="false" data-ride="carousel">
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
                            <img class="portfolioImage d-block w-100" src={aggretsuko} alt="First slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/TriviaGame/"><h2>Trivia Game</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/TriviaGame">GitHub</a>
                                    <br />
                                    <p class="appDescription col-6 offset-md-3">
                                    A Trivia game using JavaScript for the logic and jQuery to manipulate the HTML based on the Netflix series Aggretsuko.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={artsy} alt="Second slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/GIPHY_APP/"><h2>Artsy</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/GIPHY_APP">GitHub</a>
                                    <br/>
                                    <p class="appDescription col-6 offset-md-3">
                                    An app that utilizes the GIPHY API to create a dynamic web page that populates with gifs of famous artist using JavaScript and jQuery to update the HTML on the site.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={burger} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://tranquil-island-56945.herokuapp.com/burgers"><h2>Eat da Burger!</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/burger">GitHub</a>
                                    <br />
                                    <p class="appDescription col-6 offset-md-3">
                                    Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
                                    Built with Node, Javascript, Express-Handlebars, and mySQL.
                                    </p>

                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={crystal} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/Crystal-Game/index.html"><h2>Crystal Collector</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Crystal-Game">GitHub</a>
                                    <br />
                                    <p class="appDescription col-6 offset-md-3">
                                    Crystal Collector is a number game written using HTML, CSS, JavaScript, and Bootstrap.</p>

                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={geo} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/GeoCuisine/?"><h2>GeoCuisine</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/fixingProject1">GitHub</a>
                                    <br />
                                    <p class="appDescription col-6 offset-md-3">
                                    A web app that allows users to search for recipes based on ingredients they already have in their fridge and pantry in an effort to prevent food waste
                                    Constructed using JavaScript, React, MongoDB, Express, and Node.
                                    </p>
                                </p>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={psychic} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/Psychic-Game/"><h2>Psychic Game</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Psychic-Game">GitHub</a>
                                    <br />
                                    <p class="appDescription col-6 offset-md-3">
                                    The app randomly picks a letter, and the user has to guess which letter the app chose.
                                    Created using dynamically updated HTML and CSS powered by JavaScript code.
                                    </p>
                                </p>
                            </div>
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
