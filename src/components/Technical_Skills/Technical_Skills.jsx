import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

const Inline = {
  display: 'inline',
};

function TechnicalSkills(props) {
  const [isVisible, setVisibility] = useState(false);
  const componentFadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    textAlign: 'center',
  });
  const sectionFadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    textAlign: 'left',
    display: 'inline-block' || 'inline-block',
  });
  return (
    <div
      className="TechnicalSkills"
      style={{ backgroundColor: 'white', position: '10px' }}
    >
      <Waypoint
        scrollableAncestor={window}
        onEnter={() => {
          if (!isVisible) setVisibility(true);
          console.log('Show me the Technical Skills');
        }}
        onLeave={() => {
          if (isVisible) setVisibility(false);
        }}
      />
      <animated.h1 style={componentFadeAnimation}>Technical Skills</animated.h1>

      <animated.section style={sectionFadeAnimation}>
        <div style={{ textAlign: 'left' }}>
          <h4 style={Inline}>Front End </h4>
          <p style={Inline}>
            ​: JavaScript, HTML5, CSS3, React, Axios, Bootstrap, Material UI,
            Apollo-Client, Next.js
          </p>
          <br></br>
          <h4 style={Inline}>Back End </h4>
          <p style={Inline}>
            : Node.js, Express, MySQL,MongoDB, S3, D3, Graphql, Apollo-Server,
            PHP
          </p>
          <br></br>
          <h4 style={Inline}>Developer Tools </h4>
          <p style={Inline}>:​ React Debugger, Git, npm, Webpack, Babel </p>
        </div>
      </animated.section>
    </div>
  );
}
export default TechnicalSkills;
