import React from "react";
import CarouselViewport from "./CarouselViewport";
import Wrapper from "../style_components/Carousel";
export default function Carousel({
  name_id,
  content = [],
  buttonsInside = false,
  numberOfComponentsPerSlide = 1,
  moveComponent = false,
  buttonDisableOnEnds = false,
  navBarDisable = false,
  autoScroll = false
}) {
  // if (loopback === true) {
  //   buttonDisableOnEnds = false;
  // }
  return (
    <Wrapper>
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
