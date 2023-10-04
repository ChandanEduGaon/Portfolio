import React from 'react'
import { TypeAnimation } from "react-type-animation";

const Typer = (props) => {
  return (
    <TypeAnimation
      sequence={props.sequence}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      className={`text-${props.textColor}-600`}
      repeat={Infinity}
    />
  );
};

export default Typer;
