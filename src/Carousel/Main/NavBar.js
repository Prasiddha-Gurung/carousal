import React from "react";
import Button from "../style_components/NavElement";
import CurrentButton from "../style_components/NavElementCurrent";
export default function NavBar({ id, active = false }) {
  function UserGreeting() {
    return <CurrentButton />;
  }

  function GuestGreeting() {
    return <Button />;
  }
  function Greeting() {
    if (active) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  return <Greeting />;
}
