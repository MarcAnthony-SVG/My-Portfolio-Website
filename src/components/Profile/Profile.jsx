import React from "react";
import profilePic from "./Images/profilePic.jpeg";
import "./Profile.css";

function Profile(props) {
  return (
    <div
      id="Profile"
      className="flex-container"
      style={{ backgroundColor: "#cfe2e2" }}
    >
      <div id="Title" className="item">
        Title
        <h1>Profile</h1>
        <p>I'm a creative Javascript Developer</p>
      </div>
      <div id="About_Me" className="item">
        About me
        <p>
          I am an allround web developer. I am a senior programmer with good
          knowledge of front-end techniques. I love structure and order and I
          also stand for quality. I love spending time on fixing little details
          and optimizing web apps. Also I like working in a team, you'll learn
          faster and much more. As the saying goes: 'two heads are better than
          one'.
        </p>
      </div>
      <img src={profilePic} alt="ProfilePic" id="ProfilePic"></img>
      <div id="Details" className="item">
        Details
        <h2>Name:</h2>
        <p>Marc Rodriguez</p>
        <h2>Age:</h2>
        <p>28</p>
        <h2>Location:</h2>
        <p>San Antonio, Texas</p>
      </div>
    </div>
  );
}
export default Profile;
