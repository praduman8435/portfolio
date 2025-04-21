import React from "react";
import Mover from "./Mover";
function Strips() {
  return (
    <>
      <div className="my-[25vw] md:mb-[25vw] md:mt-0">
        <div className="">
          <div className="opacity-30 overflow-hidden absolute origin-center -rotate-[4deg] w-[100%] -left-4 ">
            <Mover
              className="strip1"
              item1={" Terraform"}
              item2={" Jenkins"}
              item3={" Amazon Web Services"}
            />
          </div>
          <div className="origin-center overflow-clip  absolute -left-4 rotate-[6deg] w-[110%]">
            <Mover
              item3={" Terraform"}
              item1={" DevOps Engineer"}
              item2={" Kubernetes"}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Strips;
