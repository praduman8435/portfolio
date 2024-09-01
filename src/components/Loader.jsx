import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Loader() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    t1.to('#layout',{
      duration: 0.1,
      css: { height: "100vh", overflowY: "hidden" },
      ease: "power3.inOut",
    })
    .from(["#title1", "#title2", "#title3"], {
      duration: 1,
      y: "30",
      opacity: 0,
      stagger: 0.5,
      ease: "power1.inOut",
    })
      .to(["#title1", "#title2", "#title3"], {
        opacity: 0,
        y: "-30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        duration: 1.3,
        height: 0,
        y: "-100%",
        ease: "power1.inOut",
      })
      .to("#layout", {
        duration: 0.1,
        css: { height: "100%", overflowY: "auto" },
        ease: "power3.inOut",
      })
      .to(".strip", {
        scrollTrigger: {
          toggleActions: "play none none none",
          trigger: ".strip",
          start: "50% 100%",
          end: "250% 100% ",
          scrub: true,
          // markers: true,
        },
        // x: "-50vw",
        // delay: 10,
        translateX: "-20%",
      });
  });

  return (
    <>
      <div className="relative m-0 p-0">
        <div
          id="intro-slider"
          className="m-0 p-0 absolute h-screen w-full flex flex-col justify-center items-center bg-black z-10 border-b-2 border-[#c3ff00]"
        >
          <h1 className="text-9xl bg-transparent text-[#c3ff00]" id="title1">
            Gamer
          </h1>
          <h1 className="text-9xl bg-transparent text-[#c3ff00]" id="title2">
            Web Developer
          </h1>
          <h1 className="text-9xl bg-transparent text-[#c3ff00]" id="title3">
            UI/UX Designer
          </h1>
        </div>
      </div>
    </>
  );
}

export default Loader;
