import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import anatomy from "../../assets/anatomy.png";
import CProfile from "../../components/Reusable components/CProfile";
const PlantAnatomy = ({ CropInfo }) => {
  console.log(CropInfo);

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
          <h2 className="text-4xl font-semibold">Plant Anatomy</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}
        </div>
        {/* content */}
        <div className="m-8">
          <img src={CropInfo.imageUrl} alt="anatomy" />
        </div>
      </div>
    </div>
  );
};

export default PlantAnatomy;
