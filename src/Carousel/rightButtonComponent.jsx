import React, { Component } from "react";

class SlideController extends Component {
  constructor(props) {
    super(props);
    this.rightSlideNavigation = this.rightSlideNavigation.bind(this);
  }

  //Funtions move carousel to the right
  static rightButtonContoller() {
    const nextButton = document.querySelector(".carousel__button--right");
    const track = document.querySelector(".carousel_track");
    const firstSlide = document.querySelector(".first-slide");
    const firstIndicator = document.querySelector(".first-indicator");

    nextButton.addEventListener("click", e => {
      this.rightSlideNavigation(track, firstSlide, firstIndicator);
    });
  }
  static rightSlideNavigation(track, Slide, Indicator) {
    const currentSlide = track.querySelector(".current-slide");
    const targetSlide = currentSlide.nextElementSibling;
    const currentIndicator = document.querySelector(".current-indicator");
    const targetIndicator = currentIndicator.nextElementSibling;
    if (targetSlide) {
      track.style.transform = "translate(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
      currentIndicator.classList.remove("current-indicator");
      targetIndicator.classList.add("current-indicator");
    } else {
      const distance = Number.parseInt(Slide.style.left.replace("px", ""));
      track.style.transform = "translate(-" + distance + "px)";
      currentSlide.classList.remove("current-slide");
      Slide.classList.add("current-slide");
      currentIndicator.classList.remove("current-indicator");
      Indicator.classList.add("current-indicator");
    }
  }
}

export default SlideController;
