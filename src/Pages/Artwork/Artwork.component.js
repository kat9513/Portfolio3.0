import React, { Component } from 'react';

const Aquarium = require("../../Assets/Images/ArtWork/Aquarium.jpg")
const Ravine = require("../../Assets/Images/ArtWork/ARavineInTheEarth.jpg")
const BadGirl = require("../../Assets/Images/ArtWork/BadGirl.JPG")
const BigHead = require("../../Assets/Images/ArtWork/BigHead.jpg")
const Blam = require("../../Assets/Images/ArtWork/blam(1).png")
const Blue = require("../../Assets/Images/ArtWork/BlueBonnet.jpg")


export default class Artwork extends Component {
    render() {
        return (
            <div>
                <h2 className="pageHeading">Artwork</h2>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="portfolioImage d-block w-100" src={Aquarium} alt="First slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Trivia Game</b></h5>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/TriviaGame">GitHub</a>
                                    <br />
                                    <a class="links" href="https://kat9513.github.io/TriviaGame/">Site</a>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={Ravine} alt="Second slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Artsy</b></h5>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/GIPHY_APP">GitHub</a>
                                    <br />
                                    <a class="links" href="https://kat9513.github.io/GIPHY_APP/">Site</a>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={BadGirl} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Eat da Burger!</b></h5>
                                <p class="links text-center">
                                    <a class="links" href="https://github.com/kat9513/burger">GitHub</a>
                                    <br />
                                    <a class="links" href="https://tranquil-island-56945.herokuapp.com/burgers">Site</a>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={BigHead} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Crystal Collector</b></h5>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Crystal-Game">GitHub</a>
                                    <br />
                                    <a class="links" href="https://kat9513.github.io/Crystal-Game/index.html">Site</a>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={Blam} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>GeoCuisine</b></h5>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/fixingProject1">GitHub</a>
                                    <br />
                                    <a class="links" href="https://kat9513.github.io/GeoCuisine/?">Site</a>
                                </p>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <img class="portfolioImage d-block w-100" src={Blue} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Psychic Game</b></h5>
                                <p class="links">
                                    <a class="links" href="https://github.com/kat9513/Psychic-Game">GitHub</a>
                                    <br />
                                    <a class="links" href="https://kat9513.github.io/Psychic-Game/">Site</a>
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