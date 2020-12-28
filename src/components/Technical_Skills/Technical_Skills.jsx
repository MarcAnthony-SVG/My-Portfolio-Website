import React, {useState} from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const Inline = {
  display: "inline",
};

function TechnicalSkills(props) {
  const [isVisible, setVisibility] = useState(false);

  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
  });
  return (
    <div className="TechnicalSkills" style={{ backgroundColor: "white" }}>
         <Waypoint
          scrollableAncestor={window}
          onEnter={() => {
            setVisibility(true);
            console.log("Technical Skills");
          }}
          onLeave={() => {
            setVisibility(false);
          }}
        />
      <animated.h1 style={fadeAnimation}>Technical Skills</animated.h1>

      <animated.section style={fadeAnimation}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h4 style={Inline}>Front End </h4>
          <p1>​: JavaScript, HTML5, CSS3, React, Axios, Bootstrap</p1>
          <br></br>
          <h4 style={Inline}>Back End </h4>
          <p1>: Node.js, Express, MySQL, S3, D3, Graphql, Apollo-Server, PHP </p1>
          <br></br>
          <h4 style={Inline}>Developer Tools </h4>
          <p1>:​ React Debugger, Git, npm, Webpack, Babel </p1>
        </div>
      </animated.section>
      {/* <section>
        <h1>Languages</h1>
      </section> */}
      {/* <hr></hr> */}
      {/* 
      <section>
        <h1>Tools</h1>
        <p>
          VS Code
          <span></span>
        </p>
        <p>
          VS Code
          <span></span>
        </p>
        <p>
          VS Code
          <span></span>
        </p>
        <p>
          VS Code
          <span></span>
        </p>
      </section> */}
    </div>
  );
}
export default TechnicalSkills;
