import React, { useState } from "react"

import image1 from "./a (16).jpg";
import image2 from "./a (17).jpg";
import image3 from "./IMAG0188.jpg";

import "./C_Carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from "react-bootstrap/Carousel"

export default function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="placeholder neon citylights"
              />
              <Carousel.Caption>
                <h3>PlaceHolder Title</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="placeholder neon citylights"
              />
      
              <Carousel.Caption>
                <h3>PlaceHolder Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="it's me in front of my workstation."
              />
      
              <Carousel.Caption>
                <h3>It's Me!</h3>
                <p>I'm a Junior Developer excited to continuously learn and develop</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }