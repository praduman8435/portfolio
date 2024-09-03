import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
        scrollTrigger: {
            // toggleActions: "play pause complete complete",
            trigger: ".about",
            start: "30% 100%",
            end: "70% 80% ",
            // markers: true,
          }

    });
    t1.from([".about1, .about2, .about3, .about4, .about5"], {
      duration: 0.3,
    //   opacity: 0,
    //   delay: 0.4,
      translateY: "150",
      stagger: 0.1,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <div className="mx-[10vw] flex gap-24"  id="about">
        <div className="about h-[11vw] w-[180vw] overflow-hidden flex ">
          <span className="text-[10vw] inline-block y about1 ">I</span>
          <span className="text-[10vw] inline-block y about2 ">n</span>
          <span className="text-[10vw] inline-block y about3 ">t</span>
          <span className="text-[10vw] inline-block y about4 ">r</span>
          <span className="text-[10vw] inline-block y about5 ">o</span>
        </div>

        <div className=" h-screen pt-[10vw] flex items-center">
          <div className="text-[3vw] leading-none ">
            With a blend of technical expertise and design sensibility, I bring
            a unique approach to building and designing web applications that
            not only function flawlessly but also captivate users.
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
