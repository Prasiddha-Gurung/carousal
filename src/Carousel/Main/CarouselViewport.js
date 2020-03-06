import React, { useEffect } from "react";
import CarouselTrack from "./CarouselTrack";
import "./Carousel.css";
import Button from "./Button";
import Left from "../Images/left.svg";
import Right from "../Images/right.svg";

export default function CarouselViewport({
  content = [],
  buttonsInside = false,
  loopback = false,
  numberOfComponentsPerSlide = 1,
  moveComponent = false,
  buttonDisableOnEnds = false,
  navBarDisable = false
}) {
  test();
  {
    const some = document.querySelector(".current-slide");
    console.log("djkasnd", some);
  }
  useEffect(test(), []);

  return (
    <div className="Carousel-Viewport">
      <Button image={Left} />
      <div className="carousel-track-container">
        <div className="carousel-track">
          {content.map((item, i) => (
            <CarouselTrack
              key={item.id}
              itemNumber={i}
              item={item}
              slideNumber={3}
            />
          ))}
        </div>
      </div>
      <Button image={Right} />
    </div>
  );
}
