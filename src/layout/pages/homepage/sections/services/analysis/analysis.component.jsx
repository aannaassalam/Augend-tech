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
                <h2>Data Analysis and Visualisation</h2>
                <h3>Customized Data Visualization solution captures the steps from collection of data, data enrichment and cleansing and finally presenting it on the reporting layer.
                </h3>
                <div className="checkbox">
                    <div className="left">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data Integrity</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data warehousing</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data Cleaning</h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data Security</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data Acquisition</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Data Modelling</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis;