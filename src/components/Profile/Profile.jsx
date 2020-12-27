import React, {useState} from "react";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

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
  const [isVisible,setVisibility] = useState(false);

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
  });
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
        <Waypoint
          onEnter={()=>{setVisibility(true)}}
        />

        <animated.h1 style={animation}>Profile</animated.h1>
        <p>I'm a creative Javascript Developer</p>
      </div>
      <div style={containerStyle}>
        <section id="About_Me" className="Information_Box">
          <h2 id="Title">About me</h2>
          <p style={{ padding: "10px" }}>
            Welcome to my website, which is continually being updated with new
            and exciting features that I've learned from my experience while
            working as a developer. From a young age, I always had an affinity
            for problem-solving, working with others, being creative, and
            pursuing my dreams. When it comes to picking a career, I've always
            been one to say, "do something that you have a passion for, and that
            will bring you great happiness." So far, I've had two careers, both
            of which I love. In my first career, I was a soldier trained as an
            intelligence analyst, and in my current position, I'm a software
            engineer. I always knew I wanted to be a software engineer, but I
            never had the means to pursue it until one day, the opportunity
            came, and I took it. Since then, I've enjoyed working with a great
            variety of mentors and colleges, solving mundane and exciting
            problems and showing off my ability to problem-solve and come up
            with creative solutions to everyday issues.
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
              padding: "10px",
            }}
          >
            <h3 style={{ display: "inline" }}>Occupation</h3>
            <p style={{ display: "inline" }}>:Software Engineer</p>
            <br></br>

            <h4 style={{ display: "inline" }}>Name</h4>
            <p style={{ display: "inline" }}>: Marc Rodriguez</p>
            <br></br>
            <h3 style={{ display: "inline" }}>Age</h3>
            <p style={{ display: "inline" }}>:28</p>
            <br></br>
            <h3 style={{ display: "inline" }}>Location</h3>
            <p style={{ display: "inline" }}>:San Antonio, Texas</p>
            <br></br>
            <h3 style={{ display: "inline" }}>Email</h3>
            <p style={{ display: "inline" }}>
              :Marcanthonyrodriguez95@gmail.com
            </p>
            <br></br>
            <h3 style={{ display: "inline" }}>Phone Number</h3>
            <p style={{ display: "inline" }}>:210-745-8744</p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Profile;
