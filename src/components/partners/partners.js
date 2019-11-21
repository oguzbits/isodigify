import React from "react";

import acme1 from "../../images/acme1.svg";
import acme2 from "../../images/acme2.svg";
import acme3 from "../../images/acme3.svg";
import acme4 from "../../images/acme4.svg";
import acme5 from "../../images/acme5.svg";
import acme6 from "../../images/acme6.svg";

import "./partners.scss";

const Partners = () => {
  return (
    <div className="partners">
      <h4>More than 500,000 developers and businesses trust Isodigify</h4>
      <div className="partners-logos">
        <img src={acme1} width="100" height="100" alt="acme1-logo" />
        <img src={acme2} width="100" height="100" alt="acme2-logo" />
        <img src={acme3} width="100" height="100" alt="acme3-logo" />
        <img src={acme4} width="40" height="40" alt="acme4-logo" />
        <img src={acme5} width="100" height="100" alt="acme5-logo" />
        <img src={acme6} width="100" height="100" alt="acme6-logo" />
      </div>
    </div>
  );
};
export default Partners;
