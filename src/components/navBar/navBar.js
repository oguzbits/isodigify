import React, { useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import menuOpen from "../../images/menu-button.svg";
import menuClose from "../../images/close-button.svg";
import logo from "../../images/logo.svg";
import "./navBar.scss";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const NavBar = props => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav>
        <ElevationScroll {...props}>
          <AppBar color="inherit">
            <Toolbar>
              <div className="nav-container">
                <Link to={"/"}>
                  <img
                    className="isodigify-logo"
                    src={logo}
                    alt="isodigify-logo"
                  />
                </Link>
                <Hidden smDown>
                  <ul>
                    <li>
                      <Link to={"/products"}>Products</Link>
                    </li>
                    <li>
                      <Link to={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                      <Link to={"/news"}>News</Link>
                    </li>
                  </ul>
                </Hidden>
                <Hidden mdDown>
                  <ul>
                    <Link to={"/signup"}>
                      <button className="button ghost">Sign up →</button>
                    </Link>
                    <li>
                      <Link to={"/login"}>Log in</Link>
                    </li>
                  </ul>
                </Hidden>
                <Hidden lgUp>
                  <div
                    onClick={() => setToggle(!toggle)}
                    style={{
                      padding: "5px",
                      width: "35px",
                      cursor: "pointer"
                    }}
                  >
                    {!toggle ? (
                      <img src={menuOpen} alt="menu-logo" />
                    ) : (
                      <img src={menuClose} alt="menu-logo" />
                    )}
                  </div>
                </Hidden>
              </div>
            </Toolbar>
            {toggle && (
              <div className="nav-toggle">
                <Toolbar>
                  <ul>
                    <Hidden only={["md", "lg", "xl"]}>
                      <li>
                        <Link to={"/products"}>Products</Link>
                      </li>
                      <li>
                        <Link to={"/pricing"}>Pricing</Link>
                      </li>
                      <li>
                        <Link to={"/news"}>News</Link>
                      </li>
                    </Hidden>
                    <Hidden lgUp>
                      <Link to={"/signup"}>
                        <button>Sign up →</button>
                      </Link>
                      <li>
                        <Link to={"/login"}>Log in</Link>
                      </li>
                    </Hidden>
                  </ul>
                </Toolbar>
              </div>
            )}
          </AppBar>
        </ElevationScroll>
      </nav>
    </>
  );
};
export default withWidth()(NavBar);
