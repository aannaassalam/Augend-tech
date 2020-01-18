import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Intropart1 from './intropart1/intropart1.component';
import Intropart2 from './intropart2/intropart2.component';
import Intropart3 from './intropart3/intropart3.component';

import "./intro.styles.css";

const Intro = () => {
  return (
    <div className="intro">
      <AliceCarousel 
        autoPlay={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        autoPlayInterval={4500}>
          <div className="slider">
            <Intropart1/>
          </div>
          <div className="slider">
            <Intropart2/>
          </div>
          <div className="slider">
            <Intropart3/>
          </div>
    </AliceCarousel>
    </div>
  )
}

export default Intro;