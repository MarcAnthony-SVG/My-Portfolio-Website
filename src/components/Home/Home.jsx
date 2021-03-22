import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const Background = require('./Images/Artistic-4K-Wallpaper-3840x2160.jpg');
//Styles////////////////////
const HomeContainer = {
  border: '3px solid red',
  width: '100%',
  height: '99.5vh',
  backgroundImage: `url(${Background})`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};
const HomeText = {
  border: '3px solid red',

  // width: '73%',
  fontFamily:
    'apple system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
  background: 'transparent',
  cursor: 'default',
  display: 'flex',
  position: 'absolute',
  top: '46%',
  left: '27%',
};
// const transforms = {
//   overflow: 'hidden',
//   width: '100%',
//   color: 'white',
//   display: 'flex',
//   justifyContent: 'flex start',
//   alignItems: 'center',
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   willChange: 'transform, opacity, height',
//   whiteSpace: 'nowrap',
//   cursor: 'pointer',
// };
////////////////////////////
function Home(props) {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: '100%',
      height: '70%',
      innerHeight: '100px',
      color: '#F8F8FF',
      padding: '5px',
      fontSize: '500%',
      top: '3%',
      fontWeight: 'bold',
    },
    enter: [
      { opacity: '60%', height: '100%', innerHeight: '100px', top: '55%' },
      // { transform: 'perspective(130px) rotateX(180deg)', color: 'silver' },
      // { transform: 'perspective(880px) rotateX(10deg)' },
    ],
    leave: [
      { color: '#F5F5F5' },
      { innerHeight: '100px' },
      { opacity: '0%', height: 0 },
      { top: '44%' },
    ],
    update: { color: '#4682B4' },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(['Marc', 'Anthony', 'Rodriguez']), 1000)
    );
    ref.current.push(setTimeout(() => set(['Software', 'Engineer']), 4000));
    ref.current.push(setTimeout(() => set(['Ready', 'For', 'Hire']), 9000));
  }, []);

  useEffect(() => void reset(), [reset]);

  return (
    <div className="HomeContainer" style={HomeContainer}>
      <Waypoint
        onEnter={() => {
          reset();
        }}
      />
      <div className="HomeText" style={HomeText}>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div key={key} style={rest}>
            <animated.div>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
export default Home;
