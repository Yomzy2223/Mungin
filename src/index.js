import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./routes/Auth/Register";
import Login from "./routes/Auth/Login";
// import NotFound from "./routes/NotFound";
// import Database from "./routes/Database/Database.jsx";
import CropProfile from "./routes/Crop Profile/CropProfile";
// import Variety from "./routes/Crop Profile/Variety";
// import Description from "./routes/Crop Profile/Description";
// import CropValue from "./routes/Crop Profile/CropValue";
// import ProductionFacts from "./routes/Crop Profile/ProductionFacts";
import PlantAnatomy from "./routes/Crop Profile/PlantAnatomy";
// import Morphology from "./routes/Crop Profile/Morphology";
import PostHarvest from "./routes/Crop Profile/PostHarvest";
import CropDataTemplate from "./routes/Crop Profile/CropDataTemplate";
// import ClimaticRequirements from "./routes/Crop Profile/ClimaticRequirements";
// import Cultivar from "./routes/Crop Profile/Cultivar";
import SoilReq from "./routes/Crop Profile/SoilReq";
// import NutrientRequirements from "./routes/Crop Profile/NutrientRequirements";
// import CropManagement from "./routes/Crop Profile/CropManagement";
// import PlantOperations from "./routes/Crop Profile/PlantOperations";
import CProfile from "./components/Reusable components/CProfile";
import { Toaster } from "react-hot-toast";
import Database from "./routes/Database";
import Test from "./pages/Test";
import DetailsLayout from "./layout/DetailsLayout";
import Profile from "./pages/database/Profile";
import Cultivar from "./pages/database/Cultivar";
import Variety from "./pages/database/Variety";
import Description from "./pages/database/Description";
import CropValue from "./pages/database/CropValue";
import ProductionFacts from "./pages/database/ProductionFacts";
import Anatomy from "./pages/database/Anatomy";
import PostOperation from "./pages/database/PostOperation";
import SoilRequirements from "./pages/database/SoilRequirements";
import Morphology from "./pages/database/Morphology";
import ClimaticRequirements from "./pages/database/ClimaticRequirements";
import NutrientRequirements from "./pages/database/NutrientRequirements";
import CropManagement from "./pages/database/CropManagement";
import PlantOperations from "./pages/database/PlantOperations";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="database" element={<Database />} /> */}
        <Route path="/database" element={<Outlet />}>
          <Route index element={<Database />} />
          <Route path=":crop" element={<DetailsLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="cultivar" element={<Cultivar />} />
            <Route path="variety" element={<Variety />} />
            <Route path="description" element={<Description />} />
            <Route path="value" element={<CropValue />} />
            <Route path="production-fact" element={<ProductionFacts />} />
            <Route path="anatomy" element={<Anatomy />} />
            <Route path="morphology" element={<Morphology />} />
            <Route path="operation-post-harvest" element={<PostOperation />} />
            <Route
              path="requirement-climatic"
              element={<ClimaticRequirements />}
            />
            <Route path="requirement-soil" element={<SoilRequirements />} />
            <Route
              path="requirement-nutrient"
              element={<NutrientRequirements />}
            />
            <Route path="management" element={<CropManagement />} />
            <Route path="plant-operation" element={<PlantOperations />} />
          </Route>
        </Route>
        <Route path="crop-profile" element={<CropProfile />} />
        {/* <Route path="/database/*" element={<CropDataTemplate />} /> */}
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
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            margin: "10px",
            padding: "10px",
            display: "inline-flex",
            fontSize: "14px",
            zIndex: 999999,
          },
          duration: 4000,
          error: {
            style: {
              background: "#ff6363",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
          success: {
            style: {
              background: "green",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
        }}
      />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
