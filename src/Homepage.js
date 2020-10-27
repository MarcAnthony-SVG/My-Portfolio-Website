import React from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import Title from "./components/Title/Title.jsx";

import Profile from "./components/Profile/Profile.jsx";
import Experience from "./components/Experience/Experience.jsx";
// import Projects from "./components/OldProjects/OldProjects.jsx";
import ContactInfo from "./components/Contact/Contact.jsx";
import ProjectsContainer from "./components/Projects/ProjectsContainer.jsx";

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
        <Title />
        <Profile />
        <Experience />
        <ProjectsContainer />
        <ContactInfo />
      </div>
    );
  }
}

export default Homepage;
