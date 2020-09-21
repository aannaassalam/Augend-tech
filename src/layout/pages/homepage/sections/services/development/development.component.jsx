import React from 'react';

import development from '../../../../../../assets/development.png';

import "./development.styles.css";

const Development = () => {
    return (
        <div className="debox">
            <div className="left">
                <h1>Desire And Its Done</h1>
                <h2>Web Development</h2>
                <h3>Cross-browser and cross-device compatibility driven by mobile responsiveness all under one roof Starting from basic website designs, including CMS and online store building to highly complex business website apps and design solutions, we will customize the best of web development solutions for you.
                </h3>
                <div className="checkbox">
                    <div className="left">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>User Friendly</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Super Responsive</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Optimal Choice</h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>High Security</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Creative Layout</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Great Advices</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={development} alt="development" />
            </div>
        </div>
    )
}

export default Development;