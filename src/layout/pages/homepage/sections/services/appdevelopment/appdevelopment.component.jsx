import React from 'react';

import development from '../../../../../../assets/development.png';

import "./development.styles.css";

const AppDevelopment = () => {
    return (
        <div className="debox">
            <div className="left">
                <h1>Desire it And Its Done</h1>
                <h2>App Development</h2>
                <h3>
                    Apps are what we use to scale businesses to new heights. Through modern native app development technologies we offer highly optimised apps that are snappy and adhering to modern standards.
                </h3>
                <div className="checkbox">
                    <div className="left">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Intuitive UI</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Blazing Performance</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Fluid User Experience</h4>
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
                            <h4>Scalable Architecture</h4>
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

export default AppDevelopment;