import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

import Hover from "./Hover";

function Tools() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".tool",
        start: "40% 100%",
        end: "70% 80% ",
        scrub: true,

        // markers: true,
      },
    });
    t1.from([".tool1, .tool2, .tool3, .tool4, .tool5"], {
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
    <div className="mx-[5vw] md:mx-[10vw] my-[1vw] md:flex flex-col relative h-screen ">
      <div className="flex flex-col ">
        <div className="mb-10 tool h-[11vw] w-[18 overflow-hidden flex bf ">
          <span className="text-[10vw] inline-block y tool1 ">T</span>
          <span className="text-[10vw] inline-block y tool2 ">o</span>
          <span className="text-[10vw] inline-block y tool3 ">o</span>
          <span className="text-[10vw] inline-block y tool4 ">l</span>
          <span className="text-[10vw] inline-block y tool5 ">s</span>
        </div>
      </div>
      <div className="md:flex gap-2">
        <div className="my-4 w-full">
          {/* <div className="text-2xl md:text-[3vw] mb-2">Javascript </div> */}
          <Hover front='JavaScript' styles="text-2xl md:text-[3vw] mb-2 text-white w-full"  >Adding interactivity and enhancing user experience.</Hover>
        </div>
      </div>
    </div>
  );
}

export default Tools;
