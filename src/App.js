import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/landingPage";
import PricingPage from "./pages/pricingpage/pricingPage";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/pricing" exact component={PricingPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
