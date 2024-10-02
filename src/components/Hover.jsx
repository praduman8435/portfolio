import React from "react";

function Hover({children}) {
  return (
    <div>
      <div className="">
        <div class="group relative bg-white text-[10vw] font-black">
          <h1 class="duration-150 group-hover:opacity-0 text-black y ">{children}</h1>
          <div class="absolute top-0 flex h-full w-full scale-y-0 items-center justify-center md:text-[5vw] bg-black font-black duration-500 ease-in-out group-hover:scale-y-100">
            <marquee
              speed="5"
              class="opacity-0 duration-500 group-hover:text-white group-hover:opacity-100"
            >
              {children} <span class="mx-10"></span>
              {children}
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
