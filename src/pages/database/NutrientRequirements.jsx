import React, { useEffect } from "react";
import styled from "styled-components";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const NutrientRequirements = () => {
  useEffect(() => {
    store.dispatch(storeTitle("Nutrient Requirements"));
  }, []);

  return (
    <NutrientReqContainer>
      <Empty />
    </NutrientReqContainer>
  );
};

export default NutrientRequirements;

export const NutrientReqContainer = styled.div``;
