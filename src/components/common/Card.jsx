import React from "react";
import "boxicons";

const Card = (props) => {
  return (
    <div
      className="w-[90%] h-[15%] rounded-full p-5 flex justify-start items-center mx-5 my-2 md:w-[35%] md:h-[15%] sm:w-[45%] sm:h-[15%] lg:w-[25%] lg:h-[15%] hover:cursor-pointer card shadow"
      style={{ backgroundColor: props.bgColor }}
    >
      <span className="mx-2">
        <box-icon
          type={props.iconType ? props.iconType : "logo"}
          color={props.iconColor}
          size="50px"
          name={props.icon}
        ></box-icon>
      </span>
      <div className="details">
        <h1 className="text-md md:text-xl text-white font-bold">
          {props.title}
        </h1>
        <p className="text-white text-sm">{props.sub_title}</p>
      </div>
    </div>
  );
};

export default Card;
