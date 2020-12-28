import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import { Jumbotron, Button } from "react-bootstrap";
import Title from "./components/Title/Title.jsx";
// import ReactSpringTest from "./components/reactspring";
import Profile from "./components/Profile/Profile.jsx";
import Experience from "./components/Experience/Experience.jsx";
// import Projects from "./components/OldProjects/OldProjects.jsx";
import ContactInfo from "./components/Contact/Contact.jsx";
import ProjectsContainer from "./components/Projects/ProjectsContainer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar/NavBar.jsx";
// import * as Scroll from "react-scroll";
// import {
//   Link,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";

// import "./Homepage.css";

const Homepage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  });

  return (
    <div className="App">
      <animated.div
        onMouseEnter={() => {
          setNavOpen(true);
        }}
        onMouseLeave={() => setNavOpen(false)}
      >
        <Navbar style={navAnimation} />
      </animated.div>
      {/* <ReactSpringTest /> */}
      <Title title="Title" dark={true} id="Title" />
      <Profile title="Profile" dark={false} id="Profile" />
      <Experience title="Experience" dark={false} id="Experience" />
      <ProjectsContainer title="Projects" dark={false} id="Projects" />
      <ContactInfo title="Contact" dark={true} id="Contact" />
    </div>
  );
};

export default Homepage;
