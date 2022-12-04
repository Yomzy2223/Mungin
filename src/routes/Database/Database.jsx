import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoChevronBackSharp } from "react-icons/io5";
import { BsThreeDotsVertical, BsArrowUp, BsArrowDown } from "react-icons/bs";
import logo from "../../assets/logo-white-bg.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";
import CropData from "./CropData";
import { data } from "./data";
import Button from "../../components/Reusable components/Button";
import ModalMain from "../../components/Reusable components/ModalMain";
import { useState, useEffect } from "react";
import axios from "axios";

const Database = () => {
  const [Modal, setModal] = useState(false);
  const [Crop, setCrop] = useState("");

  const API_URL = "https://crop-profiles.herokuapp.com/api/v1/crop/";

  useEffect(() => {
    getCrops();
  }, []);

  const getCrops = () => {
    axios
      .get(API_URL + `load`)
      .then((response) => {
        console.log(response.data);
        const allCrops = response.data;
        setCrop(allCrops);
        console.log(Crop);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(Crop);

  return (
    // parent container
    <div className=" flex container mr-6 h-screen">
      {Modal && <ModalMain closeModal={setModal} />}
      {/* create a state called Modal that is responsible for displaying ModalMain component
         pass the state as props called closeModal into the ModalMain component*/}
      {/*left container*/}
      <div className="pr-24 pl-12 shadow-3xl">
        <Link to={"/"}>
          <img src={logo} alt="mungin logo" width={225} className="mt-12" />
        </Link>
      </div>
      {/* right container */}
      <div className="  w-full pl-8 pr-8 ">
        {/* nav container */}
        <div className="pt-[60px] flex justify-between mb-8">
          {/* home container */}
          <Link to={"/"}>
            <div className="flex">
              {/* <IoChevronBackSharp size={25}/>
                        <p className='text-[#5A5A5A] text-lg'>Back to home</p> */}
            </div>
          </Link>
          {/* profile */}
          <div className="flex ">
            <img src={profile} alt="profile" />
            <RiArrowDropDownLine size={25} />
          </div>
        </div>
        {/* search container and show 10 */}
        <div className="flex justify-between mb-10">
          {/* show 10 container */}
          <div className="flex text-[#313131] bg-white ">
            <p className="border p-2">Show</p>
            {/* show 10 container */}
            <div className="flex border p-2">
              <p className="">10</p>
              <RiArrowDropDownLine size={25} />
            </div>
          </div>
          {/* searchbar container and analyze crop yield */}
          <div className="flex justify-evenly space-x-20">
            {/* searchbar container */}
            <div className="flex border rounded-md px-4">
              <input
                type="text"
                className="pr-8"
                placeholder="Search Crop, State..."
              />
              <div className="pt-3">
                <BiSearch size={25} />
              </div>
            </div>
            {/* button container */}
            <Button openModal={setModal} />
          </div>
        </div>
        {/* 10 search results */}
        <div className="flex border-b-2">
          <p className="mr-2">
            <span className="font-bold">10 </span>Search results
          </p>
          <RiArrowDropDownLine size={25} />
        </div>
        {/* crop data container*/}
        <div>
          {/* crop data categories */}
          <div className="text-[#5A5A5A] mt-6 font-bold text-sm flex justify-between">
            {/* crop */}
            <div className="flex space-x-3">
              <p>CROP</p>
              <div className="text-[#75A843]">
                <BsArrowUp size={20} />
              </div>
            </div>
            {/* year and versio container */}
            <div className="flex space-x-32">
              {/* year container */}
              <div className="flex space-x-3">
                <p>YEAR</p>
                <BsArrowDown size={20} />
              </div>
              {/* version container */}
              <div className="flex space-x-3">
                <p>VERSION</p>
                <BsArrowDown size={20} />
              </div>
              {/* empty */}
              <div className="text-white">
                <BsThreeDotsVertical size={25} />
              </div>
            </div>
          </div>
          {/* crop data */}
          <CropData Crop={Crop} />
        </div>
      </div>
    </div>
  );
};

export default Database;
