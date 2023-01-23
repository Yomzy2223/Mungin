import React, { useEffect, useState } from "react";
import { CiKeyboard } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailsHeader from "../components/Reusable components/header";
import Sidebar from "../components/Reusable components/sidebar/index";
import {
  storeCropsDetails,
  storeSelectedCrop,
  storeSelectedCropDetails,
} from "../redux/slices";
import { store } from "../redux/store";
import { getCrops, getCropsDetails } from "../services/auth.service";

const DetailsLayout = () => {
  const [fetched, setFetched] = useState(false);

  const { title, cropsDetails } = useSelector((store) => store.database);

  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const cropID = pathArr[pathArr.length - 2].split("%")[0];

  useEffect(() => {
    handleCropsDetails();
    handleCrop();
    handleDetails();
  }, [fetched]);

  const handleCropsDetails = async () => {
    let details = await getCropsDetails();
    store.dispatch(storeCropsDetails(details));
    setFetched(true);
    console.log(details);
  };

  const handleCrop = async () => {
    const crops = await getCrops();
    const cropsWithId = crops.map((crop, index) => ({
      ...crop,
      id: index + 11,
    }));
    let selectedCrop = cropsWithId.filter(
      (each) => each.id.toString() === cropID
    );
    // console.log(selectedCrop);
    store.dispatch(storeSelectedCrop(selectedCrop));
  };

  const handleDetails = () => {
    let categoriesArr = Object.entries(cropsDetails);
    // console.log(categoriesArr);
    let selected = categoriesArr.map((category) => ({
      [category[0]]: category[1]?.filter(
        (each) => each.id.toString() === cropID
      ),
    }));
    let selectedObj = {
      cultivars: selected[0]?.cultivars,
      varieties: selected[1]?.varieties,
      soils: selected[2]?.soils,
      pests: selected[3]?.pests,
      diseases: selected[4]?.diseases,
      weeds: selected[5]?.weeds,
      nutrients: selected[6]?.nutrients,
      climatics: selected[7]?.climatics,
      waters: selected[8]?.waters,
      crops: selected[9]?.crops,
      values: selected[10]?.values,
      facts: selected[11]?.facts,
      descriptions: selected[12]?.descriptions,
      operations: selected[13]?.operations,
      anatomies: selected[14]?.anatomies,
      morphologies: selected[15]?.morphologies,
    };
    // console.log(selected);
    store.dispatch(storeSelectedCropDetails(selectedObj));
  };

  return (
    <DetailsContainer>
      <Sidebar desktop />
      <ContentWrapper>
        <DetailsHeader title={title} />
        <Outlet />
      </ContentWrapper>
    </DetailsContainer>
  );
};

export default DetailsLayout;

export const DetailsContainer = styled.div`
  display: flex;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-inline: 32px;
  max-height: 100vh;
  overflow-y: scroll;
  padding-bottom: 40px;
`;
