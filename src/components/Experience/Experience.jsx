import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import GalvanizeLogo from './../../Data/Images/Galvanize Logo.jpg';
import ArmyLogo from './../../Data/Images/U.S. Army Logo.png';

import TechnicalSkills from '../Technical_Skills/Technical_Skills.jsx';
import Image from 'react-bootstrap/Image';

const Photo_Style = {
  height: '13vh',
  width: 'auto',
  borderRadius: '10%',
};
function Experience(props) {
  const [isVisible, setVisibility] = useState(false);
  // const [on, toggle] = useState(false);

  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  const { x } = useSpring({
    x: isVisible ? 0 : 100,
    config: { mass: 5, tension: 500, friction: 80, duration: 1000 },
  });

  return (
    <div
      className="Experience"
      style={{
        backgroundColor: 'white',
        height: '103vh',
        textAlign: 'center',
        border: '65px inset darkred',
        overflow: 'hidden',
      }}
    >
      <div>
        <Waypoint
          // scrollableAncestor={window}
          onEnter={() => {
            if (!isVisible) setVisibility(true);
            console.log(4);
          }}
          onLeave={() => {
            if (isVisible) setVisibility(false);
            // setVisibility(false);
          }}
        />
        <animated.h1 style={fadeAnimation}>Experience</animated.h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <animated.div
          className="ParentContainer"
          style={{
            transform: x.interpolate((x) => `translate3d(${x * -11}%,0,0`),
            borderStyle: 'solid',
            height: 'auto',
            width: '350px',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'lightgrey',
            borderRadius: '0.9%',
          }}
        >
          <div className="ChildContainer">
            <Image
              src={GalvanizeLogo}
              alt="Galvanize Logo"
              style={Photo_Style}
            />
            <h4>Galvanize Inc</h4>
            <p>5 Months</p>
          </div>
          <div className="ChildContainer">
            <h4>Software Engineering Specialist</h4>
            <p>Full-Time </p>
            <p>
              Sep 2020 – Present Employment Duration
              <br></br>3 Months Location Austin, Texas, United States
            </p>
            <div className="ChildContainer">
              <h4>Software Engineer</h4>
              <p>Internship</p>
              <p>
                Aug 2020 – Sep 2020 Employment Duration
                <br></br>2 Months Location Austin, Texas, United States
              </p>
            </div>
          </div>
        </animated.div>
        <animated.div
          className="ParentContainer"
          style={{
            transform: x.interpolate((x) => `translate3d(${x * 11}%,0,0`),
            borderStyle: 'solid',
            height: 'auto',
            width: '350px',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'lightgrey',
            borderRadius: '0.9%',
          }}
        >
          <div className="ChildContainer">
            <Image src={ArmyLogo} alt="Army Logo" style={Photo_Style} />
            <h4>US Army</h4>
            <p> 5 Years 8 Months</p>
          </div>
          <div className="ChildContainer">
            <h4>All-Source Analyst</h4>
            <p>Full-time</p>
            <p>
              Prepared All-Source Intelligence products to support combat
              commanders. <br></br>
              Assessed the significance and reliability of incoming information
              with current intelligence.<br></br> Established and maintained
              systematic cross-reference intelligence records and files.
            </p>
            <div className="ChildContainer">
              <h4>Full Motion Video (FMV) Intelligence Analyst</h4>
              <p>Full-Time</p>
              <p>
                Produced detailed analytical products to build Patterns of Life
                (PoL) and target descriptions.
                <br></br>Conducted order of battle analysis, Activity-Based
                Intelligence (ABI), Battle Damage Assessment (BDA), Storyboards,
                Vehicle Follows, and 360-degree graphics.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
}
export default Experience;
