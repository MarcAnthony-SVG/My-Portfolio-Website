import React from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import Profile from "./components/Profile/Profile.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import ContactInfo from "./components/Contact/Contact.jsx";
import Container from "./components/Test/Container.jsx";

// import "./Homepage.css";

class Homepage extends React.Component {
  constructor() {
    super();
    this.name = "Marc Rodriguez";
    this.age = 25;
    this.city = "San Antonio";
  }

  render() {
    return (
      <div>
        <div style={{ fontSize: "55px", height: "950px",   justifyContent: "center"
  }}>Marc A Rodriguez</div>
        <Profile></Profile>
        <Experience></Experience>
        <Projects></Projects>
        <ContactInfo></ContactInfo>
        <Container></Container>
      </div>
    );
  }
}

export default Homepage;
