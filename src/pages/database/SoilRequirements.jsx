import React, { useEffect } from "react";
import styled from "styled-components";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const SoilRequirements = () => {
  useEffect(() => {
    store.dispatch(storeTitle("Soil Requirements"));
  }, []);

  return (
    <SoilReqContainer>
      <Empty />
    </SoilReqContainer>
  );
};

export default SoilRequirements;

export const SoilReqContainer = styled.div``;
