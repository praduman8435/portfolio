import React, { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import styles

function Social() {
  const scrollRef = useRef(null); // Using useRef instead of createRef

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Cleanup function to kill the scroll instance
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="pp h-[150vh] text-center">
      <div className="scroll h-[200vh]" ref={scrollRef}>
        <h1 data-scroll data-scroll-speed="9" data-scroll-position="top">
          Locomotive Scroll in React
        </h1>
        <h2
          data-scroll
          data-scroll-speed="9"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          Ima go sideways
        </h2>
      </div>
    </div>
  );
}

export default Social;
