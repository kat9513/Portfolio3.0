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
                        <div class="container carousel-item active">
                            <img class="artworkImage img-fluid d-block w-100" src={Aquarium} alt="First slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Fish Tank</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Ravine} alt="Second slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>A Ravine in the Earth a Mile Deep</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={BadGirl} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Bad Love</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={BigHead} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Big Head</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Blam} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Blam!</b></h5>
                            </div>

                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Blue} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5><b>Texas Bluebonnets</b></h5>
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