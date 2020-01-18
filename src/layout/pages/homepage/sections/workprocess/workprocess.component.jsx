import React from 'react';

import workprocess1 from '../../../../../assets/workprocess1.png';
import workprocess2 from '../../../../../assets/workprocess2.png';
import workprocess3 from '../../../../../assets/workprocess3.png';
import workprocess4 from '../../../../../assets/workprocess4.png';
import workprocess5 from '../../../../../assets/workprocess5.png';

import processarrow1 from '../../../../../assets/processarrow1.png';
import processarrow2 from '../../../../../assets/processarrow2.png';
import processarrow3 from '../../../../../assets/processarrow3.png';
import processarrow4 from '../../../../../assets/processarrow4.png';

import './workprocess.styles.css';
const WorkProcess = () =>{
    return(
        <div className="workprocess">
            <h1>OUR WORK PROCESS</h1>
            <div className="part part1">
                <div className="left">
                    <img src={workprocess1} alt="work-process"/>
                </div>
                <div className="right">
                    <h2>01</h2>
                    <div className="content">
                        <h3>Meeting With The Customer</h3>
                        <h4>The first meeting is very important to get acquainted and discuss the<br/>main ideas of the project.</h4>
                    </div>
                </div>
                <div className="arrow arrow1">
                    <img src={processarrow1} alt="arrow"/>
                </div>
            </div>
            <div className="part part2">
                <div className="right">
                    <h2>02</h2>
                    <div className="content">
                        <h3>We Consider And Analyze The Work Plan</h3>
                        <h4>When we understand the main ideas, we proceed to<br/>discuss the work plan and analyze it.</h4>
                    </div>
                </div>
                <div className="left">
                    <img src={workprocess2} alt="work-process"/>
                </div>
                <div className="arrow arrow2">
                    <img src={processarrow2} alt="arrow"/>
                </div>
            </div>
            <div className="part part3">
                <div className="left">
                    <img src={workprocess3} alt="work-process"/>
                </div>
                <div className="right">
                    <h2>03</h2>
                    <div className="content">
                        <h3>Work Hard On The Project</h3>
                        <h4>Our professional team starts to work on your project and embody all<br/>details of the initial concept.</h4>
                    </div>
                </div>
                <div className="arrow arrow3">
                    <img src={processarrow3} alt="arrow"/>
                </div>
            </div>
            <div className="part part4">
                <div className="right">
                    <h2>04</h2>
                    <div className="content">
                        <h3>Once Again We Analyze And Check<br/>Everything</h3>
                        <h4>We meet, analyze and check the work we done on the project and<br/>make any necessary changes.</h4>
                    </div>
                </div>
                <div className="left">
                    <img src={workprocess4} alt="work-process"/>
                </div>
                <div className="arrow arrow4">
                    <img src={processarrow4} alt="arrow"/>
                </div>
            </div>
            <div className="part part5">
                <div className="left">
                    <img src={workprocess5} alt="work-process"/>
                </div>
                <div className="right">
                    <h2>05</h2>
                    <div className="content">
                        <h3>We Finish The Project And Send It To The<br/>Customer</h3>
                        <h4>The project is completed and we give it to our customer. We also ask<br/>for customer’s feedback.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;