import React from "react";
import Strips from "./Strips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import Intro from "./Intro";
import String from "./String";
import Projects from "./Projects";
import Education from "./Education";
import Tools from "./Tools";
import Social from "./Socials";

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
        </div>
      </div>
      <Intro />
      <String />
      <Tools />
      <String />
      <Projects />
      <String />

      <Social />
      {/* <Education/> */}
    </div>
  );
}

export default Layout;
