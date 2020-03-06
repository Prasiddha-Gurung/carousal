import React from "react";
import "./Button.css";

export default function Button({
  image,
  isActive = true,
  transformDistance,
  height = "100%",
  width = "5vw"
}) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button
      style={{
        height: `${height}`,
        width: `${width}`,
        transform: transformDistance ? `translate(${transformDistance})` : null,
        visibility: isActive ? "visible" : "hidden"
      }}
      disabled={!isActive}
      onClick={handleClick}
    >
      <img src={image} />
    </button>
  );
}
