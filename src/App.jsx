import "./App.css";
import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const scrollRef = React.createRef();
  setTimeout(() => {
  }, 2000);
  useLayoutEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  }, []);
  
  return (
    <div ref={scrollRef}>
      <Navbar />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}

export default App;
