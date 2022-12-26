import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const API_URL = "https://crop-profiles.herokuapp.com/api/v1/auth/";
const APP_URL = process.env.NODE_ENV === "production" ? "" : "localhost:3000";

const client = axios.create({
  baseURL: "https://crop-profiles.herokuapp.com/api/v1/auth",
});

class AuthService {
  login = (email, password) => {
    return axios.post(API_URL + `login`, {
      email,
      password,
    });
    // .then((response) => {
    //   console.log(response);
    //   if (response.data) {
    //     localStorage.setItem("user", JSON.stringify(response.data));
    //   }
    //   return response.data;
    // });
  };

  logout = () => {
    localStorage.removeItem("user");
  };
  register = (
    email,
    password,
    fullName,
    farmer,
    numberOfFarm,
    farmName,
    location,
    animalName,
    animalsize,
    cropName,
    cropsize,
    produceName,
    othersize
  ) => {
    return axios.post(API_URL + "register", {
      email,
      password,
      fullName,
      farmer,
      numberOfFarm,
      farmName,
      location,
      animalName,
      animalsize,
      cropName,
      cropsize,
      produceName,
      othersize,
    });
  };

  getCurrentUser = () => {
    JSON.parse(localStorage.getItem("user"));
  };
}

export const loginUser = async (formData) => {
  let requiredData = {
    email: formData.email,
    password: formData.password,
  };
  try {
    let response = await client.post("/login", requiredData);
    if (response.status === 200) toast.success("Login successful");
    console.log(response);
    return response.data;
  } catch (e) {
    if (e.message.toString() === "Network Error") toast.error(e.message);
    else toast.error(e.response.data);
    return e.response.data;
  }
};

export const registerUser = async (formData) => {
  let requiredData = {
    fullName: formData.name,
    password: formData.password,
    email: formData.email,
    isFarmer: formData.isFarmer,
  };
  try {
    let response = await client.post("/register", requiredData);
    if (response.status === 200) toast.success("Registration successful");
    console.log(response);
    return response.data;
  } catch (e) {
    if (e.message.toString() === "Network Error") toast.error(e.message);
    else toast.error(e.response.data);
    console.log(e);
    return e.response.data;
  }
};

export default new AuthService();
