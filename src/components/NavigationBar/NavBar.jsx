import React from 'react';
import { Link } from 'react-scroll';
import { animated } from 'react-spring';
import './NavBar.css';

var Style = {
  position: 'fixed',
  right: '10px',
  top: '46%',
  backgroundColor: '#708090',
  height: '104px',
  border: '2px solid silver',
  textAlign: 'center',
  borderRadius: '7px',
  zIndex: '1',
};

const Navbar = () => {
  return (
    // <animated.nav style={Style}>
    <nav className="nav-content">
      <ul className="nav-items">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000}
          >
            Title
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="profile-section"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience-section"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={1}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    // </animated.nav>
  );
};
export default Navbar;
