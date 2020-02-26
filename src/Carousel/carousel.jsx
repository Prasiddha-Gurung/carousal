import React, { Component } from "react";
import "./carousel.css";
import left from "./Images/left.svg";
import right from "./Images/right.svg";
import { render } from "@testing-library/react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.rightSlideNavigation = this.rightSlideNavigation.bind(this);
    this.leftSlideReloop = this.leftSlideNavigation.bind(this);
    this.freeSlideNavigation = this.freeSlideNavigation.bind(this);
  }

  handleSlides() {
    const track = document.querySelector(".carousel_track");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  }

  //Funtions move carousel to the right
  rightButtonContoller() {
    const nextButton = document.querySelector(".carousel__button--right");
    const track = document.querySelector(".carousel_track");
    const firstSlide = document.querySelector(".first-slide");
    const firstIndicator = document.querySelector(".first-indicator");

    nextButton.addEventListener("click", e => {
      this.rightSlideNavigation(track, firstSlide, firstIndicator);
    });
  }
  rightSlideNavigation(track, Slide, Indicator) {
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
  //Funtions move carousel to the left

  leftSlideMove() {
    const prevButton = document.querySelector(".carousel__button--left");
    const lastSlide = document.querySelector(".last-slide");
    const lastIndicator = document.querySelector(".last-indicator");
    const track = document.querySelector(".carousel_track");

    prevButton.addEventListener("click", e => {
      this.leftSlideNavigation(track, lastSlide, lastIndicator);
    });
  }

  leftSlideNavigation(track, Slide, Indicator) {
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
  //Navigation dots funtionality
  naviagtionDotsController() {
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
  freeSlideNavigation(targetDot, track, dots, slides) {
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

  //When window resizes recalculate the values of images
  setupListeners() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize(_) {
    this.handleSlides();
  }
  //add more items in carousel
  //   addItemsInCarousal() {
  //     const entry = document.querySelector(".carousel-entry");
  //     entry.querySelector(".add").onClick = function() {
  //       var name = "<h1>" + document.getElementById("name").value + "</h1>";
  //       var description =
  //         "<p>" + document.getElementById("description").value + "</p>";
  //       var li = "<li>" + name + description + "</li>";
  //       document.getElementById("list").appendChild(li);
  //     };
  //   }

  // Mount functions
  componentDidMount() {
    this.handleSlides();
    this.setupListeners();
    this.rightButtonContoller();
    this.leftSlideMove();
    this.naviagtionDotsController();
    // this.addItemsInCarousal();
  }

  render() {
    return (
      <div>
        <div className="carousel">
          <button className="carousel__button carousel__button--left">
            <img src={left} />
          </button>
          <div className="carousel__track-container">
            <ul className="carousel_track">
              <li className="carousel-slide carousel-slide--one current-slide first-slide" />
              <li className="carousel-slide carousel-slide--two " />
              <li className="carousel-slide carousel-slide--three" />
              <li className="carousel-slide carousel-slide--fourt last-slide">
                <div>
                  <h1>Hotel name</h1>
                  <p>Hotel description</p>
                </div>
              </li>
            </ul>
          </div>
          <button className="carousel__button carousel__button--right">
            <img src={right} />
          </button>
          <div className="carousel-nav">
            <button className="carousel_indicator current-indicator first-indicator"></button>
            <button className="carousel_indicator"></button>
            <button className="carousel_indicator "></button>
            <button className="carousel_indicator last-indicator"></button>
          </div>
        </div>
        <div className="carousel-entry">
          <input type="text" id="name" />
          <input type="text" id="description" />
          <input type="button" value="add to list" id="add" />
        </div>
      </div>
    );
  }
}

export default Carousel;
