import React from "react";

import NavBar from "./navbar/navbar.component";
import Intro from "./sections/intro/intro.component";
import About from "./sections/about/about.component";
import Services from "./sections/services/services.component";
import WhyChooseUS from "./sections/why-choose-us/whychooseus.component";
import WorkProcess from "./sections/workprocess/workprocess.component";
import Technologies from "./sections/technologies/technologies.component";
import ProjectPreview from "./sections/project-gallery/projectpreview.component";
import BlogPreview from "./sections/blog-preview/blogpreview.component";
import ContactForm from "./sections/contact-form/contactform.component";
import Modal from "../../components/modal/modal";

import "./homepage.styles.css";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      modal: false,
    };
  }
  componentDidMount() {
    // document.querySelector('.navbar').style.display='none';
  }
  componentWillUnmount() {
    // document.querySelector('.navbar').style.display='flex';
  }

  render() {
    return (
      <div>
        <div className="load">{/* <Loader/> */}</div>
        <div className="homepage">
          <NavBar />
          <Intro />
          <About />
          <Services />
          <WhyChooseUS />
          <WorkProcess />
          <Technologies />
          <ProjectPreview />
          <div className="make-payment-container">
            <div className="make-payment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                deleniti!
              </p>
              <button
                type="button"
                onClick={() => {
                  console.log("noticed");
                  this.setState({ modal: true });
                }}
              >
                <p>Make a payment</p>
                <i className="fas fa-credit-card"></i>
              </button>
            </div>
            {this.state.modal ? (
              <Modal
                close={() => {
                  console.log("true");
                  this.setState({ modal: false });
                }}
              />
            ) : null}
          </div>
          <BlogPreview />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default HomePage;
