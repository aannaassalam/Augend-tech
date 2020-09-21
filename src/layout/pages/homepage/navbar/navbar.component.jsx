import React from "react";
import { connect } from "react-redux";
import logo from "../../../../assets/logo.png";
import SignOut from "./signOut";

import "./navbar.styles.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: false,
    };
  }

  render() {
    const { auth } = this.props;
    return (
      <nav>
        <div className="navbar2">
          <div className="og">
            <div className="og-logo">
              <img src={logo} alt="brand-logo" />
            </div>
            <div className="og-name">
              <h1 className="togglecolortext">AUGEND TECH</h1>
            </div>
          </div>
          <div
            className={
              this.state.hamburgerActive ? "active-hamburger" : "hamburger"
            }
            onClick={() =>
              this.setState({ hamburgerActive: !this.state.hamburgerActive })
            }
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div
            className={
              this.state.hamburgerActive ? "full-menu-show" : "full-menu"
            }
          >
            <div className="full-menu-context">
              <div className="full-menu-context-main">
                <ul>
                  <li>
                    <a
                      className="primary-menu"
                      href="/services/web-development"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="primary-menu"
                      href="/services/digital-marketing"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      className="primary-menu"
                      href="/services/app-development"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a className="secondary-menu" href="/works">
                      Our Works
                    </a>
                  </li>
                  {/* <li>
                    <a className="secondary-menu" href="/blog">
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a className="secondary-menu" href="#section-8">
                      Seo-Analysis
                    </a>
                  </li>
                  {!auth.uid ? null : <SignOut />}
                </ul>
              </div>
              <div className="full-menu-context-connect">
                Lets do something brilliant together
                <div className="get-in-touch">
                  <a className="get-in-touch-btn" href="#section-8">
                    Get a Quote
                  </a>
                </div>
              </div>
              <div className="full-menu-context-social">
                <a
                  className="social-icon ln"
                  href="https://www.linkedin.com/in/flappify/"
                >
                  <i className="fab fa-linkedin"></i>LinkedIn
                </a>
                <a
                  className="social-icon ig"
                  href="https://www.instagram.com/flappify/"
                >
                  <i className="fab fa-instagram"></i>Instagram
                </a>
                <a
                  className="social-icon fb"
                  href="https://www.facebook.com/flappify/"
                >
                  <i className="fab fa-facebook-square"></i>Facebook
                </a>
                <a className="social-icon wa" href="https://wa.me/917044217217">
                  <i className="fab fa-whatsapp-square"></i>Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className="menu" id="menu">
            <div className="menu-list">
              <ul>
                <li className="primary-menu">
                  <a href="/" className="togglecolortext">
                    Home
                  </a>
                </li>
                {/* <li className="primary-menu drop-menu">
                        <div className="togglecolortext drop-button">Services<i className="fas fa-angle-down"></i></div>
                        <div className="drop-down-box">
                          <ul className="sub-menu-list">
                            <li className="sub-menu"><a href="/services/web-development">Web Development</a></li>
                            <li className="sub-menu"><a href="/services/app-development">App Development</a></li>
                            <li className="sub-menu"><a href="/services/digital-marketing">Digital Marketing</a></li>
                          </ul>
                        </div>
                      </li> */}
                {/* <li className="primary-menu">
                  <a className="togglecolortext" href="/blog">
                    Blog
                  </a>
                </li> */}
                <li className="primary-menu">
                  <a className="togglecolortext" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="primary-menu">
                  <a href="#contact-form" class="contact-btn">
                    CONTACT US
                  </a>
                </li>
                {/* <li className="primary-menu"><a href="/contact" className="create">Get a Quote</a></li> */}
              </ul>
              {/* {(!auth.uid)? null:<SignOut/> } */}
            </div>
          </div>
        </div>
        {this.state.hamburgerActive
          ? document.getElementsByTagName("body")[0].classList.add("scroll")
          : document.getElementsByTagName("body")[0].classList.remove("scroll")}
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(NavBar);
