import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const CropValue = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Crop Value"));
  }, []);

  const values = selectedCropDetails.values
    ? selectedCropDetails?.values[0]
    : {};

  let title1 = values ? Object.keys(values)[2] : "";
  let title2 = values ? Object.keys(values)[1] : "";

  console.log("aASDsrgrxSDF".match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g));

  return (
    <CropValueContainer>
      <ListWithTitle
        list={values?.byProduct?.split(",")}
        title={title1 ? title1 : ""}
      />
      <TextWithDetails
        title={title2 ? title2 : ""}
        text={values?.economicValue}
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
