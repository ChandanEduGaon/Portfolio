import React from "react";

const Exprience = (props) => {
  return (
    <>
      <div className=" w-[90%] md:w-[40%] lg:w-[80%] border border-dashed rounded-sm p-5 pt-3 pb-2 flex flex-col m-2">
        <span className="flex flex-col leading-3 ">
          <span
            className="text-xl md:text-xl font-bold tracking-wider"
            style={{ color: props.c_color_1 }}
          >
            {props.first_name}
          </span>
          <span
            className="font-light tracking-wider mb-1 md:text-xl"
            style={{ color: props.c_color_2 }}
          >
            {props.last_name}
          </span>
        </span>
        <span className="w-100 my-1 border-b border-dashed"></span>
        <span className="text-[10px] md:text-[14px] font-light">
          {props.location}
        </span>
        <span className="text-[13px] md:text-[16px] font-bold">
          {props.degignation}
        </span>
        <span className="text-[9px] md:text-[12px] font-thin">{props.des}</span>
        <span className="w-100 my-2 border-b border-dashed"></span>
        <span className="w-100 flex gap-1 text-[10px] md:text-[12px] font-mono">
          <span>{props.s_d}</span>
          <span className="">/</span>
          <span>{props.e_d}</span>
        </span>
      </div>
    </>
  );
};

export default Exprience;
