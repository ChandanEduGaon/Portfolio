import React, { useState } from "react";
import Hero from "../common/Hero";
import Project from "../common/Project";

const Projects = () => {
  const [project_no, setProject_no] = useState(0);
  const updateProject_no = (newValue) => {
    if (newValue < projects.length) {
      setProject_no(newValue);
    } else {
      setProject_no(0);
    }
  };
  const projects = [
    {
      align: "1",
      image:
        "https://img.freepik.com/premium-photo/3d-render-store-with-blue-awning-that-says-store-it_484798-8.jpg?w=360",
      title: "Shoping Web Application.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus",
    },
    {
      align: "0",
      image:
        "https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog=",
      title: "Blog Web Application.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus",
    },
    {
      align: "1",
      image:
        "https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1.5x/cbbc/8-top-tips-for-back-to-school.jpg",
      title: "School Web Application.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet consectetur adipisicing elit. Repellendus, sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus",
    },
  ];
  const project = projects[project_no];

  return (
    <div className="w-screen h-[80%] overflow-auto">
      <Hero />
      <div className="w-screen flex justify-center items-center overflow-auto flex-wrap">
        <div className="w-[100%] flex justify-center items-center flex-wrap relative my-20">
          {
            <Project
              key={project_no}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          }
          <span
            className="w-10 h-10 rounded-full bg-slate-400 bg-opacity-25 flex justify-center items-center absolute left-2 md:left-20 cursor-pointer top-48"
            onClick={() => updateProject_no(project_no + 1)}
          >
            <box-icon name="left-arrow-alt" color="#ffffff"></box-icon>
          </span>
          <span
            className="w-10 h-10 rounded-full bg-slate-400 bg-opacity-25 flex justify-center items-center absolute right-2 md:right-20 cursor-pointer top-48"
            onClick={() => updateProject_no(project_no + 1)}
          >
            <box-icon name="right-arrow-alt" color="#ffffff"></box-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
