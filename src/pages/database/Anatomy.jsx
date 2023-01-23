import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Anatomy = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Anatomy"));
  }, []);

  const anatomyObj = selectedCropDetails.anatomies
    ? selectedCropDetails?.anatomies[0]
    : {};
  const anatomyArr = anatomyObj ? Object.entries(anatomyObj) : [];

  let listArr = anatomyArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "structure"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  const image = anatomyObj?.structure;
  return (
    <ImageWithLabel
      image={image}
      list={list}
      imgStyle={{ maxHeight: "100%" }}
    />
  );
};

export default Anatomy;
