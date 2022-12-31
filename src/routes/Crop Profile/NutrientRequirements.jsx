import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import CProfile from "../../components/Reusable components/CProfile";

const NutrientRequirements = () => {
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
          <h2 className="text-4xl font-semibold">Nutrient Requirements</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}
        </div>
        {/* content */}
        <div className="flex flex-col space-y-8 m-10 w-3/5">
          {/* Nutrients Needed For Growth */}
          <div>
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              Nutrients Needed For Growth
            </h1>
            <p className="text-[#565656]">
              Maize as a crop is a nutrient hungry crop. Your maize crop needs a
              lot of nutrients especially nitrogen. One hectare of maize farm
              will need about 8-15 50kg bags of NPK and Urea fertilizers. It is
              also advisable you mix all your fertilizers with potassium humate
              in order to maximize the efficiency of the fertilizers. NPK
              fertilizers and urea are known as the best fertilizers for maize
              farming in Nigeria. Also, bury all fertilizers applied to your
              maize crop; never leave fertilizers on the surface of the soil.
              Soil improver like manure, rice husks and plant materials can also
              be used for your maize farm. You can also use microbial
              inoculants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutrientRequirements;
