import React from 'react';

import FormInput from '../../../../components/form-input/form-input.component';

import contactform from '../../../../../assets/contactform.png';

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
    };
    render()
    {
        return(
            <div className="contactform" id="contact-form">
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
                                required
                            />
                            <FormInput
                                name='email'
                                type='email'
                                handleChange={this.handleChange}
                                value={this.state.email}
                                label='Email'
                                required
                            />
                        </div>
                        <div className="form-group">
                            <FormInput
                                name='phone'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.phone}
                                label='Phone'
                                required
                            />
                            <FormInput
                                name='message'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.message}
                                label='Message'
                                required
                            />
                        </div>
                        <button type="submit">
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