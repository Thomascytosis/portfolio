import React, { useState } from "react";

import image7 from "./pexels-cottonbro-8721342.jpg"

import "./Contact.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Contact(){
    var [name, setName]=useState()
    var [company, setCompany]=useState()
    var [email, setEmail]=useState()
    var [message, setMessage]=useState()

    const nameUpdate=(event)=>{
        setName(event.target.value)
    }
    const companyUpdate=(event)=>{
        setCompany(event.target.value)
    }
    const emailUpdate=(event)=>{
        setEmail(event.target.value)
    }
    const messageUpdate=(event)=>{
        setMessage(event.target.value)
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <Container>
            <img
                className="d-block w-100 p-3"
                src={image7}
                alt="cyan colored photo of hacker with virtual reality goggles"
              />
            <Form>
                <Form.Group className="mb-3 bg-dark text-white" controlId="exampleForm.ControlInput1">
                    <Form.Label><h6>Name</h6></Form.Label>
                    <Form.Control required type="text" name="contactName" placeholder="name" onChange={nameUpdate} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white" controlId="exampleForm.ControlInput1">
                    <Form.Label><h6>Company</h6></Form.Label>
                    <Form.Control required type="text" name="contactCompany" placeholder="company" onChange={companyUpdate} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white" controlId="exampleForm.ControlInput1">
                    <Form.Label><h6>Email Address</h6></Form.Label>
                    <Form.Control required type="email" name="contactEmail" placeholder="name@example.com" onChange={emailUpdate} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h6>Message</h6></Form.Label>
                    <Form.Control required as="textarea" name="contactMessage" placeholder="text" rows={3} onChange={messageUpdate}/>
                </Form.Group>
                <Button variant="outline-danger btn-lg" id="send-button" onClick={handleShow}>
                Review and Submit
                </Button>
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header className="bg-dark text-white" closeButton>
                        <h1>Hello {name} with {company}</h1></Modal.Header>
                    <Modal.Body className="bg-dark text-white">
                    <p>Please review your Message:</p>
                    <div className="messageStyle">"{message}"</div>
                    <br />
                    <p>Please submit your message and I will contact you at this email: <span className="text-info">{email}</span></p><p>Thank You.</p>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark text-white">
                        <Button variant="secondary" onClick={handleClose}>
                            Edit Message
                        </Button>
                        <Button variant="danger">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Container>
    )
}