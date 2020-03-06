import React, { useState, useEffect } from "react";

export default function CarouselTrack({
  itemNumber,
  item = [],
  slideNumber = 1
}) {
  const selected = itemNumber < slideNumber;
  const left = (itemNumber * 100) / slideNumber;
  const width = 100 / slideNumber;
  const style = {
    background: `url(${item.image})`,
    height: "inherit",
    width: `${width}` + "%",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    left: `${left}` + "%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden"
  };

  return (
    <div
      className={selected ? "Slide current-slide" : "Slide"}
      style={style}
    ></div>
  );
}
