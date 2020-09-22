import React from 'react';
import {connect} from 'react-redux';
import logo from '../../../assets/logo.png';
import SignOut from './signOut';

import "./navbar.styles.css";

class NavBar extends React.Component{
  handleHamburger=()=>{
    document.querySelector('.full-menu').classList.toggle('full-menu-show');
    document.querySelector('.hamburger').classList.toggle('active-hamburger')
    console.log('clicked');
  }
  render(){
    const {auth}=this.props;
    return(
      <nav>
        <div className="navbar">
              <div className="og">
                  <div className="og-logo">
                    <img src={logo} alt="brand-logo"/>
                  </div>
                  <div className="og-name">
                    <h1 className="togglecolortext">AUGEND TECH</h1>
                  </div>
              </div>
              <div className="hamburger" onClick={this.handleHamburger}>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className='full-menu'>
                  <div className="full-menu-context">
                          <div className="full-menu-context-main">
                                      <ul>
                                          <li><a className="primary-menu" href="#section-3">Web Development</a></li>
                                          <li><a className="primary-menu" href="#section-5">Digital Marketing</a></li>
                                          <li><a className="primary-menu" href="#section-4">Technologies</a></li>
                                          <li><a className="secondary-menu" href="#section-7">Portfolio</a></li>
                                          <li><a className="secondary-menu" href="#section-2">About</a></li>
                                          <li><a className="secondary-menu" href="#section-8">Contact</a></li>
                                      </ul>
                          </div>
                          <div className="full-menu-context-connect">
                              Lets do something brilliant together
                              <div className="get-in-touch">
                                  <a className="get-in-touch-btn" href="#section-8">GET IN TOUCH</a>
                              </div>
                          </div>
                          <div className="full-menu-context-social">
                              <a className="social-icon ln" href="https://www.linkedin.com/company/augendtech"><i className="fab fa-linkedin"></i>LinkedIn</a>
                              <a className="social-icon ig" href="https://www.instagram.com/augendtech/"><i className="fab fa-instagram"></i>Instagram</a>
                              <a className="social-icon fb" href="https://www.facebook.com/augendtech"><i className="fab fa-facebook-square"></i>Facebook</a>
                              <a className="social-icon wa" href="https://wa.me/919874174414"><i className="fab fa-whatsapp-square"></i>Whatsapp</a>
                          </div>
                  </div>
              </div>
              <div className="menu" id='menu'>
                  <div className="menu-list">
                    <ul>
                      <li className="primary-menu"><a href="/" className="togglecolortext">Home</a></li>
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
                      <li className="primary-menu"><a className="togglecolortext" href="/blog" >Blog</a></li>
                      <li className="primary-menu"><a className="togglecolortext" href="/works" >Portfolio</a></li>
                      {/* <li className="primary-menu"><a href="/contact" className="create">Get a Quote</a></li> */}
                    </ul>
                    {/* {(!auth.uid)? null:<SignOut/> } */}
                  </div>
              </div>
            </div>
      </nav>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(NavBar);