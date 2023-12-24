import React, { useState, useEffect } from "react";
import Tooltip from "../common/Tooltip";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Chandan = () => {
  let currentDate = null;
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [des, setDes] = useState("");
  const [amount, setAmount] = useState(0);
  const [place, setPlace] = useState("");

  const deleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteDoc(doc(db, "events", id));
        showErrors("Deleted successfully!", true);
      } catch (error) {
        console.log("Error removing document: ", error);
      }
    }
  };
  const showErrors = (errors, success) => {
    setErrorMsg(
      `<span style="color: ${
        success ? "#00c61c" : "#ff0000"
      }; background-color: ${
        success ? "rgba(0, 128, 0, 0.2)" : "rgba(128, 0, 0, 0.2)"
      }; padding: 10px; font-size: 12px;border-radius: 2px;"
      >${errors}
      </span>`
    );
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    await getDocs(collection(db, "events")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(newData);
    });
  };
  useEffect(() => {
    fetchData();
  }, [modal, deleteEvent]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setErrorMsg(error.message);
          }
        );
      } else {
        setErrorMsg("Geolocation is not supported by your browser.");
      }
    };
    getLocation();
  }, []);
  const addEvent = async () => {
    if (
      name !== "" &&
      date !== "" &&
      des !== "" &&
      place !== "" &&
      amount !== "0"
    ) {
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      try {
        const docRef = await addDoc(collection(db, "events"), {
          name: name,
          date: date,
          default_date: formattedDateTime,
          spent: amount,
          location: place,
          latitude: latitude,
          longitude: longitude,
          des: des,
        });
        console.log("Document written with ID: ", docRef.id);
        showErrors("Added successfully!", true);
        setName("");
        setAmount("");
        setDate("");
        setDes("");
        setModal(false);
      } catch (e) {
        showErrors("Added failed!", true);
      }
    } else {
      alert("Put value in all feilds please :)");
    }
  };

  return (
    <>
      <div className="about w-screen h-[80%] relative">
        {/* Events */}
        <div className="text-black p-5 h-[100%] overflow-auto">
          {events.map((item, index) => {
            const eventDate = item.default_date.split(", ")[0];
            const showDate = eventDate !== currentDate;
            currentDate = eventDate;
            const dateTime = new Date(item.default_date);
            const formattedDate = dateTime.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            });

            const formattedTime = dateTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });
            return (
              <div key={index}>
                {showDate && (
                  <span className="text-white text-[10px] py-1 px-3 bg-blue-500 rounded-full -ml-1">
                    {formattedDate}
                  </span>
                )}
                <div
                  className={`flex justify-between items-center border-l border-black relative my-5`}
                >
                  <span className="absolute w-3 h-3 bg-yellow-500 rounded-full top-0 -left-1.5"></span>
                  <span className="absolute -top-2.5 left-10 flex flex-col">
                    <span className="text-2xl font-bold mb-1">{item.name}</span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <Tooltip text="What was the time.">
                        <span className="cursor-pointer relative bg-blue-500 text-white rounded-full px-2 flex items-center">
                          <span className="mr-1">⏲</span>
                          <span className="font-bolder text-[10px]">
                            {formattedTime}
                          </span>
                        </span>
                      </Tooltip>
                      <Tooltip text="How much you spent.">
                        <span className="cursor-pointer relative bg-purple-500 text-white rounded-full px-2 flex items-center">
                          <span className="mr-1">₹</span>
                          <span className="font-bolder text-[13px]">
                            {item.spent}/-
                          </span>
                        </span>
                      </Tooltip>
                      <Tooltip text="Location of the place where it was happend.">
                        <span className="cursor-pointer relative bg-sky-400 text-white rounded-full px-2 flex items-center">
                          <span className="mr-1">🗺️</span>
                          <span className="font-bolder text-[13px]">
                            <span className="text-[12px]">{item.location}</span>
                          </span>
                        </span>
                      </Tooltip>
                    </div>
                  </span>
                  <div className="w-full mt-16 pl-10 pb-5 flex justify-between items-center">
                    <span className="text-[13px] opacity-0 md:opacity-100">
                      {item.des}
                      <span className="border p-1 pointer-events-auto border-dashed hidden">
                        {item.latitude + ", " + item.longitude}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating action Button */}
        <div className="absolute bottom-10 right-20 flex gap-2">
          <span
            className={`bg-blue-500 w-10 h-10 rounded-full  cursor-pointer flex justify-center items-center hover:bg-blue-600 ${
              modal ? "" : ""
            }`}
            onClick={() => setModal(true)}
          >
            <box-icon name="plus" color="#fff"></box-icon>
          </span>
          <span
            className={`bg-blue-500 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center hover:bg-blue-600 ${
              modal ? "" : ""
            }`}
            onClick={() => setModal2(true)}
          >
            <box-icon name="search-alt-2" color="#fff"></box-icon>
          </span>
        </div>

        {/* Form */}
        <div
          className={`modal ${
            modal ? "modal-show" : "modal-hide"
          } absolute w-[100%] h-[100%] top-0 left-0 bg-black/60 z-40 p-10`}
        >
          <div className="bg-white p-10 rounded-md relative">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-black"></span>
                <h1 className="text-3xl">Create your event here!</h1>
              </div>
              <div className="col-span-2">
                <label className="block">
                  <span className="block text-sm font-medium text-black mb-1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="px-2 py-2 outline-none rounded-md border"
                    value={name}
                    onChange={(e) => {
                      const name = e.target.value; // Get the input value
                      setName(name); // Call the setName function with the input value
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="block">
                  <span className="block text-sm font-medium text-black mb-1">
                    Date
                  </span>
                  <input
                    type="date"
                    value={new Date().toISOString().split("T")[0]}
                    className="pl-2 py-2 outline-none rounded-md border"
                    onChange={(e) => {
                      const i_date = e.target.value; // Get the input value
                      setDate(i_date); // Call the setName function with the input value
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="block">
                  <span className="block text-sm font-medium text-black mb-1">
                    Location
                  </span>
                  <input
                    type="text"
                    className="px-2 py-2 outline-none rounded-md border"
                    value={place}
                    onChange={(e) => {
                      const i_place = e.target.value; // Get the input value
                      setPlace(i_place); // Call the setName function with the input value
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-span-2">
                <label className="block">
                  <span className="block text-sm font-medium text-black mb-1">
                    Spent Amount
                  </span>
                  <input
                    type="text"
                    className="px-2 py-2 outline-none rounded-md border"
                    value={amount}
                    onChange={(e) => {
                      const name = e.target.value; // Get the input value
                      setAmount(name); // Call the setName function with the input value
                    }}
                    onKeyDown={(e) => {
                      if (!/[0-9 Backspace]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-span-4">
                <label className="block">
                  <span className="block text-sm font-medium text-black mb-1">
                    Description
                  </span>
                  <textarea
                    className="w-[100%] pl-2 py-2 resize-y outline-none rounded-md border"
                    value={des}
                    onChange={(e) => {
                      const i_des = e.target.value; // Get the input value
                      setDes(i_des); // Call the setName function with the input value
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-span-4 flex justify-between items-center gap-5">
                <div
                  className="showErrors"
                  dangerouslySetInnerHTML={{ __html: errorMsg }}
                ></div>
                <div className="flex justify-end items-center gap-5">
                  <button
                    onClick={() => setModal(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white py-2 text-sm px-5 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => addEvent()}
                    className="bg-sky-500 hover:bg-sky-400 text-white py-2 text-sm px-4 rounded-full"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <div
          className={`modal ${
            modal2 ? "modal-show" : "modal-hide"
          } absolute w-[100%] h-[100%] top-0 left-0 bg-black/60 z-40 p-10`}
          id="list"
        >
          <div className="grid grid-cols-4 gap-4 bg-white p-10 rounded-md">
            <div className="col-span-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-black"></span>
              <h1 className="md:text-3xl text-sm">
                Listing your all event here!
              </h1>
            </div>
            <div className="col-span-4 h-[400px] md:h-[300px] overflow-y-scroll">
              <table class="w-full">
                <thead>
                  <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white sticky top-0">
                    <th class="px-5 py-3">ID</th>
                    <th class="px-5 py-3">Name</th>
                    <th class="px-5 py-3">Location</th>
                    <th class="px-5 py-3">Created at</th>
                    <th class="px-5 py-3">Action</th>
                  </tr>
                </thead>

                <tbody class="text-gray-500">
                  {events.map((item, index) => (
                    <tr key={index}>
                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p class="whitespace-no-wrap">{index + 1}</p>
                      </td>
                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div class="flex items-center">
                          <div class="ml-1">
                            <p class="whitespace-no-wrap">{item.name}</p>
                          </div>
                        </div>
                      </td>
                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p class="whitespace-no-wrap">{item.location}</p>
                      </td>
                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p class="whitespace-no-wrap">{item.default_date}</p>
                      </td>

                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span
                          onClick={() => deleteEvent(item.id)}
                          class="cursor-pointer rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-gray-900"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-4 flex justify-between items-center">
              <div
                className="showErrors"
                dangerouslySetInnerHTML={{ __html: errorMsg }}
              ></div>
              <button
                onClick={() => setModal2(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 text-sm px-5 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chandan;
