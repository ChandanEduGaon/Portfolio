import React from "react";

const Service = (props) => {
  return (
    <div
      className={`sm:w-[80%] sm:h-[100%] w-[90%] flex justify-between items-center p-5 md:p-10 border bottom-[.1px] rounded-lg ${
        props.align === "0" ? "flex-row-reverse" : ""
      } mb-10 flex-col sm:flex-row vintage border border-dashed border-white`}
    >
      <div className="w-[100%] flex flex-col items-start p-3">
        <span className="font-bold text-4xl mb-1">{props.title}</span>
        <span className="font-thin text-sm">{props.description}</span>
        <button
          id="cool_btn"
          type="button"
          class="px-3 py-2 mt-5 rounded text-white bg-purple-400 hover:bg-purple-500"
        >
          Read more...
        </button>
      </div>
      <div className="w-[100%] flex justify-center items-center p-10 overflow-hidden ">
        <img
          src={props.image}
          alt="logo"
          className="transition duration-500 ease-in-out w-[100%] h-[50%] rounded max-w-[400px] max-h-[250px] min-w-[400px] min-h-[250px] hover:scale-105 cursor-pointer overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Service;

{
  /* <span
          className="w-10 h-10 rounded-full bg-slate-400 bg-opacity-25 flex justify-center items-center absolute left-2 md:left-20 cursor-pointer top-48 active:bg-purple-600 hover:bg-purple-400 border"
          onClick={() => updateService_no(service_no + 1)}
        >
          <box-icon name="left-arrow-alt" color="#ffffff"></box-icon>
        </span>
        <span
          className="w-10 h-10 rounded-full bg-slate-400 bg-opacity-25 flex justify-center items-center absolute right-2 md:right-20 cursor-pointer top-48 active:bg-purple-600 hover:bg-purple-400"
          onClick={() => updateService_no(service_no + 1)}
        >
          <box-icon name="right-arrow-alt" color="#ffffff"></box-icon>
        </span> */
}
