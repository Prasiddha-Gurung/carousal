import React, { useState, useEffect, useRef } from "react";
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
  const numberOfSlides = numberOfComponentsPerSlide - 1;
  const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(numberOfSlides);
  const translationAmount = 100 / numberOfComponentsPerSlide;
  const [translateDistance, setTranslateDistance] = useState(0);
  const moveTrack = () => {
    const track = document.querySelector(".carousel-track");
    track.style.transform = "translateX(-" + translateDistance + "%)";
  };
  const decrementSlides = () => {
    if (firstSlideIndex > 0) {
      setFirstSlideIndex(firstSlideIndex => firstSlideIndex - 1);
      setLastSlideIndex(lastSlideIndex => lastSlideIndex - 1);
      let distance = translateDistance - translationAmount;
      {
        if (distance < 0) {
          setTranslateDistance(0);
        } else {
          setTranslateDistance(distance);
        }
      }
    }
  };
  const incrementSlides = () => {
    if (firstSlideIndex < content.length - numberOfComponentsPerSlide) {
      setFirstSlideIndex(firstSlideIndex => firstSlideIndex + 1);
      setLastSlideIndex(lastSlideIndex => lastSlideIndex + 1);
      setTranslateDistance(translateDistance + translationAmount);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      incrementSlides();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(moveTrack, [translateDistance]);
  return (
    <div className="Carousel-Viewport">
      <Button
        image={Left}
        controller={() => decrementSlides()}
        buttonInside={buttonsInside}
        transformDistance={"100%"}
        isActive={buttonDisableOnEnds ? firstSlideIndex > 0 : true}
      />
      <div className="carousel-track-container">
        <div className="carousel-track">
          {content.map((item, i) => (
            <CarouselTrack
              key={item.id}
              itemNumber={i}
              item={item}
              numberOfComponentsPerSlide={numberOfComponentsPerSlide}
              selected={i <= lastSlideIndex && i >= firstSlideIndex}
            />
          ))}
        </div>
      </div>
      <Button
        image={Right}
        controller={() => incrementSlides()}
        buttonInside={buttonsInside}
        transformDistance={"-100%"}
        isActive={
          buttonDisableOnEnds
            ? firstSlideIndex < content.length - numberOfComponentsPerSlide
            : true
        }
      />
    </div>
  );
}
