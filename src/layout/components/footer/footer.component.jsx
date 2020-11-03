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
                                We focus on your growth needs 
                                and analyse requirement to 
                                deliver a product that improves
                                your business and grows your return.
                            </h2>
                        </div>
                    </div>
                    <div className="part part2">
                        <div className="top">
                            <h3>Contact</h3>
                        </div>
                        <div className="bottom">
                            <a href="tel:+1-9167501833"><i className="fas fa-mobile"></i>(US) +1 916 750 1833</a>
                            <a href="tel:+91-9874174414"><i className="fas fa-mobile"></i>(IND) + 91 987 417 4414</a>
                            <a href="mailto:contact@augendtech.com?subject=Happy To Assist"><i className="fas fa-envelope-open"></i>contact@augendtech.com</a>
                        </div>
                    </div>
                    <div className="social">
                            <a href="https://www.facebook.com/augendtech" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/AugendTech" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://wa.me/919874174414" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/augendtech/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/augendtech" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
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