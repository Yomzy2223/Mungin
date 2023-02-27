import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const NutrientRequirements = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Nutrient Requirements"));
  }, []);

  const nutrients = cropDetails?.nutrient[0];
  const list = nutrients
    ? [
        { property: "Micro Quantity", value: nutrients.microQuantity },
        { property: "Macro Quantity", value: nutrients.macroQuantity },
      ]
    : {};

  return (
    <NutrientReqContainer>
      <ImageWithLabel image={""} list={list} imgStyle={{ maxHeight: "100%" }} />
    </NutrientReqContainer>
  );
};

export default NutrientRequirements;

export const NutrientReqContainer = styled.div``;
