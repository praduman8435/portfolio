import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {

  useGSAP( () => {
    gsap.from(".logo", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from("nav ul", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".btn-43", {
      duration: 1,
      opacity: 0,
      x:100,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <nav className="mx-40 my-16 flex items-center  ">
        <div class="logo text-3xl grow">RY.</div>
        <ul className=" flex gap-12 grow">
          <a className="group transition duration-300 ">
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            Blog
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            Projects
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </ul>
        <a class="btn41-43 btn-43">Get in Touch</a>
      </nav>
    </>
  );
}

export default Navbar;
