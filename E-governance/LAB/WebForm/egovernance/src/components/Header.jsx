import React from "react";
import { image2, image3 } from "../assets/assets";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <img
          src={image2}
          className="w-full h-[100vh] relative z-10 opacity-50"
          alt=""
        />
        <div className="absolute z-50 text-secondary lg:mt-[-15rem] max-sm:mt-[-7rem]">
          <div className="flex flex-row items-center justify-between lg:gap-[10rem] max-sm:flex-col">
            <p className=" font-bold text-2xl lg:mt-[-12rem] lg:ml-4 max-sm:text-sm max-sm:px-4 max-sm:py-5 max-sm:whitespace-pre-wrap text-primary ">
              The first COVID-19 case in Nepal was reported in January 2020 in a
              Nepalese man who had returned from Wuhan to Nepal.As of May 2022,
              a total of 979,140 cases and 11,951 deaths associated with
              COVID-19 have been reported in Nepal
            </p>

            <img src={image3} className="lg:mr-[2rem] max-sm:w-[80vh]" alt="" />
          </div>
          <div className="flex flex-row gap-5 lg:ml-5 lg:mt-[-10rem] justify-start max-sm:justify-center font-mono max-sm:mt-2">
            <Button
              value="Donate Now"
              className="bg-secondary rounded-lg px-3 py-1 text-black hover:text-secondary hover:bg-primary "></Button>
            <Button
              value="Learn More"
              className="bg-primary rounded-lg px-3 py-1 hover:text-primary hover:bg-secondary"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
