import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClimaticRequirements from "./ClimaticRequirements";
import CropManagement from "./CropManagement";
import CropProfile from "./CropProfile";
import CropValue from "./CropValue";
import Cultivar from "./Cultivar";
import Description from "./Description";
import Morphology from "./Morphology";
import NutrientRequirements from "./NutrientRequirements";
import PlantAnatomy from "./PlantAnatomy";
import PlantOperations from "./PlantOperations";
import PostHarvest from "./PostHarvest";
import ProductionFacts from "./ProductionFacts";
import SoilReq from "./SoilReq";
import Variety from "./Variety";

const Profiles = () => {
  const params = useParams();

  const [CropInfo, setCropInfo] = useState({});
  const API_URL = "https://crop-profiles.herokuapp.com/api/v1/crop/get?id=";

  const fetchCropInfo = async () => {
    try {
      const response = await axios.get(API_URL + params.id);
      setCropInfo(response.data);
      console.log(CropInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCropInfo();
  }, []);

  return (
    <div>
      <CropProfile fetchCropInfo={fetchCropInfo} CropInfo={CropInfo} />
      <Cultivar />
      <ClimaticRequirements />
      <CropManagement />
      <CropValue />
      <Description />
      <Morphology />
      <NutrientRequirements />
      <PlantAnatomy />
      <PlantOperations />
      <PostHarvest />
      <ProductionFacts />
      <SoilReq />
      <Variety />
    </div>
  );
};

export default Profiles;
