import React from "react";
import profilePic from "./Images/profilePic.jpeg";
import "./Profile.css";
import Image from "react-bootstrap/Image";

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "auto",
  height: "auto",
};

function Profile(props) {
  return (
    <div
      id="Profile"
      style={{
        backgroundColor: "#cfe2e2",
        height: "730px",
        textAlign: "center",
        border: "65px inset darkslategrey",

      }}
    >
      <div
        id="Title"
        // className="item"
      >
        <h1 style={{ marginBlockStart: "0em" }}>Profile</h1>
        <p>I'm a creative Javascript Developer</p>
      </div>
      <hr></hr>
      <div style={containerStyle}>
        <section id="About_Me" className="Information_Box">
          <h2 id="Title">About me</h2>
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
          style={{ height: "350px", width: "auto", borderRadius: "10%" }}
          id="ProfilePic"
          thumbnail
        />
        <section id="Details" className="Information_Box">
          <h2>Details</h2>
          <div
            style={{
              textAlign: "left",
            }}
          >
            <h4 style={{ display: "inline" }}>Name</h4>
            <p style={{ display: "inline" }}>: Marc Rodriguez</p>
            <br></br>
            <h3 style={{ display: "inline" }}>Age</h3>
            <p style={{ display: "inline" }}>:28</p>
            <br></br>
            <h3 style={{ display: "inline" }}>Location</h3>
            <p style={{ display: "inline" }}>San Antonio, Texas</p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Profile;
