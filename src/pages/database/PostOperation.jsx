import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const PostOperation = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Post Operations"));
  }, []);

  const operationsObj = cropDetails.operations
    ? cropDetails?.operations.postHarvestOps
    : {};

  console.log(operationsObj?.split(","));

  return (
    <PostHarvestContainer>
      <ListWithTitle
        title={`The post-haarvest operations of ${cropDetails?.cropName} include:`}
        list={[...operationsObj?.split(",")]}
      />
    </PostHarvestContainer>
  );
};

export default PostOperation;

export const PostHarvestContainer = styled.div``;
