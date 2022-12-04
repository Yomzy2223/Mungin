import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import CProfile from "../../components/Reusable components/CProfile";

const ProductionFacts = ({ CropInfo }) => {
  return (
    // parent container
    <div className="flex">
      {/* content */}

      <div className="flex flex-col space-y-8 m-10 w-3/5">
        {/* economic impact */}
        <div>
          <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
            Economic Impact
          </h1>
          <p className="text-[#565656]">
            {CropInfo.productionFact.economicImpact}
          </p>
        </div>
        {/* financial impact */}
        <div>
          <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
            Financial Impact
          </h1>
          <p className="text-[#565656]">
            {CropInfo.productionFact.financialImpact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductionFacts;
