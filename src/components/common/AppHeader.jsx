import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "./Hero";

const AppHeader = () => {
  const animationStyles = {
    flash: {
      animation: "flash ease-in-out 1s",
    }
  };
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  return (
    <div className="w-screen h-[10%] flex md:justify-center justify-between items-center bg-black relative">
      <div className="progress absolute w-screen h-[2px] top-0">
        <div
          className="w-[0%] h-[100%] bg-purple-600"
          style={animationStyles.flash}
        ></div>
      </div>
      <span className="sm:hidden flex w-[100%] justify-between items-center px-5 sm:p-10">
        <div className="flex items-baseline text-white">
          <span className="font-bold text-4xl me-1">Chandan</span>
          <span className="font-thin" style={{ fontSize: "12px" }}>
            A Web Developer.
          </span>
        </div>
        <span onClick={() => setMenu(!menu)}>
          <box-icon name={menu ? "x" : "menu"} color="#ffffff"></box-icon>
        </span>
        <div
          className={`w-screen h-screen flex justify-center flex-col items-center gap-5 font-thin absolute left-0 top-20 z-10 bg-black ${
            menu ? "" : "hidden"
          } bg-opacity-75`}
        >
          <Link
            to={"/"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/" ? "active text-purple-600" : ""
            } relative flex`}
            onClick={() => setMenu(!menu)}
          >
            Home
            <span
              className={`${
                location.pathname === "/" ? "hidden" : ""
              } relative flex h-2 w-2`}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </Link>
          <Link
            to={"/about"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/about" ? "active text-purple-600" : ""
            }`}
            onClick={() => setMenu(!menu)}
          >
            About
          </Link>

          <Link
            to={"/contact"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/contact" ? "active text-purple-600" : ""
            }`}
            onClick={() => setMenu(!menu)}
          >
            Contact
          </Link>
          <Link
            to={"/projects"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/projects" ? "active text-purple-600" : ""
            }`}
            onClick={() => setMenu(!menu)}
          >
            Projects
          </Link>
          <span className="flex gap-1 mt-10">
            <a href="mailto: singh963130@gmail.com">
              <box-icon name="gmail" type="logo" color="#fff"></box-icon>
            </a>

            <a
              href="https://github.com/ChandanEduGaon"
              target="_blank"
              className=""
            >
              <box-icon type="logo" name="github" color="#fff"></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-singh-2b6020280/"
              target="_blank"
              className="flex relative"
            >
              <box-icon
                type="logo"
                name="linkedin-square"
                color="#fff"
              ></box-icon>
              <span className={`relative flex h-2 w-2`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </a>
          </span>
        </div>
      </span>
      <div className="w-[100%] h-100 justify-between items-center hidden sm:flex px-10">
        <div className="flex items-baseline text-white">
          <span className="font-bold sm:text-4xl me-1">Chandan</span>
          <span className="font-thin" style={{ fontSize: "12px" }}>
            A Web Developer.
          </span>
        </div>
        <div className="flex justify-center items-center gap-5 font-thin">
          <Link
            to={"/"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/" ? "active text-purple-600" : ""
            } relative flex`}
          >
            Home
            <span
              className={`${
                location.pathname === "/" ? "hidden" : ""
              } relative flex h-2 w-2`}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </Link>
          <Link
            to={"/about"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/about" ? "active text-purple-600" : ""
            }`}
          >
            About
          </Link>

          <Link
            to={"/contact"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/contact" ? "active text-purple-600" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to={"/projects"}
            className={`text-white anchor hover:text-white ${
              location.pathname === "/projects" ? "active text-purple-600" : ""
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
