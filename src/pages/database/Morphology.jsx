import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Morphology = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Morphology"));
  }, []);

  const morphologyObj = cropInfo?.cropInfo[0]?.morphology;
  const morphologyArr = morphologyObj ? Object.entries(morphologyObj) : [];

  let listArr = morphologyArr?.filter((each) => each[0] !== "id");

  const list = listArr.map((list) => ({
    property: [list[0]],
    value: list[1] ? list[1] : "----",
  }));

  const image = cropInfo.cropInfo[0]?.morphology?.root;

  return (
    <ImageWithLabel
      image={image?.includes("http") ? image : ""}
      list={list}
      imgStyle={{ maxHeight: "100%" }}
    />
  );
};

export default Morphology;
