import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
const Intro = () => {  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".about",
        start: "40% 100%",
        end: "70% 80% ",
        scrub: true,

        // markers: true,
      },
    });
    t1.from([".about1, .about2, .about3, .about4, .about5"], {
      duration: 0.3,
      //   opacity: 0,
      //   delay: 0.4,
      scrub: "true",
      translateY: "150",
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <div
        className="mx-[5vw] md:mx-[10vw] md:mt-[5vw] md:flex md:flex-col gap-24"
        id="about"
      >
        <div className="flex flex-col ">
          <div className="mb-10 about h-[11vw] w-[18 overflow-hidden flex bf ">
            <span className="text-[10vw] inline-block y about1 ">I</span>
            <span className="text-[10vw] inline-block y about2 ">n</span>
            <span className="text-[10vw] inline-block y about3 ">t</span>
            <span className="text-[10vw] inline-block y about4 ">r</span>
            <span className="text-[10vw] inline-block y about5 ">o</span>
          </div>
        </div>

        <div className="flex items-center para md:flex-row  ">
          <div className="text-2xl md:text-[3vw] leading-none para ">
          <AnimatedText text={`With a blend of technical expertise and design sensibility, I bring
            a unique approach to building and designing web applications that
            not only function flawlessly but also captivate users.`} id={3} />
          </div>
        </div>
        <div className="leading-5 tracking-wide flex my-10 overflow-hidden ">
          <p className="w-1/2"></p>
          <p className="w-1/2 text-right md:text-xl">
          <AnimatedText text={`With a blend of technical expertise and design sensibility, I bring
            a unique approach to building and designing web applications that
            not only function flawlessly but also captivate users.`} id={1} />
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Intro;

