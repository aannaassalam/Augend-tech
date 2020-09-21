import React from 'react';

import about from '../../../../../assets/about.png';
import pattern from '../../../../../assets/pattern.png';

import "./about.styles.css";

const About = () => {
    return (
        <div className="about">
            <div className="pattern">
                <img src={pattern} alt="pattern" />
            </div>
            <div className="content">
                <div className="left">
                    <img src={about} alt="about-section" />
                </div>
                <div className="right">
                    <h1 className="togglecolortext">ABOUT US</h1>
                    <h2 className="togglecolortext">Boosts Your<br />
                        Website Traffic!
                    </h2>
                    <h3 className="togglecolortext">
                        Augend Tech aims to be a leading web development and data analytics agency in the nation. With a team of brilliant web designers, we at Augend Tech aim to help to promote the business of our customers through digital means.<br />
                    </h3>
                    <h3 className="togglecolortext">
                        The company has already achieved many goals and is working tirelessly to be a leading name in the global IT and data analytics industry. Our aim is providing the best services to our clients, be it website designing, app development or data analytics. Our team strive to deliver the highest quality products that benefit the client's business. We rate our success by the satisfaction of our clients.
                    </h3>
                    {/* <a href="/about">
                        <div>
                            <h6>KNOW MORE</h6>
                            <i className="far fa-question-circle"></i>
                        </div>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default About;