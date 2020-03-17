import React from "react";
import CarouselViewport from "./CarouselViewport";
import Wrapper from "../style_components/Carousel";
export default function Carousel({
  content = [],
  buttonsInside = false,
  numberOfComponentsPerSlide = 1,
  moveComponent = false,
  buttonDisableOnEnds = false,
  navBarDisable = false,
  autoScroll = false,
  carHeight,
  carWidth,
  isResponsive = true
}) {
  if (autoScroll === true) {
    buttonDisableOnEnds = false;
  }
  return (
    <Wrapper
      carHeight={carHeight}
      carWidth={carWidth}
      isResponsive={isResponsive}
    >
      <CarouselViewport
        content={content}
        buttonsInside={buttonsInside}
        moveComponent={moveComponent}
        numberOfComponentsPerSlide={numberOfComponentsPerSlide}
        buttonDisableOnEnds={buttonDisableOnEnds}
        navBarDisable={navBarDisable}
        autoScroll={autoScroll}
      />
    </Wrapper>
  );
}
