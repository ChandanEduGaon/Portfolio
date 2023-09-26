import React from "react";
import "boxicons";

const Card = (props) => {
  return (
    <div
      className="w-[90%] h-[35%] rounded p-5 flex flex-col justify-center items-start m-5 md:w-[45%] md:h-[35%] sm:w-[45%] sm:h-[35%] lg:w-[35%] lg:h-[40%] hover:cursor-pointer card"
      style={{ backgroundColor: props.bgColor }}
    >
      <box-icon
        type={props.iconType ? props.iconType : "logo"}
        color={props.iconColor}
        size="50px"
        name={props.icon}
      ></box-icon>
      <h1 className="text-2xl md:text-4xl text-white font-bold my-3">{props.title}</h1>
      <p className="text-white">{props.sub_title}</p>
    </div>
  );
};

export default Card;
