import React from "react";
import "boxicons";

const Card = (props) => {
  return (
    <div className="w-[35%] h-[25%] rounded p-5 flex justify-start items-center mx-5 my-2 md:w-[35%] md:h-[15%] sm:w-[40%] sm:h-[25%] lg:w-[25%] lg:h-[15%] hover:cursor-pointer card border border-dashed flex-col md:flex-row">
      <span className="mx-2">
        <box-icon
          type={props.iconType ? props.iconType : "logo"}
          color={props.iconColor}
          size="50px"
          name={props.icon}
        ></box-icon>
      </span>
      <div className="details">
        <h1 className="text-md md:text-xl text-gray-500 font-bold">
          {props.title}
        </h1>
        <p className="text-gray-400 text-sm hidden md:block md:text-[12px] lg:text-[15px]">{props.sub_title}</p>
      </div>
    </div>
  );
};

export default Card;
