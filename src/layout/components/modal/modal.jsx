import React from "react";
import "./modal.css";
import firebase from "firebase";
import razorpay from "./assets/1896px-Razorpay_logo.svg.png";
import paypal from "./assets/paypal.png";
import PaypalExpressBtn from "react-paypal-express-checkout";

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
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlePaypal() {
    // window.paypal
    //   .Buttons({
    //     createOrder: (data, actions, err) => {
    //       return actions.order.create({
    //         intent: "CAPTURE",
    //         purchase_units: [
    //           {
    //             description: "Cool looking table",
    //             amount: {
    //               currency_code: "USD",
    //               value: 650.0,
    //             },
    //           },
    //         ],
    //       });
    //     },
    //     onApprove: async (data, actions) => {
    //       const order = await actions.order.capture();
    //       console.log(order);
    //     },
    //     onError: (err) => {
    //       console.log(err);
    //     },
    //   })
      // .render(paypal.current);

  //   var paypal = require("paypal-rest-sdk");

  //   paypal.configure({
  //     mode: "sandbox", // Sandbox or live
  //     client_id:
  //       "AbNa-UqBHsUz0mP5b2jrPCdyZcWyc1Z2YtnoNo46BPNXaRUNB6D6PDxCZa8LUkI7Q4YJKpWDAz9pLpSF",
  //     client_secret:
  //       "EIfhGapOaeubNPp2UtX36FprG-9FRmrMsiULvUwIFON_iDg1o00SlNK07KoywGnE0GZwElJ-V1Pn39wN",
  //   });

  //   var create_payment_json = {
  //     "intent": "CAPTURE",
  //     "payer": {
  //         "payment_method": "paypal"
  //     },
  //     "redirect_urls": {
  //         "return_url": "http://return.url",
  //         "cancel_url": "http://cancel.url"
  //     },
  //     "transactions": [{
  //         "item_list": {
  //             "items": [{
  //                 "name": this.state.projectName,
  //                 "price": this.state.amount,
  //                 "currency": "USD",
  //             }]
  //         },
  //         "amount": {
  //             "currency": "USD",
  //             "total": this.state.amount
  //         },
  //         "description": "This is the payment description."
  //     }]
  // };
   
   
  // paypal.payment.create(create_payment_json, function (error, payment) {
  //     if (error) {
  //         throw error;
  //     } else {
  //         console.log("Create Payment Response");
  //         console.log(payment);
  //     }
  // });

    // var payReq = JSON.stringify({
    //   intent: "Payment",
    //   payer: {
    //     payment_method: "paypal",
    //   },
    //   transactions: [
    //     {
    //       amount: {
    //         total: this.state.amount,
    //         currency: "USD",
    //       },
    //       description: "Payment for" + this.state.projectName,
    //     },
    //   ],
    // });

    // paypal.payment.create(payReq, (error, payment) => {
    //   var links = {};
    //   alert("here");
    //   if (error) {
    //     console.error(JSON.stringify(error));
    //   } else {
    //     // Capture HATEOAS links
    //     payment.links.forEach(function (linkObj) {
    //       links[linkObj.rel] = {
    //         href: linkObj.href,
    //         method: linkObj.method,
    //       };
    //     });

    //     // If the redirect URL is present, redirect the customer to that URL
    //     if (links.hasOwnProperty("approval_url")) {
    //       // Redirect the customer to links['approval_url'].href
    //     } else {
    //       console.error("no redirect URI present");
    //     }
    //   }
    // });
    // var paymentId = "jjogihbb";
    // var payerId = { payer_id: this.state.name };

    // paypal.payment.execute(paymentId, payerId, function (error, payment) {
    //   if (error) {
    //     console.error(JSON.stringify(error));
    //   } else {
    //     if (payment.state === "approved") {
    //       console.log("payment completed successfully");
    //     } else {
    //       console.log("payment not successful");
    //     }
    //   }
    // });
  }

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
          ) : (
            <div className="payment-container">
              <h3>Choose a method</h3>
              <div
                className="paypal"
                // onClick={() => {
                //   this.handlePaypal();
                // }}
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
          )}
        </div>
      </div>
    );
  }
}
