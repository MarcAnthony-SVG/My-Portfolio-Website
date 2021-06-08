import React, { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import profilePic from './Images/profilePic.jpeg';
import './Profile.css';

function Profile() {
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
          console.log('Entering Profile');
          if (!isVisible) setVisibility(true);
        }}
      />
      <animated.h1 style={fadeAnimation}>Profile</animated.h1>
      <h3>I'm a creative Software Developer</h3>
      <div className="containerStyle">
        <animated.section
          className="Information_Box"
          style={{
            transform: x.interpolate((x) => `translate3d(${x * -11}%,0,0`),
          }}
        >
          <h2 id="Title">About me</h2>
          <p>
            Welcome to my website, which is continually being updated with new
            and exciting features that I've learned from my experience while
            working as a developer. I always knew I wanted to be a software
            engineer, but I never had the means to pursue it until one day, the
            opportunity came, and I took it. Since then, I've enjoyed working
            with a great variety of mentors and colleagues, solving mundane and
            exciting problems and showing off my ability to problem-solve and
            come up with creative solutions to everyday issues.
          </p>
        </animated.section>
        <div>
          <animated.img
            src={profilePic}
            id="ProfilePic"
            style={photoAnimation}
          />
        </div>
        <animated.section
          className="Information_Box"
          style={{
            transform: x.interpolate((x) => `translate3d(${x * 11}%,0,0`),
          }}
        >
          <h2>Details</h2>
          <ul>
            <li>
              <b>Occupation</b>:Software Engineer
            </li>
            <li>
              <b>Name</b>:Marc Rodriguez
            </li>
            <li>
              <b>Age</b>:28
            </li>
            <li>
              <b>Location</b>:San Antonio, Texas
            </li>
            <li>
              <b>Email</b>:Marcanthonyrodriguez95@gmail.com
            </li>
            <li>
              <b>Phone Number</b>:210-745-8744
            </li>
          </ul>
        </animated.section>
      </div>
      <Waypoint
        bottomOffset={'4px'}
        onLeave={() => {
          console.log('Leaving Profile');
          if (isVisible) setVisibility(false);
        }}
      />
    </div>
  );
}
export default Profile;
