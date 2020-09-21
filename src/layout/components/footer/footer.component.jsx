import React from "react";

import logo from '../../../assets/logo.png';

import './footer.styles.css';

class Footer extends React.Component {
    state = {
        currentyear: ''
    }
    componentDidMount() {
        var year = new Date().getFullYear();
        this.setState({ currentyear: year });
    }
    render() {
        return (
            <div className="footer">
                <div className="top-one">
                    <div className="part part1">
                        <div className="brand">
                            <img src={logo} alt="logo" />
                            <h1>AUGEND TECH</h1>
                        </div>
                        <div className="desc">
                            <h2>
                                We focus on the needs of small
                                to middle market businesses to
                                improve and grow their return.
                            </h2>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/flappify/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/Flappify1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://wa.me/917044217217" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/flappify/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/flappify/about/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="part part2">
                        <div className="top">
                            <h3>Contact</h3>
                        </div>
                        <div className="bottom">
                            <a href="tel:+91-7044217217"><i className="fas fa-mobile"></i>7044217217</a>
                            <a href="mailto:creative@flappify.com?subject=NeedAssistance"><i className="fas fa-envelope-open"></i>creative@flappify.com</a>
                        </div>
                    </div>
                    <div className="part part3">
                        <div className="top">
                            <h3>Services</h3>
                        </div>
                        <div className="bottom">
                            <a href="#">Development</a>
                            <a href="#">Marketing</a>
                            <a href="#">Branding</a>
                            <a href="#">Designing</a>
                        </div>
                    </div>
                    <div className="part part4">
                        <div className="top">
                            <h3>Community</h3>
                        </div>
                        <div className="bottom">
                            <a href="#">Seo Analysis</a>
                            {/* <a href="/blog">Blog</a> */}
                            <a href="#">Project Gallery</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h4>&copy; {this.state.currentyear} - AUGEND TECH. All Rights Reserved.</h4>
                </div>
            </div>
        )
    }
}

export default Footer;