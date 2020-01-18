import React from 'react';

import FormInput from '../../../../components/form-input/form-input.component';

import seoanalysis from '../../../../../assets/seoanalysis.png';

import pattern from '../../../../../assets/pattern.png';

import "./seoanalysis.styles.css";

class SeoAnalysis extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            name:'',
            email: '',
            phone: '',
            website:''
        };
      }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render()
    {
        return(
            <div className="seoanalysis">
                <div className="pattern">
                    <img src={pattern} alt="pattern" />
                </div>
                <div className="seoanalysis-box">
                    <div className="left">
                        <img src={seoanalysis} alt="seo-form"/>
                    </div>
                    <div className="right">
                        <h1>ANALYSIS</h1>
                        <h2>Get Free SEO Analysis?</h2>
                        <h3>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim,<br/>
                            case regione signiferumque vim te.
                        </h3>
                        <form className="seo-analysis-form" id="seo-analysis-form" name="seo-analysis-form">
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
                                    name='website'
                                    type='text'
                                    handleChange={this.handleChange}
                                    value={this.state.website}
                                    label='Website'
                                    required
                                />
                            </div>
                            <button type="submit">
                                <div>
                                    <h6>CHECK NOW</h6>
                                    <i className="fas fa-search"></i>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SeoAnalysis;