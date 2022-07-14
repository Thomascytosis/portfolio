import React, { useState } from "react";

import Example from "../Example/Example";

import octocat from "./Octocat.png";

import "./Portfolio.css"

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Portfolio({
  name, 
  description, 
  created_at, 
  updated_at,
  url,
  link
}){

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  
    return (
          <Card className="port--card col bg-secondary text-white m-1">
          <Example 
            name={name} 
            description={description} 
            img={octocat}
            show={show} close={handleClose} url={url} link={link} />
          <Card.Img className="rounded mx-auto" src={octocat} alt="Card image" />
            <Card.ImgOverlay className="overlay">
              <Card.Title className="port--title">{name}</Card.Title>
              <Card.Text className="port--description cardText">
                {description}
              </Card.Text>
              <Card.Text className="port--date cardText">Created : {created_at}</Card.Text>
              <Button className="port--btn" variant="danger" onClick={handleShow}>Example</Button>
            </Card.ImgOverlay>
          </Card>
)
}
