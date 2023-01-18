import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListWithTitle from "../../components/Reusable components/CropDetails/ListWithTitle";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const PostOperation = () => {
  const cropInfo = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Post Operations"));
  }, []);

  const postHarvestOps = cropInfo?.cropInfo[0]?.operations?.postHarvestOps;

  return (
    <PostHarvestContainer>
      <ListWithTitle
        title={`The post-haarvest operations of ${cropInfo?.cropInfo[0]?.commonName} include:`}
        list={[postHarvestOps]}
      />
    </PostHarvestContainer>
  );
};

export default PostOperation;

export const PostHarvestContainer = styled.div``;
