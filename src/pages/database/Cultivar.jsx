import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DropDown from "../../components/Reusable components/CropDetails/DropDown";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Cultivar = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Cultivar"));
  }, []);

  const cultivars = cropDetails.cultivars ? cropDetails?.cultivars : {};

  return (
    <CultivarContainer>
      {cultivars?.map((cultivar, index) => (
        <DropDown
          key={index}
          title={cultivar?.types?.slice(
            cultivar.types.indexOf("(") + 1,
            cultivar.types.indexOf(")")
          )}
        >
          <ImageWithLabel
            image={cultivar?.imageUrl}
            list={Object.entries(cultivar)
              .filter((el) => el[0] !== "id" && el[0] !== "imageUrl")
              .map((el) => ({
                property: el[0],
                value: el[1],
              }))}
            imgStyle={{ maxHeight: "100%" }}
          />
        </DropDown>
      ))}
    </CultivarContainer>
  );
};

export default Cultivar;

export const CultivarContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
