import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const ProductionFacts = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Production Facts"));
  }, []);

  const factObj = cropDetails.productionFact ? cropDetails?.productionFact : {};

  return (
    <ProdFactsContainer>
      <TextWithDetails title="Production Fact" text={factObj?.economicImpact} />
      <TextWithDetails
        title="Financial Impact"
        text={factObj?.financialImpact}
      />
    </ProdFactsContainer>
  );
};

export default ProductionFacts;

const ProdFactsContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
