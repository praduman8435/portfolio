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
    return `${hours}:${minutes}:${seconds}`;
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
      <div className="mx-[10vw] my-36 flex relative">
        <div className="grow">
          <h1 className=" font-black text-[8vw] z-10">Ravi Yadav</h1>
          <p className="text-xl opacity-50 w-[50%] lg:my-[-35px] md:my-0 ">
            Full Stack Web Developer & UI designer | Crafting Seamless Digital
            Experiences
          </p>
          {/* <p className="text-xl my-12 opacity-50 w-[50]">
            Crafting Digital Experiences with Precision and Passion.
          </p> */}
        </div>
        <div className="w-[484px] h-[660px] absolute left-[50%] bottom-[-28%] me backdrop-contrast-200 ` "></div>
        <div className="">
          <p className=" text-right w-44">
            Currently available for freelance projects
          </p>
          <p className="mt-40 text-right w-44">
            Based in <br /> India
          </p>
          <p className="mt-40 text-right w-44">
            {formatTime(time)} <br /> <span>{time.getFullYear()}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
