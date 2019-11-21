import React from "react";

import NavBar from "../../components/navBar/navBar";
import Intro from "../../components/intro/intro";
import Partners from "../../components/partners/partners";
import Block from "../../components/block/block";
import Pricing from "../../components/pricing/pricing";
import Footer from "../../components/footer/footer";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page">
        <Intro />
        <Partners />
        <Block />
        <Pricing />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
