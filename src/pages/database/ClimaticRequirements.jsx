import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const ClimaticRequirements = () => {
  const [list, setList] = useState([]);

  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Climatic Requirement"));
  }, []);

  const climaticsObj = cropDetails.climaticRequirement
    ? cropDetails?.climaticRequirement
    : {};

  const climaticReqArr = climaticsObj ? Object.entries(climaticsObj) : [];

  let listArr = climaticReqArr?.filter(
    (each) => each[0] !== "id" && each[0] !== "atmosphericGas"
  );

  useEffect(() => {
    if (listArr.length > 0) {
      const dataList = [
        {
          property: listArr[0][0],
          value: listArr[0][1],
        },
        {
          property: listArr[1][0],
          value: <> {listArr[1][1]}</>,
        },
        {
          property: listArr[2][0],
          value: (
            <div style={{ textTransform: "lowercase" }}>{listArr[2][1]}</div>
          ),
        },
        {
          property: listArr[3][0],
          value: (
            <div style={{ textTransform: "lowercase" }}>{listArr[3][1]}</div>
          ),
        },
      ];
      setList(dataList);
    }
  }, [listArr.length]);

  return (
    <ClimaticContainer>
      <ImageWithLabel image={""} list={list} imgStyle={{ maxHeight: "100%" }} />
    </ClimaticContainer>
  );
};

export default ClimaticRequirements;

export const ClimaticContainer = styled.div``;
