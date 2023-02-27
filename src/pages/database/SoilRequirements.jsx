import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import Empty from "../../components/Reusable components/Empty";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const SoilRequirements = () => {
  const { cropDetails } = useSelector((store) => store.database);
  useEffect(() => {
    store.dispatch(storeTitle("Soil Requirements"));
  }, []);

  const soilArrr = cropDetails?.soils ? cropDetails?.soils[0] : [];

  console.log(cropDetails);
  // const climaticReqArr = soilObj ? Object.entries(soilObj) : [];

  // let listArr = climaticRe?qArr?.filter((each) => each[0] !== "id");

  const list = soilArrr.map((list) => ({
    property: [list[0]],
    value: list[1],
  }));

  return (
    <SoilReqContainer>
      {list.length > 0 ? (
        <ImageWithLabel
          image={""}
          list={list}
          imgStyle={{ maxHeight: "100%" }}
        />
      ) : (
        <Empty />
      )}
    </SoilReqContainer>
  );
};

export default SoilRequirements;

export const SoilReqContainer = styled.div``;
