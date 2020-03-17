import React from "react";
import Button from "../style_components/NavElement";
import CurrentButton from "../style_components/NavElementCurrent";
// { id, active = false,firstSlideIndex,lastSlideIndex,onClick}
export default function NavBar(props) {
  function handleChange() {
    props.onClick(props.id);
  }
  function Greeting() {
    if (props.active) {
      return (
        <CurrentButton disabled={props.disabled} visibility={!props.disabled} />
      );
    }

    return (
      <Button
        onClick={handleChange}
        disabled={props.disabled}
        visibility={!props.disabled}
      />
    );
  }
  return <Greeting />;
}
