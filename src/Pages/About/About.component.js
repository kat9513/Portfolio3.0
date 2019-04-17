import React, { Component } from 'react';
const icon = require("../../Assets/Images/icon.jpg");

export default class Home extends Component {
    render() {
        return (
            <div>

                <h2>Meet Katie</h2>
                <div className="row justify-content-around">
                    <div className="img-responsive">
                        <img className="MyFace" src={icon} alt="myFace" />
                    </div>
                    <div className="About col-md-6">
                        <p>
                            <span>
                                Web developer and visual artist with a passion for shaping unique narratives and experiences.
                                <br></br>
                            </span>
                            <span>
                                I am a highly creative and driven individual dedicated to learning new skills and pushing for improvement.
                                In 2019 I completed SMU’s Coding Bootcamp where I developed skills in HTML, CSS, Javascript, jQuery, Bootstrap, NodeJS, Express, React, MySQL, and MongoDB.
                                In addition to my training in illustration and digital graphics, I am also an experienced content writer and customer service provider.
                                <br></br>
                            </span>
                            <span>
                                I am particularly interested in how technology is a fundamental aspect of our personal and professional lives, and how new tech (particularly augmented and virtual reality) impacts the ways we interact with and understand our world and each other on a daily basis.
                                <br></br>
                            </span>

                        </p>
                    </div>
                </div>
            </div>

        );
    }
}
