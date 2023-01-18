import React, { useEffect } from "react";
import styled from "styled-components";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const CropManagement = () => {
  useEffect(() => {
    store.dispatch(storeTitle("Crop Management"));
  }, []);

  return (
    <CropManagContainer>
      <Empty />
    </CropManagContainer>
  );
};

export default CropManagement;

export const CropManagContainer = styled.div``;
