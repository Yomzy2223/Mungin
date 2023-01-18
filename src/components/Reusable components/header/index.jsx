import React, { useState } from "react";
import styled from "styled-components";
import { profileImg } from "../../../assets/images";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import MobileSidebar from "../sidebar/MobileSidebar";

const DetailsHeader = ({ title }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Container>
      <Top>
        <Link to="/database">
          <MdKeyboardArrowLeft /> Back
        </Link>
        <MenuIcon
          onClick={() => setOpenSidebar(true)}
          style={{ cursor: "pointer" }}
        >
          <HiOutlineMenu size={24} />
        </MenuIcon>
        <MobileSidebar open={openSidebar} setOpen={setOpenSidebar} />
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
  align-items: center;
  padding-block: 40px 35px;

  a,
  span {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #888888;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 700px) {
    a {
      display: none;
    }
  }
`;

export const MenuIcon = styled.div`
  display: block;

  @media screen and (min-width: 701px) {
    display: none;
  }
`;
