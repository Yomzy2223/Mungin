import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white-bg.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  // reverse polarity of nav
  const handleNav = () => {
    setnav(!nav);
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer className=" flex flex-row justify-between mt-6 py-4">
      {/* image container */}
      <div>
        <img src={logo} alt="MUNGIN" width={150} height={40} className="ml-2" />
      </div>
      {/* desktop display */}
      <div className="w-3/5  justify-between md:flex hidden lg:flex ">
        {/* link container */}
        <div className="flex items-center justify-between space-x-2 w-full flex-row ">
          <NavList onClick={() => scrollTo("work-progress")}>Process</NavList>
          <NavList
            className="whitespace-nowrap"
            onClick={() => scrollTo("our-mission")}
          >
            Our Mission
          </NavList>
          {/* <NavList onClick={() => scrollTo("news-articles")}>News</NavList> */}
          <Link to={"/register"}>
            <button className="text-[#375A1A] whitespace-nowrap">
              Join Us
            </button>
          </Link>
          <Link to={"/database"}>
            <button className=" bg-[#17233C] p-3 text-white px-4 rounded-md whitespace-nowrap">
              Check Our Database
            </button>
          </Link>
        </div>
      </div>
      {/* hamburger menu */}
      <div
        className="sm:block absolute right-10 md:hidden "
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {/* mobile-menu */}
      <div
        className={
          nav
            ? "bg-white top-[90px] flex items-center justify-center flex-col space-y-6 absolute right-0 left-0"
            : "hidden"
        }
      >
        <button>Process</button>
        <button>Our Mission</button>
        <button>News</button>
        <button className="text-[#375A1A]">Join Us</button>
        <button className="bg-[#17233C] p-3 text-white px-4 rounded-md">
          Check Our Database
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Navbar;

export const HeaderContainer = styled.div`
  width: 100%;
  padding-inline: clamp(40px, 6vw, 120px);
`;

export const NavList = styled.p`
  cursor: pointer;
`;
