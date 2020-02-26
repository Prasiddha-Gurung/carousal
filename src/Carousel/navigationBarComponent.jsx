import React, { Component } from "react";

class NavigationBarContoller extends Component {
  constructor(props) {
    super(props);
    this.freeSlideNavigation = this.freeSlideNavigation.bind(this);
  }
  static naviagtionDotsController() {
    const dotsNav = document.querySelector(".carousel-nav");
    const dots = Array.from(dotsNav.children);
    const track = document.querySelector(".carousel_track");
    const slides = Array.from(track.children);
    dotsNav.addEventListener("click", e => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;
      this.freeSlideNavigation(targetDot, track, dots, slides);
    });
  }
  static freeSlideNavigation(targetDot, track, dots, slides) {
    const currentSlide = track.querySelector(".current-slide");
    const currentIndicator = document.querySelector(".current-indicator");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    track.style.transform = "translate(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    currentIndicator.classList.remove("current-indicator");
    targetDot.classList.add("current-indicator");
  }
}

export default NavigationBarContoller;
