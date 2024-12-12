import React from "react";
import ButtonWrapper from "../style_components/Button";

export default function Button({
  image,
  isActive = true,
  transformDistance = "100%",
  buttonInside = false,
  height = "100%",
  width = "5vw",
  controller
}) {
  return (
    <ButtonWrapper
      height={height}
      width={width}
      buttonInside={buttonInside}
      transformDistance={transformDistance}
      onClick={controller}
      isActive={isActive}
    >
      <img
        src={image}
        style={{
          height: "100%",
          width: "100%"
        }}
      />
    </ButtonWrapper>
  );
}
{
  /* <button
      style={{
        height: `${height}`,
        width: `${width}`,
        transform: buttonInside ? `translateX(${transformDistance})` : null,
        background: "rgba(255, 255, 255, 0.1)",
        visibility: isActive ? "visible" : "hidden"
      }}
      disabled={!isActive}
      onClick={controller}
    >
      
    </button> */
}
