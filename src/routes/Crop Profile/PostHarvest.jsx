import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import circle from "../../assets/tick-circle.png";
import CProfile from "../../components/Reusable components/CProfile";
const PostHarvest = () => {
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
          <h2 className="text-4xl font-semibold">Post-Harvest Operations</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                        <p>Analyze Crop Yield</p>
                    </div> */}
        </div>
        {/* content */}
        <div className="m-8">
          <h2 className="text-2xl font-semibold">
            The Post Harvest Operations of Maize Include:
          </h2>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Storage</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Processing</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">
              Grading/Sorting/Packaging
            </p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">
              Transportation/Loading & Unloading
            </p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHarvest;
