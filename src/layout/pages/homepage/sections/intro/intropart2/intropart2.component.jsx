import React from "react";

import intropart2 from "../../../../../../assets/intropart2.png";

import "./intropart2.styles.css";

const Intropart2 = () => {
  return (
    <div className="intropart2">
      <div className="left">
        <h2 className="togglecolortext">
          Boosts Your
          <br />
          <span>Website Traffic!</span>
        </h2>
        <h3 className="togglecolortext">
          We use creative designs paired with the use of
          <br />
          latest technologies that adhere to industry best practices.
        </h3>
        <div className="button-group">
          <a href="#contact-form">CONTACT US</a>
          <a
            href="https://youtu.be/retJL35WXpQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-play"></i>PLAY VIDEO
          </a>
        </div>
      </div>
      <div className="right">
        <img src={intropart2} alt="intro-section" />
      </div>
    </div>
  );
};

export default Intropart2;
