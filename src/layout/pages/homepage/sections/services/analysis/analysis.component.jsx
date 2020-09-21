import React from 'react';

import analysis from '../../../../../../assets/analysis.png';

import "./analysis.styles.css";

const Analysis = () => {
    return (
        <div className="anbox">
            <div className="right">
                <img src={analysis} alt="analysis" />
            </div>
            <div className="left">
                <h1>Always Stay Ahead</h1>
                <h2>Analysis</h2>
                <h3>We offer predictive modeling services that guide you towards the underlying profitable opportunity segments. In addition, they help uncover existing risks well in time and prepare go-to market strategies.
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
        </div>
    )
}

export default Analysis;