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
        end: "bottom 80%",
        scrub: 1,
        // markers: true,
      },
    })
      tl.from([".overlay"], {
        // y: 200,
        opacity: 100,
        width: "100%",
      duration: 1,
      stagger: 0.2,
    });
  })
  return (
    <div className="md:flex flex-col relative overflow-hidden h-scren mx-[5vw] md:mx-[10vw] my-[1vw] pb-28">
        <h1 className="text-[10vw] y project relative">Projects <span className="overlay absolute opacity-90 top-0 left-0 bg-[#111] w-0 h-full z-10 "></span></h1>
      <section className="w-full bg-white">
            <Hover2 number="/1." to='https://www.github.com'> Project 1 </Hover2>
            <Hover2 number="/2." to='https://www.github.com'> Project 2 </Hover2>
            <Hover2 number="/3." to='https://www.github.com'> Project 3 </Hover2>
            <Hover2 number="/4." to='https://www.github.com'> Project 4 </Hover2>
            <Hover2 number="/5." to='https://www.github.com'> Project 5 </Hover2>
        </section>
    </div>
  );
}

export default Projects;
