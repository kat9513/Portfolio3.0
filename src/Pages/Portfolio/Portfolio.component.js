import React, { Component } from 'react';

const aggretsuko = require("../../Assets/Images/webDev/aggretsuko.png")
const artsy = require("../../Assets/Images/webDev/Artsy.png")
const burger = require("../../Assets/Images/webDev/burger.png")
const crystal = require("../../Assets/Images/webDev/crystal.png")
const geo = require("../../Assets/Images/webDev/GeoCuisine.png")
const psychic = require("../../Assets/Images/webDev/psychic.png")
const tarot = require("../../Assets/Images/webDev/tarot.png")

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2 className="pageHeading">Portfolio</h2>
                <h4 class="description text-center col-md-8 offset-md-2 col-sm-12">Click on the title below each image to launch the live site, or the GitHub link to view the code!</h4>
                <div id="carouselExampleIndicators" class="carousel slide container" data-interval="false" data-ride="carousel">
                    <ol class="carousel-indicators webDevIndicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item webDev active">
                            <img class="portfolioImage d-block w-100" src={aggretsuko} alt="First slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/TriviaGame/" target="_blank"><h2>Trivia Game</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/TriviaGame" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                        A Trivia game using JavaScript for the logic and jQuery to manipulate the HTML based on the Netflix series Aggretsuko.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={tarot} alt="slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://tarocchi22.herokuapp.com/" target="_blank"><h2>Tarocchi</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/TarocchiExpress" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                    A Tarot Card app that utilizes jQuery and Ajax calls to render 3 random tarot cards from a deck of 22, as well as an appropriate description depending on if they're upside down or not.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={artsy} alt="Second slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/GIPHY_APP/" target="_blank"><h2>Artsy</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/GIPHY_APP" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                        An app that utilizes the GIPHY API to create a dynamic web page that populates with gifs of famous artist using JavaScript and jQuery to update the HTML on the site.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={burger} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://tranquil-island-56945.herokuapp.com/burgers" target="_blank"><h2>Eat da Burger!</h2></a>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/burger" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                        Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
                                        Built with Node, Javascript, Express-Handlebars, and mySQL.
                                    </p>

                                </p>
                            </div>
                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={crystal} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/Crystal-Game/index.html" target="_blank"><h2>Crystal Collector</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Crystal-Game" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                        Crystal Collector is a number game written using HTML, CSS, JavaScript, and Bootstrap.</p>

                                </p>
                            </div>
                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={geo} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/GeoCuisine/?" target="_blank"><h2>GeoCuisine</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/fixingProject1" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
                                        A web app that allows users to search for recipes based on ingredients they already have in their fridge and pantry in an effort to prevent food waste
                                        Constructed using JavaScript, React, MongoDB, Express, and Node.
                                    </p>
                                </p>
                            </div>

                        </div>
                        <div class="carousel-item webDev">
                            <img class="portfolioImage d-block w-100" src={psychic} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <a class="links" href="https://kat9513.github.io/Psychic-Game/" target="_blank"><h2>Psychic Game</h2></a>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Psychic-Game" target="_blank">GitHub</a>
                                    <br />
                                    <p class="appDescription col-md-6 offset-md-3 col-sm-12">
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
                <div>
                    <p class="col-md-8 offset-md-2 aboutContent">
                        <span>
                            <p class= "text-center">
                                In 2019 I recieved my certification in Full-Stack Web Development through SMU.
                                I participated in a rigorous curriculum that covered HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, MongoDB, MySQL, Command Line, Git, and more.
                    </p>
                        </span>
                        <br />
                        <span>
                            <p class= "text-center">
                                Due to my love of Art and the concepts that drive contemporary artistic practices,
                                I became increasingly interested in technology's impact on the ways we exchange information, ideas, and opinions.
                                I was particularly inspired by Virtual and Augmented Reality's potential to shape narratives and experiences,
                                which is how I came to decide I needed to learn to code despite having no prior experience.
                    </p>
                        </span>
                        <br />
                        <span>
                            <p class="text-center">
                                Although I am still at the beginning of my coding journey, I am confident in my ability to learn new skills and put them to practical use.
                    </p>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}
