import React, { useEffect, useState } from "react";
import Hero from "./components/Landing page/Hero";
import MiniCard from "./components/Landing page/MiniCard";
import Navbar from "./components/Landing page/Navbar";
import Mission from "./components/Landing page/mission";
import About from "./components/Landing page/About";
import Advert from "./components/Landing page/Advert";
import Footer from "./components/Landing page/Footer";
import UserService from "./services/user.service";

import { Routes, Route } from "react-router-dom";
import WorkProgress from "./components/Landing page/WorkingProgress";
import styled from "styled-components";
import Articles from "./components/Landing page/Articles";

const App = () => {
  // const [Content, setContent] = useState("");
  // useEffect(
  //   () => {
  //     UserService.getPublicContent().then((response) => {
  //       setContent(response.data);
  //     });
  //   },
  //   (error) => {
  //     setContent(
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //         error.message ||
  //         error.toString()
  //     );
  //   },
  //   [Content]
  // );
  return (
    <>
      <Navbar />
      <AppContainer>
        <Hero />
        <WorkProgress />
        {/* <MiniCard /> */}
        <Mission />
        {/* <Articles /> */}
        {/* <About />
        <Advert /> */}
      </AppContainer>
      <Footer />
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-inline: clamp(20px, 6vw, 100px);
  gap: 60px;
  margin-bottom: 150px;
`;
