import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { Waypoint } from "react-waypoint";
const Background = require("./Images/Artistic-4K-Wallpaper-3840x2160.jpg");

function Title(props) {
  const transforms = {
    overflow: "hidden",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    willChange: "transform, opacity, height",
    whiteSpace: "nowrap",
    cursor: "pointer",
  };

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: "100%",
      height: "70%",
      innerHeight: "100px",
      // transform: 'perspective(100px) rotateX(0deg)',
      color: "#F8F8FF",
      padding: "5px",
      fontSize: "4em",
      top: "3%",
      fontWeight: "bold",
    },
    enter: [
      { opacity: "60%", height: "100%", innerHeight: "100px", top: "55%" },
      // { transform: 'perspective(130px) rotateX(180deg)', color: 'silver' },
      // { transform: 'perspective(880px) rotateX(10deg)' },
    ],
    leave: [
      { color: "#F5F5F5" },
      { innerHeight: "100px" },
      { opacity: "0%", height: 0 },
      { top: "44%" },
    ],
    update: { color: "#4682B4" },
  });

  const reset = useCallback(
    () => {
      ref.current.map(clearTimeout);
      ref.current = [];
      set([]);
      ref.current.push(
        setTimeout(() => set(["Marc", "Anthony", "Rodriguez"]), 1000)
      );
      ref.current.push(setTimeout(() => set(["Software", "Engineer"]), 4000));
      ref.current.push(setTimeout(() => set(["Ready", "For", "Hire"]), 9000));
    },
    []
    //  setTimeout(() =>
    //   reset()
    // , 12000)
  );

  useEffect(() => void reset(), []);

  return (
    <div
      style={{
        width: "100%",
        height: "930px",
        // padding: 2,
        backgroundImage: `url(${Background})`,
        display: "flex",
        alignItems: "center",
        position:"relative"
      }}
    >
      <Waypoint onEnter={()=>{reset()}}/>
      <div
        style={{
          width: "500px",
          background: "black",
          fontFamily:
            "apple system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
          background: "transparent",
          webkitTouchCallout: "none",
          webkitUserSelect: "none",
          khtmlUserSelect: "none",
          mozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
          cursor: "default",
          display: "flex",
          position: "absolute",
          top: "46%",
          left: "27%",
        }}
      >
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div
            className="transitions-item"
            key={key}
            style={rest}
            onRender={reset}
          >
            <animated.div
            // style={{
            //   overflow: 'hidden',
            //   height: innerHeight,
            // fontSize: '4em',
            // fontWeight: 'bold',
            //   display: 'flex',
            //   alignItems: 'center',
            // }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
export default Title;

/* function Title(props) {
  return (
    <div
      id="Title"
      style={{
        height: "930px",
        width: "auto",
        display: "flex",
        margin: "auto",
        color: "grey",
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        id="Title"
        className="item"
        style={{
          fontFamily: "crackedCode",
          width: "auto",
          display: "flex",
          margin: "auto",
          fontSize: "5vmax",
        }}
      >
        Marc Anthony Rodriguez
      </div>
    </div>
  );
}
export default Title;
*/
