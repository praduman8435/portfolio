import React, { useEffect }  from "react";
function Navbar() {

  return (
    <>
      <nav className="mx-[5vw] md:mx-[10vw]  py-16 flex items-center z-[999] nav " >
        <div className="logo text-3xl grow ">Tx.</div>
        <ul className="gap-12 grow hidden md:flex lg:flex ">
          <a href="#home" className="group transition duration-300 ">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#about" className="group transition duration-300">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            Blog
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a className="group transition duration-300">
            Projects
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          {/* <a className="group transition duration-300">
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a> */}
        </ul>
        <div data-cursor-stick='#stick-me'>

        <button id="stick-me"  className="  hidden md:block lg:block btn41-43 btn-43">Get in Touch</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
