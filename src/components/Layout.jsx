import React from "react";
import Strips from "./Strips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import Intro from "./Intro";
import String from "./String";

function Layout() {
  return (
    <div id="layout" className="overflow-hidden h-screen">
      <Loader />
      <div className="relative">
        <Navbar />
        <Hero />
        <Strips />
        <div className="pt-[20vw] md:py-0 relative">
          <String />{" "}
          <div className="absolute md:hidden top-[55%] text-center w-full capitalize text-[4vw]">
            results that exceeds expectations
          </div>
        </div>
      </div>
      <Intro />
      <String />
      <div className="">
        <div class="group relative bg-red-100 text-8xl font-black">
          <h1 class="duration-150 group-hover:opacity-0">Hello</h1>
          <div class="absolute top-0 flex h-full w-full scale-y-0 items-center justify-center bg-red-500 text-4xl font-black duration-500 ease-in-out group-hover:scale-y-100">
            <marquee
              speed="2"
              class="opacity-0 duration-500 group-hover:text-white group-hover:opacity-100"
            >
              Hello <span class="mx-10"></span>
              Hello
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
