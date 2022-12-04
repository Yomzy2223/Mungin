import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import circle from "../../assets/tick-circle.png";
import CProfile from "../../components/Reusable components/CProfile";

const CropValue = ({ CropInfo }) => {
  return (
    // parent container
    <div className="flex">
      {/* right container */}
      <div className="mt-10 flex w-full flex-col">
        {/* content */}
        {/* parent container */}
        <div className="flex flex-col m-8 space-y-12 ">
          {/* by product container */}
          <div className="">
            <h2 className="text-2xl font-semibold">By-Product</h2>
            {/* cultivar container 1 */}
            <div className="m-4 flex">
              {/* green tick */}
              <div className="px-2">
                <img src={circle} alt="circle" width={25} />
              </div>
              <p className="text-[#565656] font-semibold">Flour</p>
            </div>
            {/* cultivar container 1 */}
            <div className="m-4 flex">
              {/* green tick */}
              <div className="px-2">
                <img src={circle} alt="circle" width={25} />
              </div>
              <p className="text-[#565656] font-semibold">Beer</p>
            </div>
            {/* cultivar container 1 */}
            <div className="m-4 flex">
              {/* green tick */}
              <div className="px-2">
                <img src={circle} alt="circle" width={25} />
              </div>
              <p className="text-[#565656] font-semibold">Malt</p>
            </div>
            {/* cultivar container 1 */}
            <div className="m-4 flex">
              {/* green tick */}
              <div className="px-2">
                <img src={circle} alt="circle" width={25} />
              </div>
              <p className="text-[#565656] font-semibold">Drink</p>
            </div>
            {/* cultivar container 1 */}
            <div className="m-4 flex">
              {/* green tick */}
              <div className="px-2">
                <img src={circle} alt="circle" width={25} />
              </div>
              <p className="text-[#565656] font-semibold">Corn Flakes</p>
            </div>
          </div>
          {/* economic value container */}
          <div className="text-left w-3/5">
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              History
            </h1>
            <p className="text-[#565656]">{CropInfo.cropValue.economicValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropValue;
