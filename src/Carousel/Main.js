import React, { useState, useEffect } from "react";
import Carousel from "./Main/Carousel";
import Test from "./test";
export default function Main() {
  const [stuff, setStuff] = useState([]);
  const getData = () => {
    fetch("http://www.mocky.io/v2/5e67f0ca3000005500327812")
      .then(result => result.json())
      .then(result => setStuff(result));
  };
  useEffect(getData, []);
  const some2 = stuff.map((item, i) => (
    <Test
      key={item.id}
      name={item.name}
      location={item.location}
      rating={item.rating}
    />
  ));

  return (
    <div>
      <Carousel
        content={some2}
        numberOfComponentsPerSlide={2}
        buttonsInside={false}
        buttonDisableOnEnds={true}
        autoScroll={false}
      />

      <Carousel
        content={some2}
        numberOfComponentsPerSlide={1}
        buttonsInside={true}
        buttonDisableOnEnds={true}
        autoScroll={true}
      />
    </div>
  );
}
