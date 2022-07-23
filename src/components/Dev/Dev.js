import React from "react";

import "./Dev.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Dev({
  name, 
  description, 
  img,
  url
}){
  var button = ''
  if (url) {
    button = <Button className="ent--btn" as="a" href={url} variant="outline-primary" target="_blank">More 
    Info</Button>
  } else { button = ""};
    return (
        <Card className="col ent--card bg-dark text-white m-1 overlay">
          <Card.Img src={img} alt="Card image" />
          <Card.Title>{name}</Card.Title>
          <Card.Text className="cardText">
            {description}
          </Card.Text>
          {button}
        </Card>
)
}