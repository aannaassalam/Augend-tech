import React from 'react';

import NavBar from './navbar/navbar.component';
import Intro from './sections/intro/intro.component';
import About from './sections/about/about.component';
import Services from './sections/services/services.component';
import WhyChooseUS from './sections/why-choose-us/whychooseus.component';
import WorkProcess from './sections/workprocess/workprocess.component';
import Technologies from './sections/technologies/technologies.component';
import ProjectPreview from './sections/project-gallery/projectpreview.component';
import BlogPreview from './sections/blog-preview/blogpreview.component';
import ContactForm from './sections/contact-form/contactform.component';
import Razorpay from 'razorpay';

import "./homepage.styles.css";

class HomePage extends React.Component{
  constructor(){
    super();
    this.state={
      loading:false
    }
  }
componentDidMount(){
      // document.querySelector('.navbar').style.display='none';
}
componentWillUnmount(){
    // document.querySelector('.navbar').style.display='flex';
}

handlePayment(){
  // var instance = new Razorpay({
  //   key_id: 'rzp_test_dxlgLQGi0JrIZp',
  //   key_secret: 'qdoDZyrvsV7WMO2wi0iVTALJ',
  // });
  // instance.payments.capture( "zkbsadfih99089", 5000 );
  // alert("hola");
  const options = {
    key: 'rzp_test_dxlgLQGi0JrIZp',
    name: "Augend Tech",
    description: "Make a payment",
    amount: 50000,
    handler: async (response) => {
      try {
       const paymentId = response.razorpay_payment_id;
      } catch (err) {
        console.log(err);
      }
    },
    theme: {
      color: "#2D499B",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
}

    render(){
        return(
            <div>
              <div className='load'>
                {/* <Loader/> */}
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
                  <div className="make-payment-container">
                    <div className="make-payment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, deleniti!</p>
                      <button type="button" onClick={this.handlePayment}><p>Make a payment</p><i className="fas fa-credit-card"></i> </button>
                    </div>
                  </div>
                  <BlogPreview/>
                  <ContactForm/>
              </div>
            </div>
        )
    }
}

export default HomePage;