import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

import Hover from "./Hover";

const letters = ["T", "o", "o", "l", "s"];

const skills = {
  frontEnd: {
    front:
      "React | Redux | JavaScript | HTML | CSS | Tailwind CSS | Styled Components | Sass ",
    title: "FrontEnd",
  },
  backEnd: {
    front: "Node.js | Express.js | MongoDB | MySQL | Jest",
    title: "BackEnd",
  },
  devOps: {
    front: "Docker | Kubernetes | CI/CD | AWS",
    title: "DevOps",
  },
  versionControl: {
    front: "Git | GitHub",
    title: "Version Control",
  },
  uiUx: {
    front: "Figma | Canva",
    title: "UI/UX",
  },
};

function Tools() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({});
    t1.from([".tool"], {
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".tool",
        start: "40% 90%",
        end: "80% 70% ",
        scrub: true,

        // markers: true,
      },
      duration: 1,
      //   opacity: 0,
      // delay: 0.4,
      scrub: "true",
      translateX: "120",
      // stagger: 0.2,
      ease: "power1.Out",
    }).from([".skill"], {
      scrollTrigger: {
        // once: true,
        trigger: ".skill",
        start: "40% 95%",
        end: "80% 50% ",
        // markers: true,
        scrub: true,
      },
      duration: 1,
      // opacity: 0,
      // delay: 0.3,
      scrub: "true",
      translateY: "120",
      // rotate : -30,
      stagger: 1,
      ease: "power1.Out",
    });
  });
  return (
    <div className="mx-[5vw] md:mx-[10vw] my-[1vw] md:flex flex-col relative overflow-hidden">
      <div className="flex flex-col ">
        <div className="mb-10 h-[12vw] flex bf font-bold ">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="text-[10vw] overflow-hidden inline-block y"
            >
              <span className="tool inline-block ">{letter}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="my-4 md:flex md:gap-8 flex gap-5  flex-col  ">
        {Object.keys(skills).map((key, index) => (
          <div key={index} className="container overflow-hidden">
            <div className="skill overflow-hidden">
              <Hover front={skills[key].front}>{skills[key].title}</Hover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
