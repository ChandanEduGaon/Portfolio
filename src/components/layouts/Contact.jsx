import React, { useState } from "react";
import Hero from "../common/Hero";
import Swal from "sweetalert2";

const Contact = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const fire = () => {
    Toast.fire({
      icon: "success",
      title: "Message sent in successfully",
    });
  }
  return (
    <div className="w-screen h-[80%] overflow-auto">
      <Hero />
      <div className="w-[100%] h-[80%] flex sm:justify-center items-center">
        <div className="flex flex-col p-5 w-[100%] sm:w-[60%]">
          <span className="border border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="name" className="text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Enter you name..."
            />
          </span>
          <span className="border border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="email" className="text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              className="border-none outline-none font-thin text-sm"
              type="email"
              placeholder="Enter you email..."
            />
          </span>
          <span className="border border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="message" className="text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="border-none outline-none font-thin text-sm resize-y"
              placeholder="Enter you message..."
            />
          </span>
          <button
            type="submit"
            className="bg-purple-500 w-[100%] rounded py-2 text-white my-5"
            onClick={fire}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
