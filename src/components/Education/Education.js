import React from "react";

import "./Education.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Education(props){
    return (
        <Card className="col edu--card bg-dark text-white m-1">
            <Card.Img src={props.img} alt="Card image" />
            <Card.Title>{props.name}</Card.Title>
            <Card.Text className="cardText">{props.description}</Card.Text>
            <Button className="edu--btn" as="a" href={props.url} variant="outline-primary" target="_blank">{props.name} Website</Button>
        </Card>
)
    }