import React from "react";
import { Link } from "react-scroll";
import {animated} from "react-spring"
var Style = {
  position: "fixed",
  right: "10px",
  top: "46%",
  backgroundColor: "#708090",
  height: "104px",
  border: "2px solid silver",
  textAlign: "center",
  borderRadius: "10%"
};

const Navbar = () => {
  return (
    <animated.nav className="nav" id="navbar"style={Style}>
      <div className="nav-content">
        <div className="nav-items">
          <div>
            <Link
              activeClass="active"
              to="HomeContainer"
              spy={true}
              smooth={true}
              offset={10}
              duration={1000}
            >
              Title
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="ProfileContainer"
              spy={true}
              smooth={true}
              offset={1}
              duration={1000}
            >
              Profile
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="Experience"
              spy={true}
              smooth={true}
              offset={1}
              duration={1000}
            >
              Experience
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={1}
              duration={1000}
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={1}
              duration={1000}
            >
              ContactInfo
            </Link>
          </div>
        </div>
      </div>
    </animated.nav>
  );
};
export default Navbar;
