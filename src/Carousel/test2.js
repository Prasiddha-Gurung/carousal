import React from "react";
import img1 from "./Images/carousel_image_1.jpeg";
import Wrapper from "./style_components/Wrapper";
import Carousel from "./Main/Carousel";
import Images from "./images";

export default function test({ name, location, rating }) {
  const some = Images.map((item, i) => (
    <Test
      key={item.id}
      name={item.name}
      location={item.location}
      rating={item.rating}
    />
  ));
  return (
    <Wrapper>
      <Carousel
        content={Images}
        numberOfComponentsPerSlide={3}
        buttonsInside={true}
        buttonDisableOnEnds={false}
        autoScroll={true}
      ></Carousel>
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
