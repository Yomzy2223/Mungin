import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";
import { getCrops } from "../../services/auth.service";

const Profile = () => {
  const [crops, setCrops] = useState([]);

  // Get crop Id from the location path name
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const cropID = pathArr[pathArr.length - 2].split("%")[0];

  useEffect(() => {
    store.dispatch(storeTitle("Profile"));
    handleCrops();
  }, []);

  // Get all crops and set the selected crop
  const handleCrops = async () => {
    let crops = await getCrops();
    let selectedCrop = crops?.filter(
      (crop) => crop.id.toString() === cropID.toString()
    );
    setCrops(selectedCrop[0]);
    console.log(selectedCrop);
  };

  // This formats the list to display under the image
  let list = [
    { property: "common name", value: crops?.commonName },
    { property: "crop name", value: crops?.cropName },
    {
      property: "scientific name",
      value: crops?.scientificName,
    },
    { property: "yeild rate", value: crops?.yieldRate },
  ];

  return <ImageWithLabel image={crops?.imageUrl} list={list} />;
};

export default Profile;
