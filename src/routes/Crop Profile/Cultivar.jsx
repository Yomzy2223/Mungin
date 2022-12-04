import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import circle from "../../assets/tick-circle.png";
import NewButton from "../../components/Reusable components/NewButton";
import { useState } from "react";
import NewModalMain from "../../components/Reusable components/NewModalMain";
import CProfile from "../../components/Reusable components/CProfile";

const Cultivar = ({ CropInfo }) => {
  // const [newModal, setnewModal] = useState(false)
  return (
    // parent container
    <div className="flex justify-between">
      {/* right container */}
      <div className="mt-4 flex w-full flex-col">
        {/* content */}
        <div className="m-8">
          <h2 className="text-2xl font-semibold">They Include</h2>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Oba super9</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">EVDT 99</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Ba hausa</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">3DT Com</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Yar Masara</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Sammaz37</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">TZE Comp3</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Notore</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">Samaru</p>
          </div>
          {/* cultivar container 1 */}
          <div className="m-4 flex">
            {/* green tick */}
            <div className="px-2">
              <img src={circle} alt="circle" width={25} />
            </div>
            <p className="text-[#565656] font-semibold">2009 EVDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultivar;
