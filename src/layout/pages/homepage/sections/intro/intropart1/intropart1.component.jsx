import React from 'react';

import intropart1 from '../../../../../../assets/intropart1.png';

import "./intropart1.styles.css";

const Intropart1=()=>{
    return(
        <div className="intropart1">
            <div className="left">
                <h1 className="togglecolortext">WELCOME</h1>
                <h2 className="togglecolortext">Maximize<br/>
                    Your <span>Visibility</span>
                </h2>
                <h3 className="togglecolortext">
                    Ensuring the best return on investment<br/>
                    for your bespoke SEO campaign requirement.
                </h3>
                <div className="button-group">
                    <a href="#contact-form">CONTACT US</a>
                    <a href="https://youtu.be/retJL35WXpQ" target="_blank" rel="noopener noreferrer"><i className="fas fa-play"></i>PLAY VIDEO</a>
                </div>
            </div>
            <div className="right">
                <img src={intropart1} alt="intro-section"/>
            </div>
        </div>
    )
}

export default Intropart1;