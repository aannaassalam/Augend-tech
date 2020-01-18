import React from 'react';

import productdesign from '../../../../../../assets/productdesign.png';

import "./productdesign.styles.css";

const ProductDesign = () =>{
    return(
        <div className="pdbox">
            <div className="right">
                <img src={productdesign} alt="product-design"/>
            </div>
            <div className="left">
                <h1>Define Your Desire</h1>
                <h2>Product Design</h2>
                <h3>We believe brand interaction is key in communication. Real innovations<br/>
                    and a positive customer experience are the heart of successful<br/>
                    communication. No fake products and services. The customer is king,<br/>
                    their lives and needs are the inspiration.
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