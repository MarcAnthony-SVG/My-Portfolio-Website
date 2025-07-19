import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { Waypoint } from 'react-waypoint';

const HomeContainer = {
  overflow: 'hidden',
  height: '99.5vh',
  background: 'linear-gradient(135deg, #4a90e2, #50e3c2)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.2)',
};
const HomeText = {
  width: '73%',
  fontSize: '60%',
  fontFamily: 'Montserrat, sans-serif',
  background: 'transparent',
  cursor: 'default',
  display: 'flex',
  position: 'absolute',
  top: '46%',
  left: '27%',
  color: '#f5f7fa',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
};
const words = [
  ({ style }) => (
    <animated.div style={{ ...style, background: 'rgba(255, 182, 193, 0.3)', fontSize: '10vh' }}>
      Marc Anthony Rodriguez
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'rgba(173, 216, 230, 0.3)', fontSize: '10vh' }}>
      Software Developer
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'rgba(144, 238, 144, 0.3)', fontSize: '10vh' }}>
      Ready For Hire
    </animated.div>
  ),
];

function Home() {
  const ref = useRef([]);
  const [items, setItems] = useState([]);
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: 'translateY(50px) scale(0.8)', height: '60px' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)', height: '80px' },
    leave: { opacity: 0, transform: 'translateY(-50px) scale(0.8)', height: '0px' },
    config: { duration: 600, easing: t => t * t * (3 - 2 * t) }, // Smooth ease-in-out
    trail: 200, // Stagger animations
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems([words[0]]), 500));
    ref.current.push(setTimeout(() => setItems([words[1]]), 3000));
    ref.current.push(setTimeout(() => setItems([words[2]]), 6000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);


  return (
    <div className="home" style={HomeContainer}>
      <Waypoint
        onEnter={() => {
          reset();
        }}
      />
      <main style={HomeText}>
          {transitions((style, item, _, index) =>
            item ? (
              <animated.div
                key={index}
                style={style}
                className="text-2xl md:text-4xl font-bold tracking-tight text-shadow-lg"
              >
                {item({ style })}
              </animated.div>
            ) : null
          )}
      </main>
    </div>
  );
}
export default Home;