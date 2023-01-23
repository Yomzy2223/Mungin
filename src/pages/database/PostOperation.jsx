import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const PostOperation = () => {
  const { selectedCropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Post Operations"));
  }, []);

  const operationsObj = selectedCropDetails.operations
    ? selectedCropDetails?.operations[0]
    : {};

  return (
    <PostHarvestContainer>
      <ListWithTitle
        title={`The post-haarvest operations of ${operationsObj?.cropName} include:`}
        list={[...operationsObj.postHarvestOps.split(",")]}
      />
    </PostHarvestContainer>
  );
};

export default PostOperation;

export const PostHarvestContainer = styled.div``;
