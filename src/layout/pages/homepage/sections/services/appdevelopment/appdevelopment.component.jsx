import React from 'react';

import development from '../../../../../../assets/development.png';

import "./development.styles.css";

const AppDevelopment = () => {
    return (
        <div className="debox">
            <div className="left">
                <h1>Desire And Its Done</h1>
                <h2>App Development</h2>
                <h3>
                    Intuitive designs combined with compelling user experience are what makes our apps stand ahead in the digital age. Seamless experience driven by international standards in collaboration with out-of-the-box ideas is the specialty of Trian helping your business accomplish its goals.
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

export default AppDevelopment;