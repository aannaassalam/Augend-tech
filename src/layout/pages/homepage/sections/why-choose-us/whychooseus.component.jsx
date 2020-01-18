import React from 'react';

import whychooseus from '../../../../../assets/whychooseus.png';
import pattern from '../../../../../assets/pattern.png'

import "./whychooseus.styles.css";

const WhyChooseUs=()=>{
    return(
        <div className="whychooseus">
            <div className="pattern">
                <img src={pattern} alt="pattern" />
            </div>
            <div className="content">
                <div className="right">
                    <h1 className="togglecolortext">WHY CHOOSE US</h1>
                    <h2 className="togglecolortext">Outstanding<br/>
                        Digital Experience
                    </h2>
                    <h3 className="togglecolortext">
                    Adumn nec unum copiosae. Sea ex everti labores, ad<br/>
                    option iuvaret qui muva.
                    </h3>
                    <div className="checklist">
                        <i className="fas fa-check cl1"></i>
                        <h4>For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow.</h4>
                    </div>
                    <div className="checklist">
                        <i className="fas fa-check cl2"></i>
                        <h4>Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget.</h4>
                    </div>
                    <div className="checklist">
                        <i className="fas fa-check cl3"></i>
                        <h4>Lorem ipsum dolor sit amet, vix an natum labitur eleif, mel amet laoreet prois menandri.</h4>
                    </div>
                    <a href="/about">
                        <div>
                            <h6>DISCOVER MORE</h6>
                            <i className="fas fa-binoculars"></i>
                        </div>
                    </a>
                </div>
                <div className="left">
                    <img src={whychooseus} alt="why-choose-us"/>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;