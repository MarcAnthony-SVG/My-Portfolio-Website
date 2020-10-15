import React from "react";
import placeholder from "./images/placeholder.png";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function Projects(props) {
  return (
    <div className="Projects" style={{ backgroundColor: "#cfe2e2" }}>
      <div className="title">
        <h1>Projects</h1>
        <p>Quote</p>

        <div>
          <CardDeck
            className="flex-container"
            styles={{ display: "flex", flexWrap: "wrap" }}
          >
            <Card
              style={{
                margin: "2rem",
                border: "3px solid silver",
                backgroundColor: "white",
                flex: 0.1,
              }}
            >
              <Card.Img
                variant="top"
                src={placeholder}
                style={{ height: "150px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>Real Estate Website</Card.Title>
                <Card.Text>
                  A website I created to use libraries, frameworks, and APIs
                  that I hadn’t used before, to challenge myself as a developer
                  and improve upon my skills.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card
              style={{
                margin: "2rem",
                border: "3px solid silver",
                backgroundColor: "white",
                flex: 0.1,
              }}
            >
              <Card.Img
                variant="top"
                src={placeholder}
                style={{ height: "150px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>MentorMii</Card.Title>
                <Card.Text>
                  A full-stack web application that connects those seeking
                  mentorship with a variety of skills with mentors that can
                  teach them those skills. Served as the Project Manager for a
                  team of six developers, managed tickets with Trello,
                  facilitated workflow, and tracked performance and progress,
                  ensuring completion of the application.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card
              style={{
                margin: "2rem",
                width: "233px",
                border: "3px solid silver",
                backgroundColor: "white",
                flex: 0.1,
              }}
            >
              <Card.Img
                variant="top"
                src={placeholder}
                style={{ height: "150px", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>RottenHuevos</Card.Title>
                <Card.Text>
                  A full-stack e-commerce application and alternative to Newegg.
                  I served as a software developer focusing on the front-end.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
}
export default Projects;
