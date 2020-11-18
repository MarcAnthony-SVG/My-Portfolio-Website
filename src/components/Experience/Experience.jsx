import React from "react";
import TechnicalSkills from "../Technical_Skills/Technical_Skills.jsx";

const ParentContainer = {
  borderStyle: "solid",
  height: "auto",
  width: "300px",
  padding: "10px",
  margin: "10px"
};
function Experience(props) {
  return (
    <div
      className="Experience"
      style={{
        backgroundColor: "#cfe2e2",
        height: "1400px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBlockStart: "0.1em" }}>Experience</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="ParentContainer" style={ParentContainer}>
          <div className="ChildContainer">
            <h4>Galvanize Inc</h4>
            <p3>4 Months</p3>
          </div>
          <div className="ChildContainer">
            <h4>Software Engineering Specialist</h4>
            <p3>Full-time</p3>
            <p3>
              Sep 2020 – Present Employment Duration
              <br></br>3 mos Location Austin, Texas, United States
            </p3>
            <div className="ChildContainer">
              <h4>Software Engineer</h4>
              <p3>Internship</p3>
              <p3>
                Aug 2020 – Sep 2020 Employment Duration
                <br></br>2 mos Location Austin, Texas, United States
              </p3>
            </div>
          </div>
        </div>
        <div className="ParentContainer" style={ParentContainer}>
          <div className="ChildContainer">
            <h4>US Army</h4>
            <p3> 5 Years 8 Months</p3>
          </div>
          <div className="ChildContainer">
            <h4>All-Source Analyst</h4>
            <p3>Full-time</p3>
            <p3>
              Prepared All-Source Intelligence products to support combat
              commanders. <br></br>
              Assessed the significance and reliability of incoming information
              with current intelligence.<br></br> Established and maintained
              systematic cross-reference intelligence records and files.
            </p3>
            <div className="ChildContainer">
              <h4>Full Motion Video (FMV) Intelligence Analyst</h4>
              <p3>Full-Time</p3>
              <p3>
                Produced detailed analytical products to build Patterns of Life
                (PoL) and target descriptions.
                <br></br>Conducted order of battle analysis, Activity-Based
                Intelligence (ABI), Battle Damage Assessment (BDA), Storyboards,
                Vehicle Follows, and 360-degree graphics.
              </p3>
            </div>
          </div>
        </div>

      </div>
      <p1 style={{ fontFamily: "Yellowtail", fontSize: "20px" }}>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p1>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
}
export default Experience;
