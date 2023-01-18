import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const ClimaticRequirements = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Climatic Requirement"));
  }, []);

  const climaticReqObj = cropInfo?.cropInfo[0]?.climaticRequirement;
  const climaticReqArr = climaticReqObj ? Object.entries(climaticReqObj) : [];

  let listArr = climaticReqArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "atmosphericGas"
  );

  const list = listArr.map((list) => ({ property: [list[0]], value: list[1] }));

  return (
    <ClimaticContainer>
      <ImageWithLabel image={""} list={list} imgStyle={{ maxHeight: "100%" }} />
    </ClimaticContainer>
  );
};

export default ClimaticRequirements;

export const ClimaticContainer = styled.div``;
