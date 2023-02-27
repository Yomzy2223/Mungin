import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DropDown from "../../components/Reusable components/CropDetails/DropDown";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Cultivar = () => {
  const { cropDetails } = useSelector((store) => store.database);
  console.log(cropDetails);

  useEffect(() => {
    store.dispatch(storeTitle("Cultivar"));
  }, []);

  const cultivars = cropDetails.cultivars ? cropDetails?.cultivars : {};
  // const cultivarArr = cultivarObj ? Object.entries(cultivarObj) : [];

  // let listArr = cultivarArr?.filter((each) => each[0] !== "id");

  // const list = listArr.map((list) => ({
  //   property: [list[0]],
  //   value: list[1],
  // }));

  // const image = cultivarObj?.imageUrl;

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
      {/* <ImageWithLabel
        image={image}
        list={list}
        imgStyle={{ maxHeight: "100%" }}
      /> */}
    </CultivarContainer>
  );
};

export default Cultivar;

export const CultivarContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;
