import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import Hover from './Hover';


function Tools() {
    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     const t1 = gsap.timeline({
    //       scrollTrigger: {
    //         toggleActions: "play none none none",
    //         trigger: ".about",
    //         start: "40% 100%",
    //         end: "70% 80% ",
    //         scrub: true,
    
    //         // markers: true,
    //       },
    //     });
    //     t1.from([".about1, .about2, .about3, .about4, .about5"], {
    //       duration: 0.3,
    //       //   opacity: 0,
    //       //   delay: 0.4,
    //       scrub: "true",
    //       translateY: "150",
    //       stagger: 0.05,
    //       ease: "power1.inOut",
    //     });
    //   });
  return (
    <div className=' bg-zinc-300 mx-[5vw] md:mx-[10vw] md:my-36 my-[18vw] md:flex relative'>
        <h1 className='text-[10vw]'>Core Tools</h1>
        <Hover>hello</Hover> 
    </div>
  )
}

export default Tools