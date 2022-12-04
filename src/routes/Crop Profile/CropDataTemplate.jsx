import React from "react";
import Navbar from "../../components/Reusable components/Navbar";
import maize from "../../assets/maize_1.png";
import Button from "../../components/Reusable components/Button";
import { useState } from "react";
import ModalMain from "../../components/Reusable components/ModalMain";
import CProfile from "../../components/Reusable components/CProfile";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Profiles from "./Profiles";
import CropProfile from "./CropProfile";
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

const CropDataTemplate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState("");

  const [CropInfo, setCropInfo] = useState({});

  console.log(id, "id");
  const API_URL = "https://crop-profiles.herokuapp.com/api/v1/crop/get?id=";

  const fetchCropInfo = async () => {
    try {
      const response = await axios.get(API_URL + searchParams.get("id"));

      setCropInfo(response.data);
      console.log(CropInfo);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(CropInfo);

  useEffect(() => {
    fetchCropInfo();
    setId(searchParams.get("id"));
  }, []);

  return (
    // parent container
    <div className="flex">
      {/* left container */}
      <CProfile id={id} />
      {/* right container */}
      <div className="mt-10 flex w-full flex-col">
        {/* Navbar container */}
        <Navbar />
        <div>
          <div className="flex mx-10 justify-between border-b pb-8">
            <h2 className="text-4xl font-semibold">{CropInfo.cropName}</h2>
          </div>
          {/* content */}
          <Routes>
            <Route
              path="/crop-profile"
              element={<CropProfile CropInfo={CropInfo} />}
            />
            <Route
              path="cultivar"
              element={<Cultivar CropInfo={{ CropInfo }} />}
            />
            <Route path="variety" element={<Variety CropInfo={CropInfo} />} />
            <Route path="crop_v" element={<CropValue CropInfo={CropInfo} />} />
            <Route
              path="production_f"
              element={<ProductionFacts CropInfo={CropInfo} />}
            />
            <Route
              path="plant_a"
              element={<PlantAnatomy CropInfo={CropInfo} />}
            />
            <Route
              path="morphology"
              element={<Morphology CropInfo={CropInfo} />}
            />
            <Route
              path="post_h"
              element={<PostHarvest CropInfo={CropInfo} />}
            />
            <Route
              path="climatic_r"
              element={<ClimaticRequirements CropInfo={CropInfo} />}
            />
            <Route path="soil_r" element={<SoilReq CropInfo={CropInfo} />} />
            <Route
              path="nutrient_r"
              element={<NutrientRequirements CropInfo={CropInfo} />}
            />
            <Route
              path="description"
              element={<Description CropInfo={CropInfo} />}
            />
            <Route
              path="crop_m"
              element={<CropManagement CropInfo={CropInfo} />}
            />
            <Route
              path="plant_o"
              element={<PlantOperations CropInfo={CropInfo} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CropDataTemplate;
