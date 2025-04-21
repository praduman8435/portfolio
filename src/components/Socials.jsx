import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";

function Social() {
  const handleClick = () => {
    window.open("mailto:r.praduman.cnd@gmail.com");
  };



  return (
    <div className="mx-[5vw] md:mx-[10vw]">
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <div className="md:text-[6vw] text-3xl">LET'S CONNECT</div>
          <div className="">
            <div
              onClick={handleClick}
              className="text-5xl stroke w-fit md:text-[10vw] y cursor-pointer md:mt-4 font-black relative  "
            >
              REACH OUT
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:py-6 items-end">
          <a
            href="https://github.com/praduman8435"
            target="_blank"
            className="group transition duration-300"
          >
            Github
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/praduman-prajapati/"
            target="_blank"
            className="group transition duration-300"
          >
            Linkedin
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a
            href="https://x.com/CndTwtprad"
            target="_blank"
            className="group transition duration-300"
          >
            Twitter
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a
            href="https://itspraduman.hashnode.dev/"
            target="_blank"
            className="group transition duration-300"
          >
            Hashnode
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center  my-8 text-xs md:text-sm ">
      <div className="">©praduman </div>
        <div className="">Made with 🖤 </div>
        <div className="">India </div>
      </div>
    </div>
  );
}

export default Social;
