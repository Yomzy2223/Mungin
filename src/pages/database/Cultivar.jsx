import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Cultivar = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Cultivar"));
  }, []);

  return (
    <CultivarContainer>
      <Empty />
    </CultivarContainer>
  );
};

export default Cultivar;

export const CultivarContainer = styled.div``;
