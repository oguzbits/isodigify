import React from "react";

import NavBar from "../../components/navBar/navBar";
import Pricing from "../../components/pricing/pricing";
import Footer from "../../components/footer/footer";

import "./pricingPage.scss";

const PricingPage = () => {
  return (
    <>
      <NavBar />
      <div className="pricing-page">
        <Pricing />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
