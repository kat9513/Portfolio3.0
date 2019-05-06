import React, { Component } from 'react';
const icon = require("../../Assets/Images/icon.jpg");
const resume = require("../../Assets/Images/Resume.pdf");

export default class Home extends Component {
    render() {
        return (
            <div>

                <h2 className="pageHeading">Meet Katie</h2>
                <div className="row justify-content-around">
                    <div className="img-responsive">
                        <img className="MyFace" src={icon} alt="myFace" />
                    </div>
                    <div className="About col-md-6">
                        <p>
                            <span>
                                <p className="aboutContent">
                                    <h4>Web Developer and Visual Artist with a passion for shaping unique narratives and experiences.</h4>
                                    <br/>
                                </p>
                            </span>
                            <span>
                                <p className="aboutContent">
                                    Highly creative and driven individual dedicated to learning new skills and pushing for improvement.
                                    Completed SMU’s Coding Bootcamp in 2019 and developed skills in HTML, CSS, Javascript, jQuery, Bootstrap, NodeJS, Express, React, MySQL, and MongoDB.
                                    In addition to training in illustration and digital graphics, also has experience as a Content Writer and Customer Service Provider.
                                <br/>
                                </p>
                            </span>
                            <span>
                                <p className="aboutContent">
                                    Interested in Art and Technology. Particularly how Tech impacts communication and the way we interact with our environment,
                                    and the potential boundaries Augmented and Virtual Reality can push in shaping Stories, Narratives, and Artworks.
                                    </p>
                                <br/>
                                <p class="text-center">
                                    <a class="links" href={resume} target="_blank">View Resume</a>
                                </p>
                            </span>

                        </p>
                    </div>
                </div>
            </div>

        );
    }
}
