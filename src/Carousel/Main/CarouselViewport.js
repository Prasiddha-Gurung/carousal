import React, { useState, useEffect, useRef } from "react";
import CarouselElement from "./CarouselElement";
import Button from "./Button";
import Left from "../Images/left.svg";
import Right from "../Images/right.svg";
import CarouselViewport from "../style_components/CarouselViewport";
import CarouselTrackContainer from "../style_components/carousel-track-container";
import CarouselTrack from "../style_components/carousel-track";
import NavBar from "./NavBar";

export default function CarouselWindow({
  content = [],
  buttonsInside = false,
  autoScroll = false,
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
  const track = useRef(null);
  const moveTrack = () => {
    track.current.style.transform = "translateX(-" + translateDistance + "%)";
  };
  const decrementSlides = () => {
    if (firstSlideIndex > 0) {
      setFirstSlideIndex(firstSlideIndex => firstSlideIndex - 1);
      setLastSlideIndex(lastSlideIndex => lastSlideIndex - 1);
      let distance = translateDistance - translationAmount;
      if (distance < 0) {
        setTranslateDistance(0);
      } else {
        setTranslateDistance(distance);
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

  // const navbar = id => {
  //   setFirstSlideIndex(id);
  //   setLastSlideIndex(id + numberOfComponentsPerSlide);
  // };
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        if (firstSlideIndex < content.length - numberOfComponentsPerSlide)
          incrementSlides();
        else {
          setFirstSlideIndex(0);
          setLastSlideIndex(numberOfSlides);
          setTranslateDistance(0);
        }
      }, 4500);
      return () => {
        clearInterval(interval);
      };
    }
  });
  useEffect(moveTrack, [translateDistance]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <CarouselViewport>
        <Button
          image={Left}
          controller={() => decrementSlides()}
          buttonInside={buttonsInside}
          transformDistance={"100%"}
          isActive={buttonDisableOnEnds ? firstSlideIndex > 0 : true}
        />
        <CarouselTrackContainer>
          <CarouselTrack className="carousel-track" ref={track}>
            {content.map((item, i) => (
              <CarouselElement
                key={item.id}
                itemNumber={i}
                item={item}
                numberOfComponentsPerSlide={numberOfComponentsPerSlide}
                selected={i <= lastSlideIndex && i >= firstSlideIndex}
              />
            ))}
          </CarouselTrack>
        </CarouselTrackContainer>
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
      </CarouselViewport>
      <div>
        {content.map((item, i) => (
          <NavBar id={i} active={i <= lastSlideIndex && i >= firstSlideIndex} />
        ))}
      </div>
    </div>
  );
}
