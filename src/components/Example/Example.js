import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import "./Example.css"

export default function Example(props){
  //https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../images/project', false, /\.(png|jpe?g|svg)$/));
  var image = "";
  if (images[props.name + ".jpg"]){
    image = (images[props.name + ".jpg"])}
    else {
      image = props.img
    };

    var toUrl = ''
    if (props.link) {
      toUrl = <Button as="a" variant="outline-danger" href={props.link} target="_blank">Go to the Website</Button>
    } else { toUrl = ""};

    return (
        <Modal className="example" centered show={props.show} onHide={props.close}>
        <Modal.Header className="text-white" closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Image className="bg-dark text-white" src={image} alt={"example image of " + props.name + " webpage"}/>
        <Modal.Body className="text-white">{props.description}</Modal.Body>
        <Modal.Footer className="text-white">
          <Button variant="outline-secondary" onClick={props.close}>
            Stay and Explore
          </Button>
          <Button as="a" variant="outline-success" href={props.url} target="_blank">
            Go to the Github Repository
          </Button>
          {toUrl}
        </Modal.Footer>
        </Modal>
    )
}