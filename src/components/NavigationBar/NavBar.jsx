import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

var Style = {
  position: "fixed",
  right: "10px",
  top: "46%",
  backgroundColor: "#708090",
  width: "120px",
  height: "125px",
  border: "2px solid silver",
  textAlign: "center",
  borderRadius: "10%"
};
export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar" style={Style}>
        <div className="nav-content">
          <div className="nav-items">
            <div>
              <Link
                activeClass="active"
                to="Title"
                spy={true}
                smooth={true}
                offset={10}
                duration={1000}
                onSetActive={this.handleSetActive}
              >
                Title
              </Link>
            </div>
            <div>
              <Link
                activeClass="active"
                to="Profile"
                spy={true}
                smooth={true}
                offset={1}
                duration={1000}
                onSetActive={this.handleSetActive}
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
                onSetActive={this.handleSetActive}
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
                onSetActive={this.handleSetActive}
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
                onSetActive={this.handleSetActive}
              >
                ContactInfo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
