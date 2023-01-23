import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const CropManagement = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Crop Management"));
  }, []);

  const pestsObj = selectedCropDetails.pests
    ? selectedCropDetails.pests[0]
    : {};
  const pestsArr = pestsObj ? Object.entries(pestsObj) : [];

  let listArr = pestsArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "imageUrl"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  const image = pestsObj?.imageUrl;

  return (
    <CropManagContainer>
      <ImageWithLabel
        image={image}
        list={list}
        imgStyle={{ maxHeight: "100%" }}
      />
    </CropManagContainer>
  );
};

export default CropManagement;

export const CropManagContainer = styled.div``;
