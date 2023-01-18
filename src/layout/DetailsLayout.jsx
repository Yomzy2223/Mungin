import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailsHeader from "../components/Reusable components/header";
import Sidebar from "../components/Reusable components/sidebar/index";
import { setDatabaseToStore } from "../redux/slices";
import { store } from "../redux/store";
import { getCrops } from "../services/auth.service";

const DetailsLayout = () => {
  const title = useSelector((store) => store.database?.title);

  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const crop = pathArr[pathArr.length - 2].split("%")[0];

  useEffect(() => {
    handleCrop();
  }, []);

  const handleCrop = async () => {
    const crops = await getCrops();
    let selectedCrop = crops.filter(
      (each) => each.cropName.split(" ")[0] === crop
    );
    console.log(selectedCrop);
    store.dispatch(setDatabaseToStore(selectedCrop));
  };

  return (
    <DetailsContainer>
      <Sidebar />
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
