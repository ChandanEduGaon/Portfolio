import React from "react";
import Typer from "../Typer";

const Hero = () => {
  const sequence = [
    "React App.",
    2000,
    "Shoping App.",
    2000,
    "Blog App.",
    2000,
    "Permotion App.",
    2000,
  ];
  const animationStyles = {
    animRight: {
      animation: "move-right ease 1s",
    },
    animTop: {
      animation: "move-top ease 1s",
    },
  };
  return (
    <div className="hero w-100 sm:h-[45%] md:h-[50%] lg:h-[60%] h-[35%] relative">
      <div className="w-[100%] h-[100%] absolute sm:flex justify-center items-center flex flex-row">
        <div className="w-[60%] flex flex-col sm:p-10 p-5">
          <span className="text-white md:text-4xl lg:text-6xl font-bold text-xl">
            <span>Hii there!</span>{" "}
            <span>
              I can build your awesome{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <Typer sequence={sequence} textColor="" />
              </span>
            </span>
          </span>
            <span className="text-white font-thin text-[10px] sm:text-sm" style={animationStyles.animTop}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi, sint!
            </span>
        </div>

        <div className="w-[40%] p-5 flex justify-center items-center">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQG3H-n3MTfl3Q/profile-displayphoto-shrink_400_400/0/1687165056159?e=1701302400&v=beta&t=GFfwX45C9mzYDdJ3SKO77yKEJh1uJ65jtvKM0-_cxK4"
            alt="logo"
            style={animationStyles.animRight}
              className="w-[100%] md:w-[55%] border-4 border-white border-b-purple-600 rounded-full"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
