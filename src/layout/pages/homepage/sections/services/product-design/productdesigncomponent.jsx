import React from 'react';

import productdesign from '../../../../../../assets/1447 .png';

import "./productdesign.styles.css";

const ProductDesign = () => {
    return (
        <div className="pdbox">
            <div className="right">
                <img src={productdesign} alt="product-design" />
            </div>
            <div className="left">
                <h1>Define Your Desire</h1>
                <h2>Product Design</h2>
                <h3>Enterprise-wide solutions transforming highly complex business requirements into simplified user interfaces bringing about a widespread user engagement is what we promise as part of our UI solutions.
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

export default ProductDesign;