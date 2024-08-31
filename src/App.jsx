import "./App.css";
import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  
  const scrollRef = React.createRef();
  setTimeout(() => {
    useLayoutEffect(() => {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }, []);
  }, 2000);
  

  return (
    <>
      <div className="relative">
        <Loader />
        <div ref={scrollRef}>
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
