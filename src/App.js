import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/signup" component={SignUpPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
