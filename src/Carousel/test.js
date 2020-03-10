import React from "react";
import img1 from "./Images/carousel_image_1.jpeg";
import Wrapper from "./style_components/Wrapper";

export default function test({ name, location, rating }) {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <h1>{rating}</h1>
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
