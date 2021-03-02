import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Title from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useLocation,
//   useParams,
// } from 'react-router-dom';
// import {
//   TransitionGroup,
//   CSSTransition
// } from "react-transition-group";
import Navbar from './components/NavigationBar/NavBar.jsx';
const Homepage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  });

  return (
    <div className="App">
      <Title title="Title" dark={true} id="Title" />
      <animated.div
        onMouseEnter={() => {
          if(!isNavOpen)setNavOpen(true);
        }}
        onMouseLeave={() => {if(isNavOpen)setNavOpen(false)}}
      >
        <Navbar style={navAnimation} />
      </animated.div>
      {/* <ReactSpringTest /> */}
      <Profile title="Profile" dark={false} id="Profile" />
      <Experience title="Experience" dark={false} id="Experience" />
      <Projects title="Projects" dark={false} id="Projects" />
      <Contact title="Contact" dark={true} id="Contact" />
    </div>
  );
};

export default Homepage;
