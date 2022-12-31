import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import CProfile from "../../components/Reusable components/CProfile";

const SoilReq = () => {
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
          <h2 className="text-4xl font-semibold">Soil Requirements</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}
        </div>
        {/* content */}
        <div className="flex flex-col space-y-8 m-10 w-3/5">
          {/* Soil Required To Thrive */}
          <div>
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              Soil Required To Thrive
            </h1>
            <p className="text-[#565656]">
              Maize prefers a deep loamy soil rich in organic maters and
              nitrogen. Maize is known as a nitrogen hungry crop, planting this
              crop in a soil rich in nitrogen will positively impact its growth
              and yield. The farmland site to be used for maize farming should
              be ideally plain or flat. The soil should be well drained. Maize
              will not do well in a water-logged area. Soils that are too clayey
              or muddy should be avoided because they can be prone to flooding,
              they also usually have a low content of calcium. Your preferred
              location or site for maize farming should have a soil that is not
              too acidic or too alkaline. Maize will do well in soils with a pH
              of 5.5 – 6.5.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilReq;
