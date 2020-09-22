import React from "react";
import "./modal.css";
import firebase from "firebase";
import razorpay from "./assets/1896px-Razorpay_logo.svg.png";
import Lottie from 'lottie-react-web';
import tick from "./assets/tick.json";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { setTimeout } from "core-js";

export default class Modal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      name: "",
      phone: "",
      email: "",
      projectName: "",
      error: " ",
      tab: "info",
      subTab: "pay"
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDatabase(payment){
    firebase.firestore().collection("payments").add({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      paymentId: payment.paymentID,
      amount: this.state.amount,
      projectName: this.state.projectName,
    });
  }

  handleRazorpay() {
    const options = {
      key: "rzp_test_dxlgLQGi0JrIZp",
      name: "Augend Tech",
      description: "Make a payment for, " + this.state.projectName,
      amount: this.state.amount,
      handler: async (response) => {
        try {
          firebase.firestore().collection("payments").add({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            paymentId: response.razorpay_payment_id,
            amount: this.state.amount,
            projectName: this.state.projectName,
          });
          this.props.close();
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        name: this.state.name,
        email: this.state.email,
        contact: this.state.phone,
      },
      theme: {
        color: "#2D499B",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  handlePay() {
    if (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.projectName.length > 0 &&
      this.state.amount.length > 0
    ) {
      this.setState({
        error: "",
        tab: "payment",
      });
    } else {
      this.setState({
        error: "Please fill in all the fields",
      });
      setTimeout(() => {
        this.setState({
          error: " ",
        });
      }, 3000);
    }
  }

  render() {
    const amount=parseInt(this.state.amount, 10);
    const onSuccess = (payment) => {
        // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                this.handleDatabase(payment);
                this.setState({
                  subTab: "success"
                })
                setTimeout(() => {
                  this.props.close();
                  this.setState({
                    subTab: "pay"
                  })
                }, 3000);
                
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }
    const onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }
    let env = 'sandbox'; // you can set here to 'production' for production
    let currency = 'INR'; // or you can set this value from your props or state
    let total = amount; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
        sandbox:'Ac-IsJnUj4a2f-reCxrYyuZgxxu0RB1IqAgQt-jjYoRzcYMV3SLWC85gf8ekhfJaYmIGD6ghiHRIQogd',
        // production: 'AaK6PSCmjFHprihIkeblnScs6KHN30mrd56BScD0jRvFHcyZrAfcdaytDDTDMYh7oN2HExaPjmioGCRt',
    }

    return (
      <div className="modal-blank">
        <div className="modal-container">
          <div className="modal-head">
            <h4>Make a Payment</h4>
            <i className="fas fa-times" onClick={() => this.props.close()}></i>
          </div>
          {this.state.tab === "info" ? (
            <>
              <div className="modal-input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  name="amount"
                  placeholder="Amount"
                  onChange={this.handleChange}
                />
              </div>
              <p className="error">{this.state.error}</p>
              <button
                type="button"
                onClick={() => {
                  this.handlePay();
                }}
              >
                Pay
              </button>
            </>
          ) : this.state.subTab === "pay" ? 
          (
            <div className="payment-container">
              <h3>Choose a method</h3>
              <div
                className="paypal"
              >
                <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel}/>
              </div>
              <div
                className="razorpay"
                onClick={() => {
                  this.handleRazorpay();
                }}
              >
                <img src={razorpay} alt="Razorpay" />
              </div>
            </div>
          ): 
          <div className="success">
            <div className="animation">
                <Lottie options={{loop: true,
                autoplay: true,
                animationData: tick}}
                />
            </div>
            <div className="text">
                Your transaction was Successful.
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}
