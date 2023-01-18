import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Profile = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Profile"));
  }, []);

  // This formats the list to display under the image
  let list = [
    { property: "common name", value: cropInfo.cropInfo[0]?.commonName },
    { property: "crop name", value: cropInfo.cropInfo[0]?.cropName },
    {
      property: "scientific name",
      value: cropInfo.cropInfo[0]?.scientificName,
    },
    { property: "yeild rate", value: cropInfo.cropInfo[0]?.yieldRate },
  ];

  return <ImageWithLabel image={cropInfo.cropInfo[0]?.imageUrl} list={list} />;
};

export default Profile;
