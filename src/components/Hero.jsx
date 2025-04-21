import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import Mover from "./Mover";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "10% 25%",
        end: "bottom 10%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.to([".name", ".underdog"], {
      y: 200,
      duration: 0.5,
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
      tl.to([".side"], {
        x: 150, // Translate along x-axis
        duration: 0.5,
        opacity: 0,
      });
    } else {
      tl.to([".side"], {
        opacity: 0,
        y: 50, // Translate along y-axis
        duration: 1,
      });
    }
  }, []);

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()]; // Month starts from 0
  };

  return (
    <div className="" id="home">
      <div className="mx-[5vw] md:mx-[10vw] md:my-36 my-[18vw] md:flex relative overflow-hidden">
        <div className="grow">
          <div className=" font-black text-6xl md:text-[7vw] overflow-hidden">
            <div className="name">Praduman <span style={{ color: "#5BEB3D" }}>Prajapati</span></div>
          </div>
          <div className="md:text-xl opacity-50 w-[80%] md:w-[70%] lg:w-[50%] overflow-hidden ">
            <div className="underdog">
              <div className="inline">
                DevOps & Cloud Engineer 
              </div>
              <div className="inline">
                | Transforming Code into Cloud-Native Realities 
              </div>
            </div>
          </div>
          {/* <p className="text-xl my-12 opacity-50 w-[50]">
            Crafting Digital Experiences with Precision and Passion.
          </p> */}
        </div>
        <div className="text-sm mt-20 md:mt-0 ">
          <div className="flex md:inline-block gap-[15vw] side">
            <p className="md:text-right md:w-44">Based in India</p>
            <p className="md:mt-40 md:text-right md:w-44">
              Currently available for freelance projects
            </p>
            <p className="md:mt-40 md:text-right md:w-44">
              {formatTime(time)} <br /> <span>{time.getFullYear()}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
