import React from "react";
import { Link, useLocation } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();
  return (
    <div className="w-screen h-[10%] border-b-[.1px] border-white flex justify-center items-center">
      <div className="flex justify-center items-center gap-5 font-thin">
        <Link
          to={"/home"}
          className={`hover:text-orange-400 ${
            location.pathname === "/home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className={`hover:text-orange-400 ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to={"/main"}
          className={`hover:text-orange-400 ${
            location.pathname === "/main" ? "active" : ""
          }`}
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
