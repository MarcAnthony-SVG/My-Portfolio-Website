import React from "react";
import TechnicalSkills from "../Technical_Skills/Technical_Skills.jsx";
function Experience(props) {
  return (
    <div
      className="Experience"
      style={{ backgroundColor: "#cfe2e2", height: "700px" }}
    >
      <h1>Experience</h1>
      <p1 style={{ fontFamily: "Yellowtail", fontSize: "20px" }}>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p1>
      <div>
        <a href="https://www.linkedin.com/in/marcrodriguez2020/">
          <img alt="Linkedin"></img>
        </a>
        <a href="https://www.facebook.com/MarcRodriguez20">
          <img alt="Facebook"></img>
        </a>
        <a href=" ">
          <img alt="Website"></img>
        </a>
      </div>
      <TechnicalSkills></TechnicalSkills>
    </div>
  );
}
export default Experience;
