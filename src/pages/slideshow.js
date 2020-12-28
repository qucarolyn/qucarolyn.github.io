import React, { useState, useRef, useEffect } from 'react';
//import elements from '/Users/carolynqu/websites/qucarolyn/src/components/homepageElem.js';


//sets up the properties from elements[index]
/*function showSlide(index){
  console.log(elements[0]);
  var slide = document.getElementById("home_entry"); 
  var text = document.getElementById("home_about"); 
  var image = document.getElementById("home_img");

  //image.src = elements[index].imagesrc; 
  //image.alt = elements[index].imageAltText;
  //text = elements[index].title; 

}

export default showSlide();*/


const SlideShow = ({ elements }) => {//takes in images as props, code from dev.to
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  /*const [index, setIndex] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })*/
  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, 2 * 1000)
    return () => clearInterval(interval)
  }, [])


  const nextSlide = () => {
    setIndex((index + 1) % elements.length); // increases index by 1
  };


  return (
    //elements.length > 0 && (
    <div id="home_page" onClick={nextSlide} onKeyPress={nextSlide}>
      <h1 className="title">
        Hi, I'm Carolyn
      </h1>
      {/*</div><div id="home_entry" onclick={elements[index].href}>*/}
      <div id="home_entry">
        <p>I am...</p>
        <a id='home_about'> {elements[index].title} </a>
        <img id='home_img' src={elements[index].imagesrc} style={{ width: 100 }} alt={elements[index].imageAltText} />
      </div>
    </div>
    //)
  );
}

export default SlideShow; //components must be capitalized 

