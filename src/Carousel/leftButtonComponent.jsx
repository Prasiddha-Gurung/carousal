import React, { Component } from "react";

class LeftButtonContoller extends Component {
  constructor(props) {
    super(props);
    this.leftSlideNavigation = this.leftSlideNavigation.bind(this);
  }
  static LeftButtonContoller() {
    const prevButton = document.querySelector(".carousel__button--left");
    const lastSlide = document.querySelector(".last-slide");
    const lastIndicator = document.querySelector(".last-indicator");
    const track = document.querySelector(".carousel_track");

    prevButton.addEventListener("click", e => {
      this.leftSlideNavigation(track, lastSlide, lastIndicator);
    });
  }

  static leftSlideNavigation(track, Slide, Indicator) {
    const currentSlide = track.querySelector(".current-slide");
    const targetSlide = currentSlide.previousElementSibling;
    const currentIndicator = document.querySelector(".current-indicator");
    const targetIndicator = currentIndicator.previousElementSibling;
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

export default LeftButtonContoller;
