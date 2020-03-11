import React from "react";
import Wrapper from "../style_components/carouselElement";

export default function CarouselTrack({
  itemNumber,
  item = [],
  numberOfComponentsPerSlide = 1,
  selected = false
}) {
  const left = (itemNumber * 100) / numberOfComponentsPerSlide;
  const width = 100 / numberOfComponentsPerSlide;

  // const style = { width: { width }, left: { left } };
  return (
    <Wrapper
      width={width}
      left={left}
      className={selected ? "Slide active-slide" : "Slide"}
    >
      {item}
    </Wrapper>
  );
}
