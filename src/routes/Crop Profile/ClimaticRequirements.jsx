import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import CProfile from "../../components/Reusable components/CProfile";

const ClimaticRequirements = () => {
  return (
    // parent container
    <div className="flex">
      {/* left container */}
      {/* <CProfile/> */}
      {/* right container */}
      <div className="mt-10 flex w-full flex-col">
        {/* Navbar container */}
        {/* <Navbar/> */}
        {/* button and header */}
        <div className="flex mx-10 justify-between border-b pb-8">
          <h2 className="text-4xl font-semibold">Climatic Requirements</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}
        </div>
        {/* content */}
        <div className="flex flex-col space-y-8 m-10 w-3/5">
          {/* economic impact */}
          <div>
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              Weather Required For Success
            </h1>
            <p className="text-[#565656]">
              Maize crop does well under temperatures ranging from 20 – 35
              Celsius. Some maize varieties can also do well under temperatures
              exceeding 36 Celsius if adequate water supply is in place. Maize
              can tolerate temperatures below 20 Celsius, however, it will not
              do well in very cold conditions. Maize needs 30 – 70 cm of
              rainfall. Most of the maize farmers in Nigeria rely solely on the
              rains. There are very few irrigation maize farmers in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimaticRequirements;
