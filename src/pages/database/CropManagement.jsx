import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DropDown from "../../components/Reusable components/CropDetails/DropDown";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const CropManagement = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Crop Management"));
  }, []);

  const pests = cropDetails.pests ? cropDetails.pests : [];

  return (
    <CropManagContainer>
      {pests?.map((pest, index) => (
        <DropDown key={index} title={pest?.name}>
          <ImageWithLabel
            image={pest?.imageUrl}
            list={Object.entries(pest)
              .filter((el) => el[0] !== "id" && el[0] !== "imageUrl")
              .map((el) => ({
                property: el[0],
                value: el[1],
              }))}
            imgStyle={{ maxHeight: "100%" }}
          />
        </DropDown>
      ))}
    </CropManagContainer>
  );
};

export default CropManagement;

export const CropManagContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
