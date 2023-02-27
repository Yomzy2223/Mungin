import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailList from "../../components/Reusable components/CropDetails/DetailList";
import DropDown from "../../components/Reusable components/CropDetails/DropDown";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Variety = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Variety"));
  }, []);

  const varieties = cropDetails.varieties ? cropDetails.varieties : [];

  // const list = varieties.map((variety) => ({
  //   property: variety?.types,
  //   value: variety?.estimatedYield,
  // }));

  // const image = varietyObj?.imageUrl;

  return (
    <VarietyContainer>
      {varieties?.map((variety) => (
        <DropDown title={variety?.types}>
          <ImageWithLabel
            image={variety?.imageUrl}
            list={Object.entries(variety)
              .filter((el) => el[0] !== "id" && el[0] !== "imageUrl")
              .map((el) => ({
                property: el[0],
                value: el[1],
              }))}
            imgStyle={{ maxHeight: "100%" }}
          />
        </DropDown>
      ))}
      {/* <ImageWithLabel image="" list={list} imgStyle={{ maxHeight: "100%" }} />{" "} */}
    </VarietyContainer>
  );
};

export default Variety;

export const VarietyContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
