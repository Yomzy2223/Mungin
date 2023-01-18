import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Description = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Description"));
  }, []);

  const description = cropInfo?.cropInfo[0]?.cropDescription;

  const descArray = Object.entries(description ? description : [])?.filter(
    (each) => each[0] !== "id"
  );

  console.log(descArray);

  return (
    <DescriptionContainer>
      {descArray.map((desc, index) => (
        <TextWithDetails key={index} title={desc[0]} text={desc[1]} />
      ))}
    </DescriptionContainer>
  );
};

export default Description;

export const DescriptionContainer = styled.div``;
