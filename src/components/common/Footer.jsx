import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[10%] flex justify-center items-center">
      <div className="w-[100%] flex justify-end items-center">
        <span className="flex gap-1 mx-10">
          <span className="font-thin me-5">Get in touch</span>
          <a href="mailto: singh963130@gmail.com">
            <box-icon name="gmail" type="logo" color="#000"></box-icon>
          </a>

          <a
            href="https://github.com/ChandanEduGaon"
            target="_blank"
            className=""
          >
            <box-icon type="logo" name="github" color="#000"></box-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-singh-2b6020280/"
            target="_blank"
            className="flex relative"
          >
            <box-icon
              type="logo"
              name="linkedin-square"
              color="#000"
            ></box-icon>
            <span className={`relative flex h-2 w-2`}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
