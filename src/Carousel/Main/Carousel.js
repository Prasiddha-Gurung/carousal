import React, { useState, useEffect } from "react";
import CarouselViewport from "./CarouselViewport";
import "./Carousel.css";

export default function Carousel({
  content = [],
  buttonsInside = false,
  loopback = false,
  numberOfComponentsPerSlide = 1,
  moveComponent = false,
  buttonDisableOnEnds = false,
  navBarDisable = false
}) {
  if (loopback === true) {
    buttonDisableOnEnds = false;
  }
  return (
    <div className="Carousel">
      <CarouselViewport
        content={content}
        buttonsInside={buttonsInside}
        loopback={loopback}
        moveComponent={moveComponent}
        numberOfComponentsPerSlide={numberOfComponentsPerSlide}
        buttonDisableOnEnds={buttonDisableOnEnds}
        navBarDisable={navBarDisable}
      />
    </div>
  );
}
