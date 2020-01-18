import React from 'react';

import about from '../../../../../assets/about.png';
import pattern from '../../../../../assets/pattern.png';

import "./about.styles.css";

const About=()=>{
    return(
        <div className="about">
            <div className="pattern">
                <img src={pattern} alt="pattern" />
            </div>
            <div className="content">
                <div className="left">
                    <img src={about} alt="about-section"/>
                </div>
                <div className="right">
                    <h1 className="togglecolortext">ABOUT US</h1>
                    <h2 className="togglecolortext">Boosts Your<br/>
                        Website Traffic!
                    </h2>
                    <h3 className="togglecolortext">
                    Adumn nec unum copiosae. Sea ex everti labores, ad<br/>
                    option iuvaret qui muva.
                    </h3>
                    <h3 className="togglecolortext">
                    Ea pro tibique comprehensam, sed ea verear numquam molestie.<br/>
                    Nam te omittam comprehensam. Ne nam nonumy putent fuisset,<br/>
                    </h3>
                    <a href="/about">
                        <div>
                            <h6>KNOW MORE</h6>
                            <i className="far fa-question-circle"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;