import axios from "axios";
const API_URL = "https://crop-profiles.herokuapp.com/api/v1/auth/";

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

export default new AuthService();
