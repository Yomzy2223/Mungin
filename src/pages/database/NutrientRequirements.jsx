import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const NutrientRequirements = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Nutrient Requirements"));
  }, []);

  const nutrientsObj = selectedCropDetails.nutrients
    ? selectedCropDetails?.nutrients[0]
    : {};
  const nutrientsArr = nutrientsObj ? Object.entries(nutrientsObj) : [];

  let listArr = nutrientsArr?.filter(
    (each) =>
      each[0] !== "id" &&
      each[0] !== "crop" &&
      each[0] !== "macro" &&
      each[0] !== "micro"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  return (
    <NutrientReqContainer>
      <ImageWithLabel image={""} list={list} imgStyle={{ maxHeight: "100%" }} />
    </NutrientReqContainer>
  );
};

export default NutrientRequirements;

export const NutrientReqContainer = styled.div``;
