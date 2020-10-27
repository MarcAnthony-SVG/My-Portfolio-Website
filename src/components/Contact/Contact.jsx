import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function ContactInfo(props) {
  return (
    <div
      className="ContactInfo"
      style={{ backgroundColor: "#cfe2e2", height: "900px" }}
    >
      <h1>Contact</h1>
      {/* <div>{animation}</div> */}
      <p1>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p1>
      <div
        className="LinksContainer"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="Links">
          <AiFillLinkedin size="2em" />
          <a href="https://www.linkedin.com/in/marcrodriguez2020/">
            marcrodriguez2020
          </a>
        </div>
        <div className="Links">
          <AiFillFacebook size="2em" />
          <a href="https://www.facebook.com/MarcRodriguez20">MarcRodriguez20</a>
        </div>
        <div className="Links">
          <a href=" ">Website</a>
        </div>
        <div className="Links">
          <a href="FILL ME IN">marcanthonyrodriguez95@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;
