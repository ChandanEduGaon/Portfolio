import React, { useState, useEffect } from "react";
import Hero from "../common/Hero";
import Service from "../common/Service";
import About from "./About";
import Exprience from "../common/Exprience";
import Card from "../common/Card";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const exp = [
    {
      c_color_1: "#0aa7ba",
      c_color_2: "#000",
      first_name: "Proclivity",
      last_name: "Digitech",
      designation: "Backend Developer",
      s_d: "2024-05-06",
      e_d: "Present",
      location: "Bidhannagar, Kolkata, India",
      des: "Here i am a Laravel Developer. I works on CRM softwares. I also works on API development for mobile applications.",
    },
    {
      c_color_1: "rgb(59, 130, 246)",
      c_color_2: "#000",
      first_name: "Build",
      last_name: "Formula",
      designation: "Laravel Developer",
      s_d: "2023-10-16",
      e_d: "2024-04-22",
      location: "Ahmedabad, Gujarat, India",
      des: "Here i am a Laravel Developer. I works on CRM, ERP software. I also works on API development. It`s my favourite company, peoples are so good.",
    },
    {
      c_color_1: "#000",
      c_color_2: "#000",
      first_name: "Stakkdev",
      last_name: "",
      designation: "PHP Developer",
      s_d: "2023-07-17",
      e_d: "2023-10-01",
      location: "Chandigarh, Punjab, India",
      des: "I was working as a PHP Developer and wordpress theme developer.Also worked on a react project. It`s a good company.",
    },
    {
      c_color_1: "rgb(249 115 22)",
      c_color_2: "#000",
      first_name: "Edugaon",
      last_name: "",
      designation: "PHP Developer",
      s_d: "2022-7-09",
      e_d: "2023-7-01",
      location: "Chapra, Bihar, India",
      des: "Here i learned so many things from  scratch. Like using mySql database php and i worked on laravel, codeigniter, api ect.Also worked on android development using KOTLIN. I used js and there frameworks and libraries like jquery, react, ect.",
    },
  ];
  const tech = [
    {
      title: "CRM",
      sub_title: "Get connected with your customers.",
      icon: "user-voice",
      iconType: "solid",
      iconColor: "orange",
      bgColor: "purple",
    },
    {
      title: "ERP",
      sub_title: "Mannage your all resources.",
      icon: "cube-alt",
      iconType: "solid",
      iconColor: "red",
      bgColor: "pink",
    },
    {
      title: "API",
      sub_title: "Mannage your all software with one Server.",
      icon: "cube-alt",
      iconType: "solid",
      iconColor: "purple",
      bgColor: "pink",
    },
  ];
  const skill = [
    {
      title: "PHP",
      sub_title: "1.5 years of experience.",
      icon: "php",
      iconColor: "blue",
      bgColor: "purple",
    },
    {
      title: "Laravel",
      sub_title: "Scalable web application development.",
      icon: "php",
      iconColor: "red",
      bgColor: "pink",
    },
    {
      title: "Codeigniter",
      sub_title: "Web application development.",
      icon: "php",
      iconColor: "red",
      bgColor: "gray",
    },
    {
      title: "Javascript",
      sub_title: "Extended Web application development.",
      icon: "nodejs",
      iconColor: "lightblue",
      bgColor: "black",
    },
    {
      title: "jQuery",
      sub_title: "UI/UX development.",
      icon: "jquery",
      iconColor: "blue",
      bgColor: "skyblue",
    },
    {
      title: "MySql",
      sub_title: "Database management.",
      icon: "data",
      iconColor: "orange",
      iconType: "solid",
      bgColor: "#e87978",
    },
    {
      title: "React",
      sub_title: "No reload anymore.",
      icon: "react",
      iconColor: "black",
      bgColor: "#e46928",
    },
    {
      title: "Bootstrap",
      sub_title: "Easy UI/UX design.",
      icon: "bootstrap",
      iconColor: "purple",
      bgColor: "#1555",
    },
    {
      title: "Tailwind",
      sub_title: "Easy UI/UX design.",
      icon: "tailwind-css",
      iconColor: "lightblue",
      bgColor: "#895555",
    },
  ];
  return (
    <div className="w-screen h-[80%] overflow-auto ">
      <Hero />
      <div className="w-[100%] h-[15%] flex flex-col justify-center items-center">
        <span className="text-sm font-thin border-b border-dashed">
          Experience
        </span>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-wrap relative ">
        {exp.map((item, index) => (
          <Exprience
            key={index}
            c_color_1={item.c_color_1}
            c_color_2={item.c_color_2}
            first_name={item.first_name}
            last_name={item.last_name}
            degignation={item.designation}
            s_d={item.s_d}
            e_d={item.e_d}
            location={item.location}
            des={item.des}
          />
        ))}
      </div>
      <div className="w-[100%] h-[15%] flex flex-col justify-center items-center">
        <span className="text-sm font-thin border-b border-dashed">Tech</span>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-wrap relative ">
        {tech.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            iconType={item.iconType}
            sub_title={item.sub_title}
            icon={item.icon}
            iconColor={item.iconColor}
            bgColor={item.bgColor}
          />
        ))}
      </div>
      <div className="w-[100%] h-[15%] flex flex-col justify-center items-center">
        <span className="text-sm font-thin border-b border-dashed">
          Languages & Skills
        </span>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-wrap relative ">
        {skill.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            iconType={item.iconType}
            sub_title={item.sub_title}
            icon={item.icon}
            iconColor={item.iconColor}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
