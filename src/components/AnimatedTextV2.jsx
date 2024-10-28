import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function AnimatedTextV2({ text, id }) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const [wrappedWords, setWrappedWords] = useState([]);

  useEffect(() => {
    // Split the text into words and then into characters
    const words = text.split(" ").map((word, index) => {
      return (
        <span className="word" key={word+index}>
          {word.split("").map((char, index) => (
            <span className="char" key={index*Math.random()}>
              {char}
            </span>
          ))}
          <span className="space">{"\u00A0"}</span>{" "}
          {/* For spacing between words */}
        </span>
      );
    });

    setWrappedWords(words);
  }, [text]);

  useEffect(() => {
    // Create masks for animation
    const charElements = ref.current.querySelectorAll(".char");
    charElements.forEach((char) => {
      const mask = document.createElement("div");
      mask.className = "letter-mask";
      char.appendChild(mask);
    });

    const allMasks = Array.from(ref.current.querySelectorAll(".letter-mask"));
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "150% 80%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(allMasks, {
      opacity: 0,
      duration: 2,
      stagger: 0.1,
      delay: 0.5,
      // ease: 'power2.inOut',
    });
  }, [wrappedWords]); // Trigger animation when wrappedWords change

  return (
    <div>
      <div ref={ref}>{wrappedWords}</div>
    </div>
  );
}

export default AnimatedTextV2;
