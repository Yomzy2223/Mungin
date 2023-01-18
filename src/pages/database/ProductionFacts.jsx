import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const ProductionFacts = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Production Facts"));
  }, []);

  let productionFactsObj = cropInfo?.cropInfo[0]?.productionFact;
  let productionFactsArr = productionFactsObj
    ? Object.entries(productionFactsObj)
    : [];
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
