import React from 'react'
import { TypeAnimation } from "react-type-animation";

const Typer = (props) => {
  return (
    <TypeAnimation
      sequence={props.sequence}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block", color: props.textColor }}
      repeat={Infinity}
    />
  );
};

export default Typer;
