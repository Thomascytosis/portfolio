import React from "react";

import image14 from "./a (5).jpg";
import image15 from "./a (4).jpg";
import image16 from "./a (3).jpg";

import "./Dev.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Dev(){
    return (
        <Container className="row">
        <Card className="card--size bg-dark text-white m-1">
  <Card.Img src={image14} alt="Card image" />
    <Card.Title>Javascript</Card.Title>
    <Card.Text className="cardText">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="cardText">Last updated 3 mins ago</Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
</Card>
<Card className="card--size bg-dark text-white m-1">
  <Card.Img src={image15} alt="Card image" />
    <Card.Title>React</Card.Title>
    <Card.Text className="cardText">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="cardText">Last updated 3 mins ago</Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
</Card>
<Card className="card--size bg-dark text-white m-1">
  <Card.Img src={image16} alt="Card image" />
    <Card.Title>HTML</Card.Title>
    <Card.Text className="cardText">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="cardText">Last updated 3 mins ago</Card.Text>
    <Button variant="outline-primary">Go somewhere</Button>
</Card>
</Container>
)
}