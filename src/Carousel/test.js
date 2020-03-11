import React from "react";
import img1 from "./Images/carousel_image_1.jpeg";
import Wrapper from "./style_components/Wrapper";
import Carousel from "./Main/Carousel";
import Images from "./images";

export default function test({ name, location, rating }) {
  function handleClick() {
    console.log("here");
  }
  return (
    <Wrapper>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>{rating}</h3>
      <button onClick={handleClick}>click</button>
      <div>
        <img
          src={img1}
          style={{ height: "100%", width: "100%" }}
          alt={"some_image"}
        />
      </div>
    </Wrapper>
  );
}
