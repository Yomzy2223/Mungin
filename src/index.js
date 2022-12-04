import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./routes/Auth/Register";
import Login from "./routes/Auth/Login";
// import NotFound from "./routes/NotFound";
import Database from "./routes/Database/Database.jsx";
import CropProfile from "./routes/Crop Profile/CropProfile";
import Variety from "./routes/Crop Profile/Variety";
import Description from "./routes/Crop Profile/Description";
import CropValue from "./routes/Crop Profile/CropValue";
import ProductionFacts from "./routes/Crop Profile/ProductionFacts";
import PlantAnatomy from "./routes/Crop Profile/PlantAnatomy";
import Morphology from "./routes/Crop Profile/Morphology";
import PostHarvest from "./routes/Crop Profile/PostHarvest";
import CropDataTemplate from "./routes/Crop Profile/CropDataTemplate";
import ClimaticRequirements from "./routes/Crop Profile/ClimaticRequirements";
import Cultivar from "./routes/Crop Profile/Cultivar";
import SoilReq from "./routes/Crop Profile/SoilReq";
import NutrientRequirements from "./routes/Crop Profile/NutrientRequirements";
import CropManagement from "./routes/Crop Profile/CropManagement";
import PlantOperations from "./routes/Crop Profile/PlantOperations";
import CProfile from "./components/Reusable components/CProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="database" element={<Database />} />
      <Route path="crop-profile" element={<CropProfile />} />
      <Route path="/database/*" element={<CropDataTemplate />} />
      {/* <Route path="/database/cultivar/:id/*" element={<CropDataTemplate />} /> */}
      {/* <Route path="cultivar" element={<Cultivar />} />
      <Route path="variety" element={<Variety />} />
      <Route path="crop_v" element={<CropValue />} />
      <Route path="production_f" element={<ProductionFacts />} />
      <Route path="plant_a" element={<PlantAnatomy />} />
      <Route path="morphology" element={<Morphology />} />
      <Route path="post_h" element={<PostHarvest />} />
      <Route path="climatic_r" element={<ClimaticRequirements />} />
      <Route path="soil_r" element={<SoilReq />} />
      <Route path="nutrient_r" element={<NutrientRequirements />} />
      <Route path="description" element={<Description />} />
      <Route path="crop_m" element={<CropManagement />} />
      <Route path="plant_o" element={<PlantOperations />} /> */}
      <Route path="c_profile" element={<CProfile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
