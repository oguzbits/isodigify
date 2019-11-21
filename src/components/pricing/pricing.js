import React, { useState } from "react";
import { Link } from "react-router-dom";

import Switch from "@material-ui/core/Switch";

import "./pricing.scss";

const Pricing = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="pricing">
      <h1>Find the perfect plan for your business</h1>
      <p>Free 14 day trial | No credit card required</p>
      <div className="switch-container">
        <span style={{ opacity: toggle ? 0.5 : 1 }}>Monthly</span>
        <Switch
          checked={toggle}
          onChange={() => setToggle(!toggle)}
          value={toggle}
          color="secondary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <span style={{ opacity: toggle ? 1 : 0.5 }}>Annual (20 % off)</span>
      </div>
      <div className="pricing-container">
        <div className="starter">
          <div className="starter-title">
            <h1>Starter</h1>
            <p>Great for hosting personal projects or experiments.</p>
          </div>
          <div className="starter-price">
            {toggle ? <h1>$29.00</h1> : <h1>$36.25</h1>}
            <p>per month</p>
          </div>
          <Link to={"/signup"}>
            <button>Get started for free</button>
          </Link>
          <div className="starter-bullets">
            <p>Custom domains & HTTPS</p>
            <p>Instant Git integration</p>
            <p>Continuous deployment</p>
            <p>Deploy previews</p>
            <p>Access to add-ons</p>
          </div>
        </div>
        <div className="pro">
          <div className="most-popular">Most popular</div>
          <div className="starter-title">
            <h1>Pro</h1>
            <p>For pro developers building pilot projects or small sites.</p>
          </div>
          <div className="pro-price">
            {toggle ? <h1>$49.00</h1> : <h1>$61.25</h1>}
            <p>per month</p>
          </div>
          <Link to={"/signup"}>
            <button>Get started</button>
          </Link>
          <div className="pro-bullets">
            <h4>Everything from Starter +</h4>
            <p>Concurrent builds (3 included)</p>
            <p>Password protected sites</p>
            <p>Multiple owners</p>
            <p>Slack & email notifications</p>
          </div>
        </div>
        <div className="enterprise">
          <div className="enterprise-title">
            <h1>Enterprise</h1>
            <p>Custom packages designed for your company.</p>
          </div>
          <div className="enterprise-price">
            <p>starting at</p>
            {toggle ? <h1>$1000.00</h1> : <h1>$1250.00</h1>}
            <p>per month</p>
          </div>
          <Link to={"/signup"}>
            <button>Contact sales</button>
          </Link>
          <div className="enterprise-bullets">
            <h4>Everything from Pro +</h4>
            <p>Security: SSO, RBAC, full audit logs</p>
            <p>24x7x365 premium support options</p>
            <p>Enterprise-level CDN</p>
            <p>99.99% uptime SLA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
