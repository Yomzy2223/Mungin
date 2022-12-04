import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../assets/logo-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // parent container
    <div className="bg-[#333333] w-full text-[#FFFFFF] pb-6">
      {/* content container */}
      <div className="pt-10 space-y-8 flex md:flex-row items-center flex-col md:justify-between mx-auto container ">
        {/* quick access */}
        <div className="p-4 w-1/3 text-center md:text-left ">
          <img src={logo} className="mb-6" alt="mungin" />
          <h2 className="mb-4 text-xl font-semibold">Quick Access</h2>
          <p className="mb-4 font-light">
            We are one of the leading companies that has made automation of We
            are one of the leading companies
          </p>
          <p className="text-sm">© 2021 Mungin. All rights reserved</p>
        </div>
        {/* about us */}
        <div className="w-1/3 flex text-center flex-col ">
          <p className=" text-center  font-semibold text-2xl md:font-medium">
            About us
          </p>
          <p className=" pt:6 text-center my-2 font-light">Our Mission</p>
          <p className="text-center my-2 font-light">
            <a
              href="https://www.newsnow.com/ng/Economy/Agriculture"
              target="_blank"
            >
              News & Articles
            </a>
          </p>
          <p className=" text-center my-2 font-light">Working process</p>
        </div>
        {/* input form */}
        <form className="md:w-1/3  text-center flex flex-col">
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
      </div>
    </div>
  );
};

export default Footer;
