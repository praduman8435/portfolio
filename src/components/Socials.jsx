import React, { useEffect, useRef } from "react";

function Social() {
  return (
    <div className="mx-[5vw] md:mx-[10vw]">
      
      <div className="flex flex-col leading-3 ">
        <div className="md:text-[6vw] text-3xl">
          LET'S TALK
        </div>
        <div>
          <div className="text-5xl md:text-[10vw] y cursor-pointer md:mt-4 font-black ">REACH OUT</div> 
        </div>
        {/* <div className=" md:text-[10vw] text-4xl">LET'S TALK </div> */}
      </div>
      <div className="text-center mt-8">
        {/* Made with ❤️ in India */}

      </div>
    </div>
  );
}

export default Social;
