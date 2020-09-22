import React from "react";

import intropart1 from "../../../../../../assets/intropart1.png";

import "./intropart1.styles.css";

const Intropart1 = () => {
  return (
    <div className="intropart1">
      <div className="left">
        <h2 className="togglecolortext">
          Doing
          <br />
          the <span>right thing</span>
        </h2>
        <h3 className="togglecolortext">
          We offer app and web development services<br/>
          that meet your growth requirements.
        </h3>
        <div className="button-group">
          <a href="#contact-form">CONTACT US</a>
          <a
            href="https://youtu.be/Zmht7CQT03M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-play"></i>PLAY VIDEO
          </a>
        </div>
      </div>
      <div className="right">
        <img src={intropart1} alt="intro-section" />
      </div>
    </div>
  );
};

export default Intropart1;
