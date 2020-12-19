import React from "react";

const Inline = {
  display: "inline",
};

function TechnicalSkills(props) {
  return (
    <div className="TechnicalSkills" style={{ backgroundColor: "white" }}>
      <h1 style={{ marginBlockStart: "1em" }}>Technical Skills</h1>

      <section>
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
      </section>
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
