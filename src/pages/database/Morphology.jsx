import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Morphology = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Morphology"));
  }, []);

  const morphologyObj = selectedCropDetails.morphologies
    ? selectedCropDetails?.morphologies[0]
    : {};
  const morphologyArr = morphologyObj ? Object.entries(morphologyObj) : [];
  let imageIncluded = morphologyObj?.root?.includes("http");

  let listArr = morphologyArr?.filter(
    (each) => each[0] !== "id" && (imageIncluded ? each[0] !== "root" : "")
  );

  const list = listArr.map((list) => ({
    property: [list[0]],
    value: list[1],
  }));

  const image = imageIncluded ? morphologyObj?.root : "";

  return (
    <ImageWithLabel
      image={image ? image : ""}
      list={list}
      imgStyle={{ maxHeight: "100%" }}
    />
  );
};

export default Morphology;
