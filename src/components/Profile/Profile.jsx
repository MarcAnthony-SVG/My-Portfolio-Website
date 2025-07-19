import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Waypoint } from 'react-waypoint';

const profilePic = require('./Images/profilePic.jpeg'); // Adjust path as needed
const jobs = ['Software Engineer', 'Web Developer', 'Full Stack Developer']; // Example list

function Profile() {
  const [isVisible, setVisibility] = useState(false);
  const [occupation, setOccupation] = useState(jobs[0]);
  const [index, setIndex] = useState(0);
  const profileData = [
    { label: "Occupation", value: occupation },
    { label: "Name", value: "Marc Rodriguez" },
    { label: "Age", value: calculateAge(1995) },
    { label: "Location", value: "San Antonio, Texas" },
    { label: "Email", value: "Marcanthonyrodriguez95@gmail.com" },
    { label: "Phone Number", value: "210-745-8744" },
  ];
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const photoAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 700 },
  });

  const slideAnimation = useSpring({
    x: isVisible ? 0 : 100,
    from: { x: 100 },
    config: { tension: 120, friction: 14 },
  });
  function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % jobs.length),
      2500
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setOccupation(jobs[index]);
  }, [index]);

  return (
    <section
      className="profile-section"
      style={{
        background: 'linear-gradient(135deg, #4a90e2, #50e3c2)',
        height: '90vh',
        textAlign: 'center',
        border: '65px inset rgba(47, 79, 79, 0.8)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        color: '#f5f7fa',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <Waypoint
        onEnter={() => {
          if (!isVisible) setVisibility(true);
          console.log('Entering the profile section');
        }}
      />
      <animated.h1
        style={{
          ...fadeAnimation,
          fontSize: '3em',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          marginBottom: '20px',
        }}
      >
        Profile
      </animated.h1>
      <h3
        style={{
          fontSize: '1.5em',
          color: '#E6E6FA',
          marginBottom: '30px',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        }}
      >
        I'm a creative Software Developer
      </h3>
      <article
        className="container-article"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        <animated.article
          className="info-article"
          style={{
            ...slideAnimation,
            transform: slideAnimation.x.to((x) => `translate3d(${x * -0.11}%, 0, 0)`),
            width: '30%',
            padding: '15px',
            backgroundColor: 'rgba(169, 169, 169, 0.8)',
            border: '3px solid #2E86C1',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px rgba(46, 134, 193, 0.5)')}
          onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
        >
          <h2
            id="title"
            style={{ textAlign: 'center', fontSize: '1.8em', marginBottom: '10px' }}
          >
            About me
          </h2>
          <p
            style={{
              textAlign: 'left',
              fontSize: '1em',
              lineHeight: '1.5',
              color: '#f5f7fa',
            }}
          >
            Hey there! Welcome to my ever-evolving corner of the web where I’m constantly adding cool new features and leveling up my skills as a developer.
            I’ve always had a passion for software engineering, even before the stars aligned and I finally got the chance to dive in headfirst.
            Since then, it’s been an awesome ride filled with amazing mentors, inspiring teammates, and a mix of challenges from the routine to the downright exciting.
            I love tackling problems with creativity and turning everyday puzzles into smart, elegant solutions. Stick around and watch what I build next!
          </p>
        </animated.article>
        <div className="photo-article">
          <animated.img
            src={profilePic}
            id="profile-pic"
            style={{
              ...photoAnimation,
              height: '44vh',
              border: '3px solid #2E86C1',
              borderRadius: '10px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <animated.article
          className="info-article"
          style={{
            ...slideAnimation,
            transform: slideAnimation.x.to((x) => `translate3d(${x * 0.11}%, 0, 0)`),
            width: '30%',
            padding: '15px',
            backgroundColor: 'rgba(169, 169, 169, 0.8)',
            border: '3px solid #2E86C1',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px rgba(46, 134, 193, 0.5)')}
          onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
        >
          <h2 style={{ textAlign: 'center', fontSize: '1.8em', marginBottom: '10px' }}>
            Details
          </h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {profileData.map((item, index) => (
              <li key={index} className="profile-item">
                <b>{item.label}</b>: {item.value}
              </li>
            ))}
          </ul>
        </animated.article>
      </article>
      <Waypoint
        bottomOffset={'4px'}
        onLeave={() => {
          if (isVisible) setVisibility(false);
          console.log('Leaving the profile section');
        }}
      />
    </section>
  );
}

export default Profile;