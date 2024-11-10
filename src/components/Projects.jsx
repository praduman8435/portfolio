import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Hover2 from "./Hover2";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".overlay", {
      opacity: 1,
      width: "100%",
      duration: 1,
      stagger: 0.2,
    }).from(".project-item", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  });

  // Project Data Array
  const projects = [
    {
      number: "01",
      title: "The Wild Oasis",
      to: "https://github.com/TheXro/Wild-Oasis",
      info: "A cabin booking app made in React with Redux Query, React Router, and styled components, using Supabase as backend.",
    },
    {
      number: "02",
      title: "Money Minded",
      to: "https://github.com/TheXro/mM_server.git",
      info: "A full-stack money and task manager app built with React, Node, Express, and MongoDB.",
    },
    {
      number: "03",
      title: "Fast Pizza",
      to: "https://github.com/TheXro/fast-pizza",
      info: "A pizza booking app built with React, Redux Toolkit, and React Router.",
    },
    {
      number: "04",
      title: "Corn Chan",
      to: "https://github.com/TheXro/chatApp",
      info: "A chat web app developed with socket.io.",
    },
  ];

  return (
    <div
      className="md:flex flex-col relative overflow-hidden mx-[5vw] md:mx-[10vw] mt-[1vw] pb-28"
      id="projects"
    >
      <h1 className="text-[10vw] project relative y">
        Projects
        <span className="overlay absolute opacity-90 top-0 left-0 bg-[#000] w-0 h-full z-10"></span>
      </h1>

      <section className="w-full mt-4">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <Hover2 number={project.number} to={project.to} info={project.info}>
              {project.title}
            </Hover2>
            {index < projects.length - 1 && (
              <div className="w-full h-[1px] my-3 bg-white"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
