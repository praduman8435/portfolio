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
      </div>
        <Intro />
        <String />
    </div>
  );
}

export default Layout;
