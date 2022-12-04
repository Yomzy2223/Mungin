import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    // parent container
    <div className="bg-[#333333] w-full text-[#FFFFFF] pb-6">
      {/* content container */}
      {/* className="pt-10 space-y-8 flex md:flex-row items-center flex-col md:justify-between mx-auto container " */}
      {/* className=" text-center font-semibold text-2xl md:font-medium" */}
      {/* className=" w-1/3 text-center md:text-left " className="w-1/3
      flextext-center flex-col " className="md:w-1/3 text-center flex flex-col" */}
      <FooterContainer>
        <Top>
          <img src={logo} className="mb-6" alt="mungin" />
        </Top>
        <Body>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Quick Access</h2>
            <Details className="mb-4 font-light">
              We are one of the leading companies that has made automation of We
              are one of the leading companies
            </Details>
            <Details className="text-sm">
              © 2021 Mungin. All rights reserved
            </Details>
          </div>
          {/* about us */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">About us</h2>
            <Details className=" pt:6 text-left my-2 font-light">
              Our Mission
            </Details>
            <Details className="text-left my-2 font-light">
              <Details
              // href="https://www.newsnow.com/ng/Economy/Agriculture"
              // target="_blank"
              >
                News & Articles
              </Details>
            </Details>
            <Details className=" text-left my-2 font-light">
              Working process
            </Details>
          </div>
          {/* input form */}
          <form>
            <h2 className="font-bold text-center pb-3 md:w-1/2 md:text-left">
              News Letter
            </h2>
            <div className="flex ">
              <input
                className="rounded-l-sm pl-2 pr-10 py-2"
                type="email"
                placeholder="Email Address"
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-[#83BF4F] rounded-r-sm outline-[#83BF4F] text-white"
              >
                <BsArrowRightShort size={35} />
              </button>
            </div>
          </form>
        </Body>
      </FooterContainer>
    </div>
  );
};

export default Footer;

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
  /* align-items: center; */
  margin-inline: clamp(40px, 6vw, 120px);
  padding-block: 20px 15px;

  @media screen and (max-width: 890px) {
    h2 {
      text-align: left;
    }
  }
`;

export const Top = styled.div``;

export const Body = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 20px;

  > div {
    max-width: 300px;
  }

  input {
    width: 100%;
  }
`;

export const Details = styled.p`
  @media screen and (max-width: 890px) {
    display: none;
    text-align: left;
  }
`;
