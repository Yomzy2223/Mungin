import React from "react";
import green from "../../assets/Union.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // parent container
    <div className="flex md:flex-row justify-between pb-6 flex-col sm:items-center">
      {/* left container */}
      <div className="md:w-1/2 flex flex-col mt-12 md:text-left text-center w-full">
        <h1 className="text-[#313131] text-4xl font-bold">
          Growing <span className="text-[#83BF4F]">Agricultural</span> Data For
          immediate Impact
        </h1>
        <p className="mt-7 text-[#565656]">
          We transform data to actionable insights that power decision making
          across the agricultural value chain. Delivering innovative Agtech
          Solutions to improve agricultural productivity in Nigeria is our
          ethos.{" "}
        </p>
        {/* button and link */}
        <div className="space-x-6 mt-10">
          <Link to={"/database"}>
            <button className=" bg-[#17233C] p-3 mb-3 text-white px-4 rounded-md">
              Search Our Database
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="text-[#375A1A]">Join Us</button>
          </Link>
        </div>
      </div>

      {/* right container */}
      <div className="mt-6 pt-10 mb-8  ">
        <img src={green} alt="right" />
      </div>
    </div>
  );
};

export default Hero;
