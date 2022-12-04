import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import maize from "../../assets/maize_1.png";
import Button from "../../components/Reusable components/Button";
import { useState } from "react";
import ModalMain from "../../components/Reusable components/ModalMain";
import CProfile from "../../components/Reusable components/CProfile";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Profiles from "./Profiles";
import Variety from "./Variety";
import Description from "./Description";
import CropValue from "./CropValue";
import ProductionFacts from "./ProductionFacts";
import PlantAnatomy from "./PlantAnatomy";
import Morphology from "./Morphology";
import PostHarvest from "./PostHarvest";
import ClimaticRequirements from "./ClimaticRequirements";
import Cultivar from "./Cultivar";
import SoilReq from "./SoilReq";
import NutrientRequirements from "./NutrientRequirements";
import CropManagement from "./CropManagement";
import PlantOperations from "./PlantOperations";

const CropProfile = ({ CropInfo }) => {
  // const [nestedElements, setNestedElements] = useState({})

  // useEffect(() => {
  //   setNewCropInfo(JSON.parse(window.localStorage.getItem("newCropInfo")));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("newCropInfo", newCropInfo);
  // }, [newCropInfo]);

  // setNewCropInfo(CropInfo);

  return (
    // parent container
    <div className="flex">
      {/* {console.log(anatomy.structure)} */}
      <div className="mt-10 flex w-full flex-col">
        {/* Navbar container */}

        {/* content */}
        <div className="m-6 ">
          {/* image container */}
          <div className="">
            <img src={CropInfo?.anatomy?.structure} alt="corn-pic" />
          </div>
          {/* text container 1 */}
          <div className="flex space-x-12 m-6">
            {/* colored text div */}
            <div className="bg-[#E2EFD5] px-3 py-2 rounded-md">
              <p className="text-[#75A843] font-semibold">Common Name</p>
            </div>
            {/* text */}
            <p className="pt-2">{CropInfo.cropName}</p>
          </div>
          {/* text container 2 */}
          <div className="flex space-x-12 m-6">
            {/* colored text div */}
            <div className="bg-[#E2EFD5] px-3 py-2 rounded-md">
              <p className="text-[#75A843] font-semibold">Scientific Name</p>
            </div>
            {/* text */}
            <p className="pt-1">{CropInfo.scientificName}</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CropProfile;
