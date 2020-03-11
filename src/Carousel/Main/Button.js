import React from "react";
import "./Button.css";

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
    <button
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
      <img src={image} />
    </button>
  );
}
