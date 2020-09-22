import React from 'react';

import whychooseus from '../../../../../assets/whychooseus.png';
import pattern from '../../../../../assets/pattern.png'

import "./whychooseus.styles.css";

const WhyChooseUs = () => {
    return (
        <div className="whychooseus">
            <div className="pattern">
                <img src={pattern} alt="pattern" />
            </div>
            <div className="content">
                <div className="right">
                    <h1 className="togglecolortext">WHY CHOOSE US</h1>
                    <h2 className="togglecolortext">Outstanding<br />
                        Digital Experience
                    </h2>
                    <div className="checklist">
                        <i className="fas fa-check cl1"></i>
                        <h4>We work very hard to be as the supportive structure to our client's success.</h4>
                    </div>
                    <div className="checklist">
                        <i className="fas fa-check cl2"></i>
                        <h4>We dont force clients into solutions that works better for us.</h4>
                    </div>
                    <div className="checklist">
                        <i className="fas fa-check cl3"></i>
                        <h4>We dont build strategies without first understanding the target audiences.</h4>
                    </div>
                    {/* <a href="/about">
                        <div>
                            <h6>DISCOVER MORE</h6>
                            <i className="fas fa-binoculars"></i>
                        </div>
                    </a> */}
                </div>
                <div className="left">
                    <img src={whychooseus} alt="why-choose-us" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;