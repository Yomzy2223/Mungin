import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailList from "../../components/Reusable components/CropDetails/DetailList";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Variety = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Variety"));
  }, []);

  return (
    <VarietyContainer>
      <Empty />
    </VarietyContainer>
  );
};

export default Variety;

export const VarietyContainer = styled.div``;
