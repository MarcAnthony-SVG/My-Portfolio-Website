import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const ReactSpringTest = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });


  const [isToggled, setToggle] = useState(false);
  
  const fade2 = useSpring({
    opacity: isToggled ? 1 : 0,
  });
  return (
    <div style={{ height: "1000px", background: "grey", border: "5px solid" }}>
      <animated.div style={fade}>hello</animated.div>
      <animated.div style={fade2}>This div is being toggled</animated.div>
      <button
        onClick={() => {
          setToggle(!isToggled);
        }}
      >
        toggle
      </button>
    </div>
  );
};
export default ReactSpringTest;
