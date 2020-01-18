import React from 'react';

import language1 from '../../../../../assets/language1.png';
import language2 from '../../../../../assets/language2.png';
import language3 from '../../../../../assets/language3.png';
import language4 from '../../../../../assets/language4.png';
import language5 from '../../../../../assets/language5.png';
import language6 from '../../../../../assets/language6.png';

import './technologies.styles.css';

const Technologies = () =>{
    return(
        <div className="technologies">
            <div className="top">
                <h1>We Craft with the most popuplar Languages</h1>
                <h2>Knowledge is an accumulation of facts, principles and methods within the mind.<br/>
                    You gain knowledge through paying attention, experience and being taught.<br/>
                    Gaining knowledge is learning.
                </h2>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="cube">
                        <img src={language1} alt="coding-language"/>
                        <img src={language2} alt="coding-language"/>
                        <img src={language3} alt="coding-language"/>
                        <img src={language4} alt="coding-language"/>
                        <img src={language5} alt="coding-language"/>
                        <img src={language6} alt="coding-language"/>
                    </div>
                </div>
                <div className="right">
                    <div className="language-list">
                        <div className="language"> 
                            <img src={language1} alt="coding-langauge"/>
                            <h3>React</h3>
                        </div>
                        <div className="language">
                            <img src={language2} alt="coding-langauge"/>
                            <h3>Laravel</h3>
                        </div>
                        <div className="language">
                            <img src={language3} alt="coding-langauge"/>
                            <h3>Flutter</h3>
                        </div>
                    </div>
                    <div className="language-list">
                        <div className="language">
                            <img src={language4} alt="coding-langauge"/>
                            <h3>WordPress</h3>
                        </div>
                        <div className="language">
                            <img src={language5} alt="coding-langauge"/>
                            <h3>Mongo</h3>
                        </div>
                        <div className="language">
                            <img src={language6} alt="coding-langauge"/>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;