import React from "react";
import Typer from "../Typer";

const Welcome = () => {
    const sequence = [
      "Developer.",
      2000,
      "Designer.",
      2000,
      "Singer.",
      2000,
      "Music Producer.",
      2000,
    ];
  return (
    <div className="w-screen h-[80%] flex justify-center items-center flex-col-reverse sm:flex-row">
      <div className="flex justify-center items-center w-[100%] p-5 sm:w-[50%] sm:justify-start">
        <span className="text-lg font-bold md:text-4xl sm:text-2xl lg:text-6xl text-white">
          I`m a <Typer sequence={sequence} textColor="purple" />
        </span>
      </div>
      <div className="flex justify-center items-center w-[50%] p-5">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQG3H-n3MTfl3Q/profile-displayphoto-shrink_400_400/0/1687165056159?e=1701302400&v=beta&t=GFfwX45C9mzYDdJ3SKO77yKEJh1uJ65jtvKM0-_cxK4"
          alt="logo"
          className="w-50 h-50 border-8 border-white border-b-purple-600 rounded-full"
          // style={{ clipPath: "circle(50%)" }}
        />
      </div>
    </div>
  );
};

export default Welcome;
