import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Anatomy = () => {
  const [list, setList] = useState([]);

  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Anatomy"));
  }, []);

  const anatomyObj = cropDetails.anatomy ? cropDetails?.anatomy : {};
  const anatomyArr = Object.entries(anatomyObj);

  let listArr = anatomyArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "structure"
  );

  useEffect(() => {
    if (listArr.length > 0) {
      const dataList = [
        {
          property: listArr[0][0],
          value: listArr[0][1],
        },
        {
          property: listArr[1][0],
          value: listArr[1][1],
        },
        {
          property: listArr[2][0],
          value: listArr[2][1],
        },
      ];
      setList(dataList);
    }
  }, [listArr.length]);

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
