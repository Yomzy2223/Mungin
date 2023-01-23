import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailList from "../../components/Reusable components/CropDetails/DetailList";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Variety = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Variety"));
  }, []);

  const varietyObj = selectedCropDetails.varieties
    ? selectedCropDetails?.varieties[0]
    : {};
  const varietyArr = varietyObj ? Object.entries(varietyObj) : [];

  let listArr = varietyArr?.filter((each) => each[0] !== "id");

  const list = listArr.map((list) => ({
    property: [list[0]],
    value: list[1],
  }));

  const image = varietyObj?.imageUrl;

  return (
    <VarietyContainer>
      <ImageWithLabel
        image={image}
        list={list}
        imgStyle={{ maxHeight: "100%" }}
      />{" "}
    </VarietyContainer>
  );
};

export default Variety;

export const VarietyContainer = styled.div``;
