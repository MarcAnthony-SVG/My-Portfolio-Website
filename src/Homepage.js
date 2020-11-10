import React from "react";
// import { Jumbotron, Button } from "react-bootstrap";
import Title from "./components/Title/Title.jsx";

import Profile from "./components/Profile/Profile.jsx";
import Experience from "./components/Experience/Experience.jsx";
// import Projects from "./components/OldProjects/OldProjects.jsx";
import ContactInfo from "./components/Contact/Contact.jsx";
import ProjectsContainer from "./components/Projects/ProjectsContainer.jsx";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/NavigationBar/NavBar.jsx";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
      <div className="App">
        <Navbar />
        <Title
          title="Title"
          dark={true}
          id="Title"
        />
        <Profile
          title="Profile"
          dark={false}
          id="Profile"
        />
        <Experience
          title="Experience"
          dark={true}
          id="Experience"
        />
        <ProjectsContainer
          title="Projects"
          dark={false}
          id="Projects"
        />
        <ContactInfo
          title="Contact"
          dark={true}
          id="Contact"
        />
      </div> 
    );
  }
}

export default Homepage;
