import React from 'react';

import branding from '../../../../../../assets/branding.png';

import "./branding.styles.css";

const Branding = () => {
    return (
        <div className="brbox">
            <div className="right">
                <img src={branding} alt="branding" />
            </div>
            <div className="left">
                <h1>Your Desire Into A Brand</h1>
                <h2>Branding</h2>
                <h3>Crafting a brand identity for your business that will convey your intention, goals and all that you intend to do for your audience - embedded inside a single design - connecting your business with your customers.
                </h3>
                <div className="checkbox">
                    <div className="left">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Brand Recognise</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Brand Awareness</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Brand Advertisement</h4>
                        </div>
                    </div>
                    <div className="right">
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>High Security</h4>
                        </div>
                        <div className="check">
                            <i className="fas fa-check"></i>
                            <h4>Creative Approach</h4>
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

export default Branding;