import React, { useEffect, useState } from "react";
import Hero from "../common/Hero";
import Swal from "sweetalert2";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    document.title = "Contact";
  }, []);
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

  const fire = (status, msg) => {
    Toast.fire({
      icon: status === 200 ? "success" : "warning",
      title: msg === 'ok' ? "Message sent in successfully" : "Message not sent in successfully"
    });
  };
  const addContacts = async () => {
    if (name !== "" && email !== "") {
      try {
        const docRef = await addDoc(collection(db, "contacts"), {
          name: name,
          email: email,
          message: message
        });
        console.log("Document written with ID: ", docRef.id);
        fire(200, 'ok')
      } catch (e) {
        console.error("Error adding document: ", e);
        fire(500, "notOk");
      }
    } else {
      alert("Put your name and email please :)")
    }
  };
  return (
    <div className="w-screen h-[80%] overflow-auto">
      <Hero />
      <div className="w-[100%] h-[80%] flex sm:justify-center items-center">
        <div className="flex flex-col p-5 w-[100%] sm:w-[60%]">
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="name" className="text-sm mb-2">
              Name
            </label>
            <input
              id="name"
              className="border-none outline-none font-thin text-sm"
              type="text"
              placeholder="Enter your name..."
              onChange={(e) => {
                const name = e.target.value; // Get the input value
                setName(name); // Call the setName function with the input value
              }}
              required
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="email" className="text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              className="border-none outline-none font-thin text-sm"
              type="email"
              placeholder="Enter you email..."
              onChange={(e) => {
                const email = e.target.value; // Get the input value
                setEmail(email); // Call the setName function with the input value
              }}
              required
            />
          </span>
          <span className="border-[.1px] border-gray-400 flex flex-col p-3 w-[100%] rounded mb-2">
            <label htmlFor="message" className="text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="border-none outline-none font-thin text-sm resize-y"
              placeholder="Enter you message..."
              onChange={(e) => {
                const msg = e.target.value; // Get the input value
                setMessage(msg); // Call the setName function with the input value
              }}
              
            />
          </span>
          <button
            type="submit"
            className="bg-purple-500 w-[100%] rounded py-2 text-white my-5"
            onClick={addContacts}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
