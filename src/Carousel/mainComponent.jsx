import React, { Component } from "react";
import LeftButtonContoller from "./leftButtonComponent";
import RightButtonContoller from "./rightButtonComponent";
import NavigationBarContoller from "./navigationBarComponent";
import Carousel from "./carouselComponent";

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }
  /* Function evaluates the width of the slides and amount to be 
  shifted by on each time the left right ot nav b uttons are pressed */
  handleSlides() {
    const track = document.querySelector(".carousel_track");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  }
  /* recalls the handleSlides() to reevaluate the winth of images as
  images as slide size is based on window size */

  setupListeners() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize(_) {
    this.handleSlides();
  }
  componentDidMount() {
    this.handleSlides();
    this.setupListeners();
    RightButtonContoller.rightButtonContoller();
    LeftButtonContoller.LeftButtonContoller();
    NavigationBarContoller.naviagtionDotsController();
  }
  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default CarouselComponent;
