import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const PlantOperations = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Plant Operations"));
  }, []);

  const operationsObj = selectedCropDetails.operations
    ? selectedCropDetails?.operations[0]
    : {};
  const operationsArr = operationsObj ? Object.entries(operationsObj) : [];

  let listArr = operationsArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "postHarvestOps"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  return (
    <PlantOpContainer>
      <ImageWithLabel image={""} list={list} imgStyle={{ maxHeight: "100%" }} />
    </PlantOpContainer>
  );
};
export default PlantOperations;

export const PlantOpContainer = styled.div``;
