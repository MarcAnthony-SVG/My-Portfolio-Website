import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import { useSpring, animated } from 'react-spring';
import Profile from '../Profile/Profile';
import './styles.css';

const FadeIn = () => {
  // var slideCount = 0;
  const [isDisplayed, setDisplay] = useState(false);
  const visibleAnimation2 = useSpring({
    height: isDisplayed ? '200vh' : '0',
    opacity: 1,
  });
  const firstFadeOut = useSpring({
    to: [
      {
        opacity: 1,
        padding: '50%',
        height: '100%',
        background: 'linear-gradient(to right, #09010e, #101c2c)',
        borderBottom: '10px solid #2D3747',
        textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
      },
      {
        opacity: 1,
        padding: '0%',
        height: '0%',
        background: 'linear-gradient(to right, #101c2c, #101c2c)',
        borderBottom: '0px solid #2D3747',
        textShadow: '0px 0px 0px rgba(255,255,255,0.5)',
      },
    ],
    from: {
      opacity: isDisplayed ? '1' : '0',
      padding: '100%',
      height: '100%',
      background: 'linear-gradient(to right, #09010e, #101c2c)',
      borderBottom: '10px solid #2D3747',
      textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
    },
  });
  return (
    <div>
        <Waypoint
          onEnter={() => {
            console.log('Top');
            if (!isDisplayed) setDisplay(true);
          }}
        />
        <animated.div style={firstFadeOut} />
        <Waypoint
          onLeave={() => {
            console.log('Bottom');
            if (isDisplayed) setDisplay(false);
          }}
        />
        <Profile />
    </div>
  );
};
export default FadeIn;
