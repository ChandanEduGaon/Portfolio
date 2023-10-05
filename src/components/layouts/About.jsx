import React, { useEffect } from "react";
import Card from "../common/Card";
import Hero from "../common/Hero";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, [])
  const tech = [
    {
      title: "PHP",
      sub_title: "1.5 years of experience.",
      icon: "php",
      iconColor: "yellow",
      bgColor: "purple",
    },
    {
      title: "Laravel",
      sub_title: "Scalable web application development.",
      icon: "php",
      iconColor: "blue",
      bgColor: "pink",
    },
    {
      title: "Codeigniter",
      sub_title: "Web application development.",
      icon: "php",
      iconColor: "pink",
      bgColor: "gray",
    },
    {
      title: "Vanilla javascript",
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
      title: "Tailwind CSS",
      sub_title: "Easy UI/UX design.",
      icon: "tailwind-css",
      iconColor: "lightblue",
      bgColor: "#895555",
    },
  ];
  
  return (
    <div className="about w-screen h-[80%] overflow-auto">
      <Hero />
      <div className="w-screen h-[100%] flex justify-center items-center flex-wrap mt-10">
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
    </div>
  );
};

export default About;
