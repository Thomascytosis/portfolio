import React, { useState } from "react";
import data from "./data";
import edu from "./edu";

import Carousel from "../C_Carousel/C_Carousel";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Enthusiast from "../Enthusiast/Enthusiast";
import Dev from "../Dev/Dev";

import "./Navigation.css";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

var clicked = false;

export default function Navigation(){
  var [repos, setRepos] = useState([]);

  function gitFetch(){
    if (clicked === false) {
      console.log("fetching repos");
      fetch("https://api.github.com/users/thomascytosis/repos?type=owner")
        .then(response => response.json())
        .then(data => setRepos(data));
        // .then(() => console.log(data))
      clicked = true;
    }
  }
  const strDescending = [...repos].sort((a,b) => a.created_at > b.created_at ? -1 : 1,);
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="about">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="nav--link" eventKey="about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={gitFetch} className="nav--link" eventKey="portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav--link" eventKey="contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav--link" eventKey="education">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav--link" eventKey="enthusiast">Enthusiast</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav--link" eventKey="dev">Dev</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="about">
                <Carousel />
              </Tab.Pane>
              <Tab.Pane eventKey="portfolio">
              <Container className="port--container">
              <Row className="m-0">
                {strDescending.map(repo => (
                <Portfolio 
                  id={repo.id}
                  name={repo.name}
                  key={repo.id}
                  description={repo.description}
                  created_at={repo.created_at}
                  updated_at={repo.updated_at}
                  url={repo.html_url}
                  link={repo.homepage}
                />
                ))}
              </Row>
              </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="contact">
              <Contact />
              </Tab.Pane>
              <Tab.Pane eventKey="education">
              <Container className="edu--container">
              <Row className="m-0">
                  {edu.map(item => (
                  <Education
                  name={item.name}
                  key={item.id}
                  description={item.description}
                  url={item.html_url}
                  img={item.image}
                  />
                ))}
                </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="enthusiast">
              <Container className="ent--container">
              <Row className="m-0">
                  {data.map(item => (
                  <Enthusiast
                  name={item.name}
                  key={item.id}
                  description={item.description}
                  url={item.html_url}
                  img={item.image}
                  />
                ))}
                </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="dev">
                <Dev />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
}