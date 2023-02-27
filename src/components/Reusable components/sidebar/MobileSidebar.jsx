import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileSidebar = ({ open, setOpen }) => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <SidebarContainer>
      <AiOutlineClose size={24} onClick={() => setOpen(false)} />
      <button onMouseDown={() => scrollTo("work-progress")}>Process</button>
      <button onMouseDown={() => scrollTo("our-mission")}>Our Mission</button>
      <Link to="/register" className="text-[#375A1A]">
        Join Us
      </Link>
      <Link
        to="/database"
        className="bg-[#17233C] p-3 text-white px-4 rounded-md"
      >
        Search Our Database
      </Link>
    </SidebarContainer>
  );
};

export default MobileSidebar;

export const SidebarContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 40px 30px;
  gap: 16px;

  a {
    text-decoration: none;
    text-align: center;
  }
`;
