//this file sets up the homepage 
//import { render } from '@testing-library/react';
import React, {Component} from 'react';
import elements from '/Users/carolynqu/websites/qucarolyn/src/components/homepageElem.js';
import SlideShow from '/Users/carolynqu/websites/qucarolyn/src/pages/slideshow.js';

//image slider 
class HomePage extends Component {

  render() {
    return (
      /*
        <div className="about">
        <h1 className="title">
          Hi, I'm Carolyn
        </h1>
        <div id="home_entry">
          <p>I am...</p>
          <p id='home_about'> {elements[1].title}</p>
            <img id = 'home_img' src = {elements[1].imagesrc} style={{width: 100}} alt= {elements[1].imageAltText} />
            {/*showSlide(0);
            </div>
            </div>
      */
     <div> 
        <SlideShow elements = {elements}/>
     </div>
      
    )
  }
}

export default HomePage;