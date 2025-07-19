import React, { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';
import Title from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';
import Navbar from './components/NavigationBar/NavBar.jsx';
import { Waypoint } from 'react-waypoint';
import './index.css';

const Homepage = () => {
  const [isDisplayed, setDisplay] = useState(false);

  // const firstFadeOut = useSpring({
  //   to: [
  //     {
  //       opacity: 1,
  //       padding: '50%',
  //       height: '100%',
  //       background: 'linear-gradient(to right, #09010e, #101c2c)',
  //       borderBottom: '10px solid #2D3747',
  //       textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
  //     },
  //     {
  //       opacity: 1,
  //       padding: '0%',
  //       height: '0%',
  //       background: 'linear-gradient(to right, #101c2c, #101c2c)',
  //       borderBottom: '0px solid #2D3747',
  //       textShadow: '0px 0px 0px rgba(255,255,255,0.5)',
  //     },
  //   ],
  //   from: {
  //     opacity: isDisplayed ? '1' : '0',
  //     padding: '100%',
  //     height: '100%',
  //     background: 'linear-gradient(to right, #09010e, #101c2c)',
  //     borderBottom: '10px solid #2D3747',
  //     textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
  //   },
  // });
  return (
    <div className="App">
      <Title title="Title" dark={true} id="Title" />
      <Navbar />
      {/* <Waypoint
        onEnter={() => {
          if (!isDisplayed) setDisplay(true);
        }}
      />
      <animated.div style={firstFadeOut} />
      <Waypoint
        onLeave={() => {
          if (isDisplayed) setDisplay(false);
        }}
      /> */}
      <Profile title="Profile" dark={false} id="Profile" />
      <Experience title="Experience" dark={false} id="Experience" ></Experience>
      <Projects title="Projects" dark={false} id="Projects" />
      <Contact title="Contact" dark={false} id="Contact" />
    </div>
  );
};

export default Homepage;
