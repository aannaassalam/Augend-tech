import React from "react";

import "./services.styles.css";
import UserExperience from "./user-experience/userexperience.component";
import ProductDesign from "./product-design/productdesigncomponent";
import DigitalMarketing from "./digital-marketing/digitalmarketing.component";
import Branding from "./branding/branding.component";
import Development from "./development/development.component";
import AppDevelopment from "./appdevelopment/appdevelopment.component";
import Analysis from "./analysis/analysis.component";

class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: "option",
      activetab: "active",
      tab1: "active",
      tab2: "option",
      tab3: "option",
      tab4: "option",
      tab5: "option",
      tab6: "option",
      tab1detail: "option-detail-selected",
      tab2detail: "option-detail",
      tab3detail: "option-detail",
      tab4detail: "option-detail",
      tab5detail: "option-detail",
      tab6detail: "option-detail",
    };
  }
  handleShow1 = () => {
    if (this.state.tab1 === "option") {
      this.setState(() => ({
        tab1: "active",
        tab2: "option",
        tab3: "option",
        tab4: "option",
        tab5: "option",
        tab6: "option",
        tab1detail: "option-detail-selected",
        tab2detail: "option-detail",
        tab3detail: "option-detail",
        tab4detail: "option-detail",
        tab5detail: "option-detail",
        tab6detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  handleShow2 = () => {
    if (this.state.tab2 === "option") {
      this.setState(() => ({
        tab2: "active",
        tab1: "option",
        tab3: "option",
        tab4: "option",
        tab5: "option",
        tab6: "option",
        tab2detail: "option-detail-selected",
        tab1detail: "option-detail",
        tab3detail: "option-detail",
        tab4detail: "option-detail",
        tab5detail: "option-detail",
        tab6detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  handleShow3 = () => {
    if (this.state.tab3 === "option") {
      this.setState(() => ({
        tab3: "active",
        tab2: "option",
        tab1: "option",
        tab4: "option",
        tab5: "option",
        tab6: "option",
        tab3detail: "option-detail-selected",
        tab2detail: "option-detail",
        tab1detail: "option-detail",
        tab4detail: "option-detail",
        tab5detail: "option-detail",
        tab6detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  handleShow4 = () => {
    if (this.state.tab4 === "option") {
      this.setState(() => ({
        tab4: "active",
        tab2: "option",
        tab3: "option",
        tab1: "option",
        tab5: "option",
        tab6: "option",
        tab4detail: "option-detail-selected",
        tab2detail: "option-detail",
        tab3detail: "option-detail",
        tab1detail: "option-detail",
        tab5detail: "option-detail",
        tab6detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  handleShow5 = () => {
    if (this.state.tab5 === "option") {
      this.setState(() => ({
        tab5: "active",
        tab2: "option",
        tab3: "option",
        tab4: "option",
        tab1: "option",
        tab6: "option",
        tab5detail: "option-detail-selected",
        tab2detail: "option-detail",
        tab3detail: "option-detail",
        tab4detail: "option-detail",
        tab1detail: "option-detail",
        tab6detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  handleShow6 = () => {
    if (this.state.tab6 === "option") {
      this.setState(() => ({
        tab6: "active",
        tab2: "option",
        tab3: "option",
        tab4: "option",
        tab5: "option",
        tab1: "option",
        tab6detail: "option-detail-selected",
        tab2detail: "option-detail",
        tab3detail: "option-detail",
        tab4detail: "option-detail",
        tab5detail: "option-detail",
        tab1detail: "option-detail",
      }));
    }
    console.log(this.state);
  };
  render() {
    return (
      <div className="services">
        <div className="top">
          <h1>OUR FEATURES</h1>
          <h2>We always try to understand our customers expectation</h2>
          <div className="option-list">
            <div className={this.state.tab1} id="de" onClick={this.handleShow1}>
              <i className="flaticon-layout"></i>
              <h3>App Development</h3>
            </div>
            <div className={this.state.tab2} id="de" onClick={this.handleShow2}>
              <i className="flaticon-layout"></i>
              <h3>Web Development</h3>
            </div>
            <div className={this.state.tab5} id="dm" onClick={this.handleShow5}>
              <i className="flaticon-content"></i>
              <h3>Digital Marketing</h3>
            </div>
            <div className={this.state.tab6} id="br" onClick={this.handleShow6}>
              <i className="flaticon-spread"></i>
              <h3>Data Analytics</h3>
            </div>
            <div className={this.state.tab3} id="pd" onClick={this.handleShow3}>
              <i className="flaticon-design"></i>
              <h3>Product Design</h3>
            </div>
            <div className={this.state.tab4} id="ue" onClick={this.handleShow4}>
              <i className="flaticon-ambient"></i>
              <h3>Branding</h3>
            </div>
          </div>
        </div>
        <div className="down">
          <div className={this.state.tab1detail}>
            <AppDevelopment />
          </div>
          <div className={this.state.tab2detail}>
            <Development />
          </div>
          <div className={this.state.tab3detail}>
            <ProductDesign />
          </div>
          <div className={this.state.tab4detail}>
            <Branding />
          </div>
          <div className={this.state.tab5detail}>
            <DigitalMarketing />
          </div>
          <div className={this.state.tab6detail}>
            <Analysis />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
