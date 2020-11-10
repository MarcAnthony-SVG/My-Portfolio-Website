import React from "react";
import profilePic from "./Images/profilePic.jpeg";
import "./Profile.css";
import Image from "react-bootstrap/Image";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  border: "2px solid red"
};

function Profile(props) {
  return (
    <div
      id="Profile"
      style={{
        backgroundColor: "#cfe2e2",
        height: "1100px",
        textAlign: "center",
      }}
    >
      <div
        id="Title"
        className="item"
        style={{
          textAlign: "center",
        }}
      >
        <h1>Profile</h1>
        <p>I'm a creative Javascript Developer</p>
      </div>
        <hr></hr>
      <div style={containerStyle}>
        <section id="About_Me" className="item">
          <h2>About me</h2>
          <p>
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. I love structure and order and I
            also stand for quality. I love spending time on fixing little
            details and optimizing web apps. Also I like working in a team,
            you'll learn faster and much more. As the saying goes: 'two heads
            are better than one'.
          </p>
        </section>
        <Image
          src={profilePic}
          style={{ height: "270px", width: "auto" }}
          id="ProfilePic"
          thumbnail
        />
        <section id="Details" className="item">
          <h2>Details</h2>
          <h3>Name:</h3>
          <p>Marc Rodriguez</p>
          <h3>Age:</h3>
          <p>28</p>
          <h3>Location:</h3>
          <p>San Antonio, Texas</p>
        </section>
      </div>
    </div>
  );
}
export default Profile;
