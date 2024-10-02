import React from "react";
import Strips from "./Strips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import Intro from "./Intro";
import String from "./String";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Tools from "./Tools";

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
      <Tools/>
      <Blogs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Layout;
