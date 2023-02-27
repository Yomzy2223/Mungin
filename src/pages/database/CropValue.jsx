import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const CropValue = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Crop Value"));
  }, []);

  const cropValue = cropDetails.cropValue ? cropDetails?.cropValue : {};

  // let title1 = cropValue ? Object.keys(cropValue)[2] : "";
  // let title2 = cropValue ? Object.keys(cropValue)[1] : "";

  console.log("aASDsrgrxSDF".match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g));

  return (
    <CropValueContainer>
      <ListWithTitle
        list={cropValue?.byProduct?.split(",")}
        // title={title1 ? title1 : ""}
        title="By Product"
      />
      <TextWithDetails
        // title={title2 ? title2 : ""}
        title="Economic Value"
        text={cropValue?.economicValue}
      />
    </CropValueContainer>
  );
};

export default CropValue;

export const CropValueContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 30px;
`;
