import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import map from "../../assets/map.png";
import CProfile from "../../components/Reusable components/CProfile";
const Description = () => {
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
          <h2 className="text-4xl font-semibold">Description</h2>
          {/* button container */}
          {/* <div className='bg-[#17233C] text-white py-3 px-4 rounded-md '>
                    <p>Analyze Crop Yield</p>
                </div> */}
        </div>
        {/* content */}
        {/* parent container */}
        <div className="flex flex-col space-y-8 m-10 w-3/5">
          {/* image container */}
          <div>
            <p className="text-[#313131] mb-4 text-3xl font-semibold">
              Area Grown
            </p>
            <img src={map} alt="map" />
          </div>
          {/* history container */}
          <div>
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              History
            </h1>
            <p className="text-[#565656]">
              Maize was used merely as a test crop for soil fertility to
              determine the influence of green manners and various sequences of
              crops in the rotation. Maize has been in the diet of Nigerians for
              centuries. It started as a subsistence crop and has gradually
              become a more important crop. Maize has now risen to a commercial
              crop on which many agro-based industries depend on as raw
              materials. Although maize is increasingly being utilized for
              livestock feed, it is still a very important staple food for
              millions of Nigerians. Maize in Nigeria is mainly produced by
              smallholder farmers, each cultivating an average of 0.65Ha (Sahel
              Reports, 2014). Cropping systems differ from North to South.
              Northern farmers typically do not practice intercropping. While,
              in the South, maize is usually intercropped with yam, cassava,
              guinea corn, rice, cowpea, groundnut, and soybeans.
            </p>
          </div>
          {/* Domestication container */}
          <div>
            <h1 className="mb-4 text-[#313131] text-3xl font-semibold">
              Domestication
            </h1>
            <p className="text-[#565656]">
              Maize was domesticated in central Mexico around 1500BC, was
              introduced into Africa around 1500 AD, and spread to every corner
              of the continent within a relatively short period and is now
              Africa’s most important cereal crop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
