import React from "react";
import "./modal.css";
import firebase from "firebase";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      name: "",
      phone: "",
      email: "",
      projectName: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handlePayment() {
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

  render() {
      console.log("tt");
    return (
      <div className="modal-blank">
        <div className="modal-container">
          <div className="modal-head">
            <h4>Make a Payment</h4>
            <i className="fas fa-times" onClick={()=>this.props.close()}></i>
          </div>
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
              placeholder=" Project Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              this.handlePayment();
            }}
          >
            Pay
          </button>
        </div>
      </div>
    );
  }
}
