import React from "react";
import styled from "styled-components";
import { profileImg } from "../../../assets/images";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailsHeader = ({ title }) => {
  return (
    <Container>
      <Top>
        <Link to="/">
          <MdKeyboardArrowLeft /> Back to home
        </Link>
        <span>
          <img src={profileImg} alt="profile" />
          <MdKeyboardArrowDown />
        </span>
      </Top>
      <p>{title}</p>
    </Container>
  );
};

export default DetailsHeader;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 27px;

  p {
    font-weight: 700;
    font-size: clamp(22px, 2.2vw, 28px);
    color: #313131;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 40px 35px;

  a,
  span {
    display: flex;
    align-items: center;
    text-decoration: none;

    :nth-of-type(1) {
      color: #888888;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    :nth-of-type(2) {
    }
  }
`;
