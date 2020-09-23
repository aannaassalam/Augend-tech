import React from 'react';
import firebase from "firebase";
import FormInput from '../../../../components/form-input/form-input.component';
import toaster from "toasted-notes";
import contactform from '../../../../../assets/contactform.png';
import "toasted-notes/src/styles.css";
import "./contactform.styles.css";

class ContactForm extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            email: '',
            phone: '',
            message:''
        };
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    handleSubmit(){
        if(this.state.name.length > 0 && this.state.email.length > 0 && this.state.phone.length > 0 && this.state.message.length > 0){
            firebase
            .firestore()
            .collection("contacts")
            .add({
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                message: this.state.message
            }).then(() => {
                toaster.notify("Message sent succesfully", {duration: 2000});
                this.setState({
                    name: "",
                    phone: "",
                    email: "",
                    message: ""
                })
            })
        }else{
            toaster.notify("Please fill in all the fields", {duration: 2000});
        }
    }
    render()
    {
        return(
            <div className="contactform" id="contact-form" >
                <div className="contactform-container">
                <div className="left">
                    <img src={contactform} alt="contact-form"/>
                </div>
                <div className="right">
                    <h1>CONTACT US</h1>
                    <h2>Let's talk about everything!</h2>
                    <h3>Don't like forms? Send us your email.</h3>
                    <form className="contact-form" name="contact-form">
                        <div className="form-group">
                            <FormInput
                                name='name'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.name}
                                label='Your Name'
                                // required
                            />
                            <FormInput
                                name='email'
                                type='email'
                                handleChange={this.handleChange}
                                value={this.state.email}
                                label='Email'
                                // required
                            />
                        </div>
                        <div className="form-group">
                            <FormInput
                                name='phone'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.phone}
                                label='Phone'
                                // required
                            />
                            <FormInput
                                name='message'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.message}
                                label='Message'
                                // required
                            />
                        </div>
                        <button type="button" onClick={() => this.handleSubmit()}>
                            <div>
                                <h6>SEND</h6>
                                <i className="fas fa-paper-plane"></i>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

export default ContactForm;