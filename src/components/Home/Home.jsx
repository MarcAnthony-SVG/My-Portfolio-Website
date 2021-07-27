import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const Background = require('./Images/BlueBackground.jpg');
//Styles////////////////////
const HomeContainer = {
  overflow: 'hidden',
  height: '99.5vh',
  backgroundImage: `url(${Background})`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
};
const HomeText = {
  overflow: 'hidden',
  width: '73%',
  fontSize: '55%',
  fontFamily:
    'apple system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif',
  background: 'transparent',
  cursor: 'default',
  display: 'flex',
  position: 'absolute',
  top: '46%',
  left: '27%',
};
const words = [
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightpink' }}>
      Marc Anthony Rodriguez
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightblue' }}>
      Software Developer
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightgreen' }}>
      Ready For Hire
    </animated.div>
  ),
];
////////////////////////////
function Home() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: '100%',
      height: '70%',
      innerHeight: '100px',
      color: '#F8F8FF',
      padding: '0.2%',
      fontSize: '500%',
      top: '3%',
      fontWeight: 'bold',
    },
    enter: [
      {
        opacity: '60%',
        height: '100%',
        innerHeight: '100px',
        top: '55%',
      },
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

  // useEffect(() => void reset(), [reset]);
  // const [clicked, setClicked] = useState(false);
  // useEffect(() => {
  //   if (clicked) {
  //     window.location.assign(this);
  //   }
  // });
  return (
    <div  className="home"style={HomeContainer}>
      <Waypoint
        onEnter={() => {
          reset();
        }}
      />
      <div style={HomeText}>
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
