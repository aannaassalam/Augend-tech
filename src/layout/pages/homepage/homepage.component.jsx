import React from 'react';
import $ from 'jquery';

import NavBar from './navbar/navbar.component';
import Intro from './sections/intro/intro.component';
import About from './sections/about/about.component';
import Services from './sections/services/services.component';
import WhyChooseUS from './sections/why-choose-us/whychooseus.component';
import WorkProcess from './sections/workprocess/workprocess.component';
import Technologies from './sections/technologies/technologies.component';
import ProjectPreview from './sections/project-gallery/projectpreview.component';
import SeoAnalysis from './sections/seo-analysis/seoanalysis.component';
import BlogPreview from './sections/blog-preview/blogpreview.component';
import ContactForm from './sections/contact-form/contactform.component';

import "./homepage.styles.css";


import Loader from '../../components/loader/loader.component';
class HomePage extends React.Component{
  constructor(){
    super();
    this.state={
      loading:false
    }
  }
componentDidMount(){
      document.querySelector('.navbar').style.display='none';
}
componentWillUnmount(){
    document.querySelector('.navbar').style.display='flex';
}
    render(){
        return(
            <div>
              <div className='load'>
                <Loader/>
              </div>
              <div className="homepage">
                  <NavBar/>
                  <Intro/>
                  <About/>
                  <Services/>
                  <WhyChooseUS/>
                  <WorkProcess/>
                  <Technologies/>
                  <ProjectPreview/>
                  <SeoAnalysis/>
                  <BlogPreview/>
                  <ContactForm/>
              </div>
            </div>
        )
    }
}

export default HomePage;