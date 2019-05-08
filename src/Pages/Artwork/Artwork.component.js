import React, { Component } from 'react';

const Aquarium = require("../../Assets/Images/ArtWork/Aquarium2.jpg")
const Ravine = require("../../Assets/Images/ArtWork/ARavineInTheEarth2.jpg")
const BadGirl = require("../../Assets/Images/ArtWork/BadGirl2.jpg")
const BigHead = require("../../Assets/Images/ArtWork/BigHead2.jpg")
const Blam = require("../../Assets/Images/ArtWork/blam(1).png")
const Blue = require("../../Assets/Images/ArtWork/BlueBonnet2.jpg")
const Bouqet = require("../../Assets/Images/ArtWork/Bouqet2.jpg")
const Cartoon = require("../../Assets/Images/ArtWork/CartoonStudy2.jpg")
const frog = require("../../Assets/Images/ArtWork/deadfrogg2.jpg")
const flowers = require("../../Assets/Images/ArtWork/FlowersMAC2.jpg")
const FlutterBy = require("../../Assets/Images/ArtWork/FlutterBy2.jpg")
const Hibiscus = require("../../Assets/Images/ArtWork/Hibiscus2.jpg")
const love = require("../../Assets/Images/ArtWork/LoveDroubt2.jpg")
const marlboro = require("../../Assets/Images/ArtWork/marlboro.jpg")

export default class Artwork extends Component {
    render() {
        return (
            <div>
                <h2 className="pageHeading">Artwork</h2>
                <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
                    <ol class="carousel-indicators artIndicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="container carousel-item active">
                            <img class="artworkImage img-fluid d-block w-100" src={Aquarium} alt="First slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Fish Tank</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Ravine} alt="Second slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>In the Earth</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={BadGirl} alt="Third slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Bad Love</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={BigHead} alt="Fourth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Big Head</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Blam} alt="Fifth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Blam!</b></h5>
                            </div>

                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Blue} alt="Sixth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Texas Bluebonnets</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Bouqet} alt="Seventh slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Bouquet</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Cartoon} alt="Eighth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Cartoon Study</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={frog} alt="Ninth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>El Chupacabra</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={flowers} alt="Tenth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Flower Study</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={FlutterBy} alt="Eleventh slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Flutter By</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={Hibiscus} alt="Twelfth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Hibiscus</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={love} alt="Thirteenth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Love Drought</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={marlboro} alt="Fourteenth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Marlboro</b></h5>
                            </div>
                        </div>
                        <div class="container carousel-item">
                            <img class="artworkImage img-fluid d-block w-100" src={marlboro} alt="Fourteenth slide" />
                            <div class="portfolioContent text-center">
                                <h5 class="artTitle"><b>Marlboro</b></h5>
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
                <div class="col-md-8 offset-md-2">
                    <p class="text-center aboutContent">
                        I obtained my Bachelor's degree in Art from Austin College in Sherman, TX in 2017.
                            During my senior year, I had the opportunity to study Art and the history of the Renaissance at Florence University of Art in Italy. It was during my time there that I became increasingly interested
                            in conceptual and contemporary artworks, and the interplay between art and technology in defining trends and taste.
                    </p>
                </div>
                <div class="text-center">
                    <a class="instaLink" href="https://www.instagram.com/katie.higgins/" target="_blank">Check out more of my work on Instagram!</a>
                </div>
            </div>
        )
    }
}