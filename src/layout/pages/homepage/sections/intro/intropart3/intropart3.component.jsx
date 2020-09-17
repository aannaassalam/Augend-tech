import React from 'react';

import intropart3 from '../../../../../../assets/intropart3.png';

import "./intropart3.styles.css";

const Intropart3=()=>{
    return(
        <div className="intropart1">
            <div className="left">
                <h2 className="togglecolortext">Maximize<br/>
                    Your <span>Returns</span>
                </h2>
                <h3 className="togglecolortext">
                    Ensuring the best return on investment<br/>
                    through your bespoke apps and websites.
                </h3>
                <div className="button-group">
                    <a href="#contact-form">CONTACT US</a>
                    <a href="https://youtu.be/retJL35WXpQ" target="_blank" rel="noopener noreferrer"><i className="fas fa-play"></i>PLAY VIDEO</a>
                </div>
            </div>
            <div className="right">
                <img src={intropart3} alt="intro-section"/>
            </div>
        </div>
    )
}

export default Intropart3;