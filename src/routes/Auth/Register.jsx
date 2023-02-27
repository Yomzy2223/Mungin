import React from "react";
import cocoa from "../../assets/cocoa.png";
import logo from "../../assets/logo-white-bg.png";
import google from "../../assets/google-s.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AuthService, { registerUser } from "../../services/auth.service";
import { toast } from "react-hot-toast";
import Oval from "react-loading-icons/dist/esm/components/oval";
import styled from "styled-components";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    fullName: "",
    password: "",
    email: "",
    farmer: Boolean,
    numberOfFarm: "",
    farmName: "",
    location: "",
    animalName: "",
    farmSize: "",
    cropName: "",
    cropsize: "",
    produceName: "",
    othersize: "",
    phoneNumber: "",
    averageFarmYield: "",
  };
  const [farmer, setfarmer] = useState(true);
  const [formValues, setformValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformValues({ ...formValues, [name]: value });
  };
  const [farmType, setfarmType] = useState("");
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [Message, setMessage] = useState("");
  const [Successful, setSuccessful] = useState(Boolean);
  const [SuccessfulFarm, setSuccessfulFarm] = useState(false);

  let navigate = useNavigate();

  let baseURL = "https://crop-profiles.herokuapp.com/api/v1/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setformErrors(validate(formValues, farmer));
    setisSubmit(true);
    setIsLoading(true);
    setMessage("");
    setSuccessful(false);
    console.log(formValues, "register");
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    let response = await registerUser(formValues);
    setIsLoading(false);
    console.log(response);
    if (response) {
      toast.success("Account created successfully");
      navigate("/");
    }
    // } else {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // form validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "name is required!";
    }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "please input a valid email!";
    // }
    // if (!values.password) {
    //   errors.password = "Password is required!";
    // } else if (values.password.length < 4) {
    //   errors.password = "password must exceed 4 characters!";
    // } else if (values.password.length > 10) {
    //   errors.password = "password must be less than 10 characters!";
    // }
    if (farmer == null) {
      errors.farmer = "cannot be blank!";
    }

    return errors;
  };

  // test farmer
  console.log(farmer);

  return (
    // parent container
    <Container className="flex ">
      {/* left container */}
      <LeftContainer>
        <img src={cocoa} alt="cocoa" />
      </LeftContainer>
      {/* right container */}
      <RightContainer>
        {/* error message */}

        {/* {formErrors.length === 0 ? <div className='flex w-4/5 justify-center '><p className='p-2 px-4 bg-red-500 rounded-lg text-white font-semibold animate-pulse'>Failed 😔 </p></div> :null} */}

        <Link to={"/"}>
          <img className="mt-6" src={logo} width={150} alt="Mungin" />
        </Link>
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-3xl font-semibold text-[#313131] mt-20 mb-6">
            Register with us
          </h2>
          {/* google button */}
          {/* <div className='flex justify-center font-semibold w-4/5 border p-4 py-5 '>
            <img src={google} width={20} className='mr-2' alt='google'/>
            <button className='text-sm text-[#313131]'>Continue with Google</button>
          </div> */}
          {/* <p className='text-[#888888] text-center w-4/5 py-4'>OR</p> */}
          {/* form container */}
          <div className="text-[#313131] space-y-6">
            {/* name container */}
            <div>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                value={formValues.fullName}
                name="fullName"
                onChange={handleChange}
                placeholder="hotel jerry"
                className="py-3 pl-4 flex-1  border w-4/5"
              />
              <p className="text-red-500">{formErrors.fullName}</p>
            </div>
            {/* email */}
            {/* <div>
              <p className="mb-2">Email Address</p>
              <input
                type="email"
                value={formValues.email}
                name="email"
                onChange={handleChange}
                placeholder="hoteljerry@gmail.com"
                className="py-3 pl-4 flex-1  border w-4/5"
              />
              <p className="text-red-500">{formErrors.email}</p>
            </div> */}
            {/* password */}
            {/* <div>
              <p className="mb-2">Password</p>
              <input
                type="password"
                placeholder=""
                name="password"
                onChange={handleChange}
                className="py-3 pl-4 flex-1  border w-4/5"
              />
              <p className="text-red-500">{formErrors.password}</p>
            </div> */}
            {/* phone number */}
            <div>
              <p className="mb-2">Phone Number</p>
              <input
                type="number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="py-3 pl-4 flex-1  border w-4/5"
              />
            </div>
            {/* radio container */}
            {/* <div>
              <p className="pb-2">Are You a Farmer?</p>
              <div className="space-x-12 flex text-[#888888]">
                <div>
                  <input
                    type="radio"
                    name="farmer"
                    value={farmer}
                    onChange={() => setfarmer(true)}
                  />
                  <span className="ml-1">Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="farmer"
                    value={farmer}
                    onChange={() => setfarmer(false)}
                  />
                  <span className="ml-1">No</span>
                </div>
              </div>
            </div> */}
            <h1>{farmer}</h1>
            {/* conditional div */}
            {farmer === true && (
              <div className="space-y-6 pt-2">
                {/* number of farms */}
                <div>
                  <p className="mb-2">Number of farm(s)</p>
                  <input
                    type="number"
                    name="numberOfFarm"
                    value={formValues.numberOfFarm}
                    onChange={handleChange}
                    placeholder="2"
                    className="py-3 pl-4 flex-1  border w-4/5"
                  />
                </div>
                {/* farm names */}
                <div>
                  <p className="mb-2">Farm(s) Names</p>
                  <input
                    type="text"
                    name="farmName"
                    value={formValues.farmName}
                    onChange={handleChange}
                    placeholder="Mungin farms, Zulu farms, Audu farms..."
                    className="py-3 pl-4 flex-1  border w-4/5"
                  />
                </div>
                {/* Average crop yield */}
                <div>
                  <p className="mb-2">Average Farm Yield</p>
                  <input
                    type="text"
                    name="averageFarmYield"
                    value={formValues.averageFarmYield}
                    onChange={handleChange}
                    placeholder="2 tons"
                    className="py-3 pl-4 flex-1  border w-4/5"
                  />
                </div>

                {/* location */}
                <div>
                  <p className="mb-2">Location(s)</p>
                  <input
                    type="text"
                    name="location"
                    value={formValues.location}
                    onChange={handleChange}
                    placeholder="Lagos"
                    className="py-3 pl-4 flex-1  border w-4/5"
                  />
                </div>
                {/* drop down menu */}
                <div>
                  <p className="pb-2">Farm Type(s)</p>
                  <input
                    type="text"
                    name="farmType"
                    onChange={handleChange}
                    placeholder="Animal, Crop..."
                    className="py-3 pl-4 flex-1  border w-4/5"
                  />
                  {/* <div>
                    <select
                      value={farmType}
                      onChange={(e) => setfarmType(e.target.value)}
                      className="bg-white border text-[#888888] flex justify-center font-semibold w-4/5 p-4 py-3"
                    >
                      <option value="">Select Farm Type</option>
                      <option value="Animal">Animal</option>
                      <option value="Crop">Crop</option>
                      <option value="Other">Other</option>
                    </select>
                  </div> */}
                </div>

                {/* Animal farm container */}
                {/* {farmType === "Animal" && ( */}
                <div className="space-y-6">
                  {/* Name(s) */}
                  <div>
                    <p className="mb-2">Name(s)</p>
                    <input
                      type="text"
                      name="animalName"
                      onChange={handleChange}
                      placeholder="Goat, Maize, Cow..."
                      className="py-3 pl-4 flex-1  border w-4/5"
                    />
                  </div>
                  {/* Size */}
                  <div>
                    <p className="mb-2">Size</p>
                    <input
                      type="text"
                      name="farmSize"
                      onChange={handleChange}
                      placeholder="2 hectares"
                      className="py-3 pl-4 flex-1  border w-4/5"
                    />
                  </div>
                </div>
                {/* )} */}

                {/* Crop farm container */}
                {farmType === "Crop" && (
                  <div className="space-y-6">
                    {/* Name(s) */}
                    <div>
                      <p className="mb-2">Name(s)</p>
                      <input
                        type="text"
                        name="cropName"
                        onChange={handleChange}
                        placeholder="Maize, Yam, Cassava..."
                        className="py-3 pl-4 flex-1  border w-4/5"
                      />
                    </div>
                    {/* Size */}
                    <div>
                      <p className="mb-2">Size</p>
                      <input
                        type="text"
                        name="cropsize"
                        onChange={handleChange}
                        placeholder="2sqkm"
                        className="py-3 pl-4 flex-1  border w-4/5"
                      />
                    </div>
                  </div>
                )}

                {/* Other farm container */}
                {farmType === "Other" && (
                  <div className="space-y-6">
                    {/* Name(s) */}
                    <div>
                      <p className="mb-2">Name(s)</p>
                      <input
                        type="text"
                        name="produceName"
                        onChange={handleChange}
                        placeholder="Other type"
                        className="py-3 pl-4 flex-1  border w-4/5"
                      />
                    </div>
                    {/* Size */}
                    <div>
                      <p className="mb-2">Size</p>
                      <input
                        type="text"
                        name="otherSize"
                        onChange={handleChange}
                        placeholder="2sqkm"
                        className="py-3 pl-4 flex-1  border w-4/5"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* button container */}
            <div>
              <button
                className="py-6 pl-2 flex flex-1 justify-center font-bold border mb-4 w-4/5 bg-[#17233C] text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Oval stroke="#ffffff" fill="white" width={24} height={24} />
                ) : (
                  "Register"
                )}
              </button>
            </div>
            <Link to={"/login"}>
              <p className="text-[#888888] pb-12">
                Already have an account?{" "}
                <span className="text-[#333333]">Login</span>
              </p>
            </Link>
          </div>
        </form>
        {
          Successful && (
            <div className="flex w-4/5 justify-center">
              <p className="p-2 bg-[#83BF4F] rounded-lg text-white animate-pulse font-semibold px-4">
                Registered successfully ✅{" "}
              </p>
            </div>
          )
          // ) : (
          //   <div className="flex w-4/5 justify-center">
          //     <p className="p-2 bg-[#f71919] rounded-lg text-white animate-pulse font-semibold px-4">
          //       {Message}{" "}
          //     </p>
          //   </div>
          // )
        }

        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='flex w-4/5 justify-center'>
            <p className='p-2 bg-[#83BF4F] rounded-lg text-white animate-pulse font-semibold px-4'>Registered successfully ✅ </p>
            </div>):null
          } */}
      </RightContainer>
    </Container>
  );
};

export default Register;

export const Container = styled.div`
  display: flex;

  /* @media screen and (min-width: 700px) {
    padding-right: clamp(20px, 3vw, 32px);
  } */
`;

export const LeftContainer = styled.div`
  width: 50%;

  img {
    height: 100%;
    object-fit: cover;
    min-height: 100vh;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  padding-inline: clamp(20px, 3vw, 32px);

  input,
  button,
  select {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    background-image: url("../../assets/cocoa.png");
    background: image(cocoa);
  }
`;
