import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

var linkStyle = {
  margin: 2,
  width: "auto",
  border: "2px solid silver",
  flex: "auto",
  textAlign: "center",
};

function Contact(props) {

  return (
    <div
      className="Contact"
      style={{ backgroundColor: "#cfe2e2", height: "auto" , width:"auto" }}
    >
      <h1 style={{ marginBlockStart: "0.1em" }}>Contact</h1>
      <p>
        “If I had asked people what they wanted, they would have said faster
        horses. ” - Henry Ford
      </p>
      <div className="LinksContainer" style={{ display: "flex" , height:"auto" }}>
        <div style={linkStyle}>
          <AiFillLinkedin size="2em" />
          <a href="https://www.linkedin.com/in/marcrodriguez2020/">
            
          </a>
        </div>
        <div style={linkStyle}>
          <AiFillFacebook size="2em" />
          <a href="https://www.facebook.com/MarcRodriguez20">MarcRodriguez20</a>
        </div>
        <div style={linkStyle}>
          <a href=" ">Website</a>
        </div>
        <div style={linkStyle}>
          <a href="FILL ME IN">marcanthonyrodriguez95@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
