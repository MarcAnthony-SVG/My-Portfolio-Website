import React, { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import profilePic from './Images/profilePic.jpeg';
import './Profile.css';
function Profile(props) {
  const [isVisible, setVisibility] = useState(false);
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
  });
  const photoAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
  });

  const { x } = useSpring({
    x: isVisible ? 0 : 100,
  });
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      window.location.assign(this);
    }
  });
  return (
    <div className="Root_Container">
        <Waypoint
          onEnter={() => {
            console.log('3');
            if (!isVisible) setVisibility(true);
          }}
        />
        <animated.h1 style={fadeAnimation}>Profile</animated.h1>
        <h3>I'm a creative Software Developer</h3>
        <div className="containerStyle">
          <animated.section
            id="About_Me"
            className="Information_Box"
            style={{
              transform: x.interpolate((x) => `translate3d(${x * -11}%,0,0`),
            }}
          >
            <h2 id="Title">About me</h2>
            <p style={{ padding: '10px' }}>
              Welcome to my website, which is continually being updated with new
              and exciting features that I've learned from my experience while
              working as a developer.  I always knew I wanted to be a software
              engineer, but I never had the means to pursue it until one day,
              the opportunity came, and I took it. Since then, I've enjoyed
              working with a great variety of mentors and colleagues, solving
              mundane and exciting problems and showing off my ability to
              problem-solve and come up with creative solutions to everyday
              issues.
            </p>
          </animated.section>
          <div >
            <animated.img
              src={profilePic}
              id="ProfilePic"
              style={photoAnimation}
            />
          </div>
          <animated.section
            id="Details"
            className="Information_Box"
            style={{
              transform: x.interpolate((x) => `translate3d(${x * 11}%,0,0`),
            }}
          >
            <h2>Details</h2>
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <h3 style={{ display: 'inline' }}>Occupation</h3>
              <p style={{ display: 'inline' }}>:Software Engineer</p>
              <br></br>

              <h4 style={{ display: 'inline' }}>Name</h4>
              <p style={{ display: 'inline' }}>: Marc Rodriguez</p>
              <br></br>
              <h3 style={{ display: 'inline' }}>Age</h3>
              <p style={{ display: 'inline' }}>:28</p>
              <br></br>
              <h3 style={{ display: 'inline' }}>Location</h3>
              <p style={{ display: 'inline' }}>:San Antonio, Texas</p>
              <br></br>
              <h3 style={{ display: 'inline' }}>Email</h3>
              <p style={{ display: 'inline' }}>
                :Marcanthonyrodriguez95@gmail.com
              </p>
              <br></br>
              <h3 style={{ display: 'inline' }}>Phone Number</h3>
              <p style={{ display: 'inline' }}>:210-745-8744</p>
            </div>
          </animated.section>
        </div>
      <Waypoint
        bottomOffset={'4px'}
        onLeave={() => {
          console.log('Leaves');
          if (isVisible) setVisibility(false);
        }}
      />
    </div>
  );
}
export default Profile;
