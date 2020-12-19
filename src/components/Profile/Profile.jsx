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
        width: "auto",
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
      <div style={containerStyle}>
        <section id="About_Me" className="Information_Box">
          <h2 id="Title">About me</h2>
          <p>
            Welcome to my personal website, I first was introduced to computer programming when I was in middle school.
          </p>
        </section>
        <Image
          src={profilePic}
          style={{ height: "44.5vh", width: "auto", borderRadius: "10%" }}
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
