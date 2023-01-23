import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Cultivar = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Cultivar"));
  }, []);

  const cultivarObj = selectedCropDetails.cultivars
    ? selectedCropDetails?.cultivars[0]
    : {};
  const cultivarArr = cultivarObj ? Object.entries(cultivarObj) : [];

  let listArr = cultivarArr?.filter((each) => each[0] !== "id");

  const list = listArr.map((list) => ({
    property: [list[0]],
    value: list[1],
  }));

  const image = cultivarObj?.imageUrl;

  return (
    <CultivarContainer>
      <ImageWithLabel
        image={image}
        list={list}
        imgStyle={{ maxHeight: "100%" }}
      />
    </CultivarContainer>
  );
};

export default Cultivar;

export const CultivarContainer = styled.div``;
