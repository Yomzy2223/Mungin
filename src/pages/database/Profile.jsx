import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Profile = () => {
  const { selectedCrop } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Profile"));
  }, []);

  // This formats the list to display under the image
  let list = [
    { property: "common name", value: selectedCrop[0]?.commonName },
    { property: "crop name", value: selectedCrop[0]?.cropName },
    {
      property: "scientific name",
      value: selectedCrop[0]?.scientificName,
    },
    { property: "yeild rate", value: selectedCrop[0]?.yieldRate },
  ];

  return <ImageWithLabel image={selectedCrop[0]?.imageUrl} list={list} />;
};

export default Profile;
