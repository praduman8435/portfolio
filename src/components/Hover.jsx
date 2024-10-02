import React from "react";
import Marquee from "react-fast-marquee";

function Hover({ front,children, styles, childrenStyles}) {
  return (
    <div>
      <div className="">
        <div className="group relative font-black">
          <h1 className={`duration-150 group-hover:opacity-0 text-black   ${styles}`}>{front}</h1>
          <div class="absolute top-0 flex scale-y-0 items-center justify-center bg-[#fff] font-black duration-500 ease-in-out group-hover:scale-y-100">
            <Marquee
              className={`opacity-0 duration-500 group-hover:text-[#111] group-hover:opacity-100 ${childrenStyles}`}
            >
              {children} <span className="mx-10"></span>
              {children}<span className="mx-10"></span>
              {children}<span className="mx-10"></span>
              {children}<span className="mx-10"></span>

            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
