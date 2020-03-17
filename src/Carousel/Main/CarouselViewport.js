import React, { useState, useEffect, useRef } from "react";
import CarouselElement from "./CarouselElement";
import Button from "./Button";
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
  navBarDisable = false,
  left,
  right
}) {
  const numberOfSlides = numberOfComponentsPerSlide - 1;
  const [firstSlideIndex, setFirstSlideIndex] = useState(0);
  const [lastSlideIndex, setLastSlideIndex] = useState(
    numberOfComponentsPerSlide - 1
  );

  const [translateDistance, setTranslateDistance] = useState(0);
  const [componentsPerSlide, setcomponentPerSlide] = useState(
    numberOfComponentsPerSlide
  );
  const [translationAmount, setTranslationAmount] = useState(
    100 / componentsPerSlide
  );
  console.log(componentsPerSlide);
  console.log(translationAmount);
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
    if (firstSlideIndex < content.length - componentsPerSlide) {
      setFirstSlideIndex(firstSlideIndex => firstSlideIndex + 1);
      setLastSlideIndex(lastSlideIndex => lastSlideIndex + 1);
      setTranslateDistance(translateDistance + translationAmount);
    }
  };

  // const navbar = id => {
  //   setFirstSlideIndex(id);
  //   setLastSlideIndex(id + componentsPerSlide);
  // };
  const interval = useRef(null);
  interval.current = () => {
    if (firstSlideIndex < content.length - componentsPerSlide) {
      incrementSlides();
    } else {
      setFirstSlideIndex(0);
      setLastSlideIndex(numberOfSlides);
      setTranslateDistance(0);
    }
  };
  useEffect(() => {
    if (autoScroll) {
      const id = setInterval(() => {
        interval.current();
      }, 4500);
      return () => {
        clearInterval(id);
      };
    }
  }, [content]);
  useEffect(moveTrack, [translateDistance]);
  function handleChange(newValue) {
    setFirstSlideIndex(newValue);
    setLastSlideIndex(newValue + componentsPerSlide - 1);
    if (newValue === content.length - 1) {
      newValue = newValue - 1;
      const distance = newValue * (100 / componentsPerSlide);
      setTranslateDistance(distance);
    } else {
      const distance = newValue * (100 / componentsPerSlide);
      setTranslateDistance(distance);
    }
  }

  const handleWindowResize = () => {
    const size = window.innerWidth;
    if (size < 800) {
      setcomponentPerSlide(1);
    } else {
      setcomponentPerSlide(numberOfComponentsPerSlide);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.addEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    setTranslationAmount(100 / componentsPerSlide);
    setFirstSlideIndex(0);
    setLastSlideIndex(numberOfSlides);
    setTranslateDistance(0);
  }, [componentsPerSlide]);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      className="Carousel-Container"
    >
      <CarouselViewport>
        <Button
          image={left}
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
                numberOfComponentsPerSlide={componentsPerSlide}
                selected={i <= lastSlideIndex && i >= firstSlideIndex}
              />
            ))}
          </CarouselTrack>
        </CarouselTrackContainer>
        <Button
          image={right}
          controller={() => incrementSlides()}
          buttonInside={buttonsInside}
          transformDistance={"-100%"}
          isActive={
            buttonDisableOnEnds
              ? firstSlideIndex < content.length - componentsPerSlide
              : true
          }
        />
      </CarouselViewport>
      <div
        style={{ visibility: navBarDisable ? "hidden" : "visible" }}
        disabled={!navBarDisable}
      >
        {content.map((item, i) => (
          <NavBar
            id={i}
            active={i === firstSlideIndex}
            value={firstSlideIndex}
            onClick={handleChange}
            disabled={navBarDisable}
          />
        ))}
      </div>
    </div>
  );
}
