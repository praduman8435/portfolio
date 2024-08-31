import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Loader() {
  const comp = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(["#title1", "#title2", "#title3"], {
        duration: 1,
        y: "30", 
        opacity: 0,
        stagger: 0.5,
        ease: "power1.inOut",
      }).to(["#title1", "#title2", "#title3"], {
        opacity: 0,
        y: "-30",
        delay: 0.3,
        stagger: 0.5, 
      }).to("#intro-slider", {
        duration: 1.3,
        yPercent: "100",
        delay: 0.3,
        ease: "power1.inOut",
      })
  });

  return (
    <>
      <div className="relative m-0 p-0">
        <div id="intro-slider" className="m-0 p-0 absolute h-screen w-full flex flex-col justify-center items-center bg-white z-10 ">
          <h1 className="text-9xl bg-transparent text-black" id="title1">
            Software Engineer
          </h1>
          <h1 className="text-9xl bg-transparent text-black" id="title2">
            Web Developer
          </h1>
          <h1 className="text-9xl bg-transparent text-black" id="title3">
            UI/UX Designer
          </h1>
        </div>
      </div>
    </>
  );
}

export default Loader;
