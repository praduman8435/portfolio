import React, { useEffect }  from "react";
function Navbar() {


  // useGSAP( () => {
  //   gsap.from(".logo", {
  //     delay:.4,
  //     duration: 1,
  //     x: -100,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //   });
  //   gsap.from("nav ul", {
  //     duration: 1,
  //     y: -100,
  //     opacity: 0,
  //     ease: "power1.inOut",
  //   });
  //   gsap.from(".btn-43", {
  //     duration: 1,
  //     opacity: 0,
  //     x:100,
  //     ease: "power1.inOut",
  //   });
  // });

  return (
    <>
      <nav className="mx-[10vw] py-16 flex items-center z-[999] " >
        <div className="logo text-3xl grow y">Ry.</div>
        <ul className=" flex gap-12 grow ">
          <a href="#home" className="group transition duration-300 ">
            Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#about" className="group transition duration-300">
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
          {/* <a className="group transition duration-300">
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a> */}
        </ul>
        <div data-cursor-stick='#stick-me'>

        <button id="stick-me"  class="btn41-43 btn-43">Get in Touch</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
