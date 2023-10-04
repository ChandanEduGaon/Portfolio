import React from "react";

export const NotFound = () => {
  return (
    <div className="w-screen h-[80%] overflow-auto flex justify-center items-center">
      <div className="w-[80%] h-[30%] md:w-[50%] md:h-[40%] bg-purple-600 rounded-md flex flex-col items-center justify-center">
        <box-icon type="solid" name="sad" size="50px" color="gray"></box-icon>
        <span className="text-white text-4xl font-bold">404</span>
        <span className="text-white">Page Not Found</span>
      </div>
    </div>
  );
};
