import React, { useEffect, useState } from "react";
import Mover from "./Mover";

function Hero() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const getMonthName = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()]; // Month starts from 0
  };

  return (
    <div className="" id="home">
      <div className="mx-[5vw] md:mx-[10vw] md:my-36 my-[18vw] md:flex relative">
        <div className="grow">
          <h1 className=" font-black text-6xl md:text-[8vw] z-10">Ravi Yadav</h1>
          <p className="md:text-xl opacity-50 w-[80%] md:w-[70%] lg:w-[50%]  ">
            Full Stack Web Developer & UI designer | Crafting Seamless Digital
            Experiences
          </p>
          {/* <p className="text-xl my-12 opacity-50 w-[50]">
            Crafting Digital Experiences with Precision and Passion.
          </p> */}
        </div>
        <div className="flex md:inline gap-[15vw] text-sm mt-20 md:mt-0 ">
          <p className="md:text-right md:w-44">
            Based in  India
          </p>
          <p className="md:mt-40 md:text-right md:w-44">
            Currently available for freelance projects
          </p>
          <p className="md:mt-40 md:text-right md:w-44">
            {formatTime(time)} <br /> <span>{time.getFullYear()}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
