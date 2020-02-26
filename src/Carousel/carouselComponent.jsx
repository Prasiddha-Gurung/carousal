import React, { Component } from "react";
import "./carousel.css";
import left from "./Images/left.svg";
import right from "./Images/right.svg";

class Carousel extends Component {
  render() {
    return (
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
    );
  }
}

export default Carousel;
