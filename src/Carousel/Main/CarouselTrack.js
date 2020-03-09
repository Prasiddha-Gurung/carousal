import React, { useState, useEffect } from "react";

export default function CarouselTrack({
  itemNumber,
  item = [],
  numberOfComponentsPerSlide = 1,
  selected = false
}) {
  const left = (itemNumber * 100) / numberOfComponentsPerSlide;
  const width = 100 / numberOfComponentsPerSlide;
  const style = {
    height: "inherit",
    width: `${width}` + "%",
    position: "absolute",
    left: `${left}` + "%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden"
  };
  return (
    <div className={selected ? "Slide current-slide" : "Slide"} style={style}>
      {item}
    </div>
  );
}
