import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const ProductionFacts = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Production Facts"));
  }, []);

  const factObj = selectedCropDetails.facts
    ? selectedCropDetails?.facts[0]
    : {};

  let productionFactsArr = factObj ? Object.entries(factObj) : [];
  let productionFacts = productionFactsArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "index"
  );

  return (
    <ProdFactsContainer>
      {productionFacts?.map((each, index) => (
        <TextWithDetails key={index} title={each[0]} text={each[1]} />
      ))}
    </ProdFactsContainer>
  );
};

export default ProductionFacts;

const ProdFactsContainer = styled.div``;
