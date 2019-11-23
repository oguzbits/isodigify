import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import LandingPage from "./pages/landingPage/landingPage";
import PricingPage from "./pages/pricingPage/pricingPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import LogInPage from "./pages/logInPage/logInPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/pricing" exact component={PricingPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LogInPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
