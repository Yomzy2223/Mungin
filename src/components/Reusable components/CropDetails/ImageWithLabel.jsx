import React from "react";
import styled from "styled-components";

const ImageWithLabel = ({ image, list, imgStyle }) => {
  console.log(image);
  return (
    <ImageLabelContainer>
      {image && <img src={image} alt="crop" style={imgStyle} />}
      <Label>
        {list?.map((each, index) => (
          <List key={index}>
            <Property>
              <span>{each?.property}</span>
            </Property>
            <span>{each?.value}</span>
          </List>
        ))}
      </Label>
    </ImageLabelContainer>
  );
};

export default ImageWithLabel;

export const ImageLabelContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;

  img {
    height: 100%;
    object-fit: contain;
    width: max-content;
    max-height: 334px;
    border-radius: 8px;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-flow: column;
  gap: 22px;
`;

export const List = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* gap: 60px; */
  /* max-width: 500px; */

  > span {
    font-size: 12px;
    border-radius: 4px;
    width: max-content;
    height: max-content;
    text-align: justify;

    color: #313131;
    text-transform: capitalize;
    text-transform: capitalize;

    /* :nth-of-type(1) {
      text-transform: capitalize;
      color: #75a843;
      background-color: #e2efd5;
      font-weight: 700;
      padding: 8px;
    }
    :nth-of-type(2) {
    } */
  }
`;

export const Property = styled.div`
  min-width: 150px;
  max-width: 150px;
  span {
    font-size: 12px;
    border-radius: 4px;
    width: max-content;
    height: max-content;
    text-align: justify;
    text-transform: capitalize;
    color: #75a843;
    background-color: #e2efd5;
    font-weight: 700;
    padding: 8px;
  }
`;
