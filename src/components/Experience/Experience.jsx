import React from "react";
import TechnicalSkills from "../Technical_Skills/Technical_Skills.jsx";
function Experience(props) {
  return (
    <div
      className="Experience"
      style={{ backgroundColor: "#cfe2e2", height: "700px" , textAlign: "center",
      }}
    >
      <h1>Experience</h1>
      <p1 style={{ fontFamily: "Yellowtail", fontSize: "20px" }}>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p1>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
}
export default Experience;
