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
                                I am a highly creative and driven individual dedicated to learning new skills and advancing towards constant improvement and innovation. In 2019 I completed SMU’s Coding Bootcamp where I developed skills in HTML, CSS, Javascript, jQuery, Bootstrap, NodeJS, Express, React, MySQL, and MongoDB. In addition to my training in illustration and digital graphics, I am also an experienced content writer and customer service provider. 
                                <br/>
                                </p>
                            </span>
                            <span>
                                <p className="aboutContent">
                                I am particularly interested in how technology is a fundamental aspect of our personal and professional lives, and how it impacts the ways we interact with and understand our world and each other on a daily basis. Based on my experience, professional drive, and ability to develop functional code/websites I look forward to making an impact and help grow a company.
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
