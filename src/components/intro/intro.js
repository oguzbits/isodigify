import React from "react";
import { Link } from "react-router-dom";

import lineart from "../../images/lineart.svg";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="lineart-bg" />
      <img src={lineart} alt="lineart" />
      <div className="intro-grid">
        <div className="intro-text">
          <h1>From local development to global deployment</h1>
          <p>
            Isodigify is everything you need to build fast, modern websites:
            continuous deployment, serverless functions, and so much more.
          </p>
          <div className="button-intro">
            <Link to={"/signup"}>
              <button className="button">Get started for free</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
