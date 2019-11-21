import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "../../images/logo.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-brand">
          <Link to={"/"}>
            <img className="isodigify-logo" src={logo} alt="isodigify-logo" />
          </Link>
          {/* <div className="footer-icons">
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </div> */}
          <div className="footer-icons">
            <ul>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
            </ul>
          </div>
          <div>
            Made by <a href="https://oguzbits.com">Oguz Öztürk</a>
          </div>
        </div>
        <div className="footer-about">
          <ul>
            <h4>Company</h4>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Open source</li>
            <li>JAMstack book</li>
            <li>Enterprise whitepaper</li>
          </ul>
        </div>
        <div className="footer-products">
          <ul>
            <h4>Products</h4>
            <li>Pricing</li>
            <li>Docs</li>
            <li>Blog</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="footer-legal">
          <ul>
            <h4>Legal</h4>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
            <li>Legal notice</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
