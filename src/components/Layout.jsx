import React from "react";
import Strips from "./Strips";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";

function Layout() {
  return (
    <div id="layout" className="overflow-y-hidden h-screen">
      <Loader />
      <div className="relative">
        <Navbar />
        <Hero />
        <Strips />
        <h1 className=" h-screen text-9xl"></h1>
      </div>
    </div>
  );
}

export default Layout;
