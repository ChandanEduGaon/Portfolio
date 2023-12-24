import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="group">
      {children}
      <div className="opacity-0 pointer-events-none absolute bottom-7 transition-opacity text-[10px] duration-300 ease-in-out group-hover:opacity-100 z-50">
        <div className="w-[100%] bg-slate-500 relative p-2 text-left rounded-md text-white">
          {text}
          <span className="absolute -bottom-0.5 rotate-45 left-10 w-2 h-2 bg-slate-500"></span>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
