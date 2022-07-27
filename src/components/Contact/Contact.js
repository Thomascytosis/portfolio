import React, { useState } from "react";
import { useNavigate } from "react-router";

import image7 from "./pexels-cottonbro-8721342.jpg"

import "./Contact.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

export default function Contact(){
    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        message:""
      });
      const navigate = useNavigate();
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      // This function will handle the submission.
      async function onSubmit(e) {
        console.log("prevent default");
        e.preventDefault();
      
        //make Post to AWS Lambda which sends JSON to MongoDB
        const newContact = { ...form };
        var xhr = new XMLHttpRequest();
        xhr.open("POST", process.env.REACT_APP_LAMBDA_URL , true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(newContact));
        //clear form and close module with a thank you
        setForm({ name: "", company: "", email: "", message:"" });
        handleClose();
        handleSent();
        navigate("/");
        console.log("navigate to root");
      }
    //confirm Modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false); 
    //thank you modal
    const [sent, sentShow] = useState(false);
    const handleSent = () => sentShow(true);
    const sentClose = () => sentShow(false); 
    
    return (
        <Container className="contact--container">
            <Image
                className="d-block w-100"
                src={image7}
                alt="cyan lighted room with hacker wearing virtual reality goggles"
              />
            <Form onSubmit={onSubmit} id="myForm" className="p-3">
                <Form.Group className="mb-3 bg-dark text-white">
                    <Form.Label htmlFor="name"><h6>Name</h6></Form.Label>
                    <Form.Control required type="text" value={form.name} id="name" placeholder="name" onChange={(e) => updateForm({ name: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white">
                    <Form.Label htmlFor="company"><h6>Company</h6></Form.Label>
                    <Form.Control required type="text" value={form.company} id="company" placeholder="company" onChange={(e) => updateForm({ company: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white">
                    <Form.Label htmlFor="email"><h6>Email Address</h6></Form.Label>
                    <Form.Control required type="email" value={form.email} id="email" placeholder="name@example.com" onChange={(e) => updateForm({ email: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3 bg-dark text-white">
                    <Form.Label htmlFor="message"><h6>Message</h6></Form.Label>
                    <Form.Control required as="textarea" value={form.message} id="message" placeholder="text" rows={3} onChange={(e) => updateForm({ message: e.target.value })} />
                </Form.Group>
                <Button variant="outline-danger btn-lg" onClick={handleShow}>
                Review and Submit
                </Button>
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header className="bg-dark text-white" closeButton>
                        <h1>Hello {form.name} with {form.company}</h1></Modal.Header>
                    <Modal.Body className="bg-dark text-white">
                    <p>Please review your Message:</p>
                    <div className="messageStyle">"{form.message}"</div>
                    <br />
                    <p>Please submit your message and I will contact you at this email: <span className="text-info">{form.email}</span></p><p>Thank You.</p>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark text-white">
                        <Button variant="secondary" onClick={handleClose}>
                            Edit Message
                        </Button>
                        <Button variant="danger" type="submit" form="myForm">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
                <Modal centered show={sent} onHide={sentClose}>
                    <Modal.Header className="bg-dark text-white" closeButton>
                        <h1>Thank you</h1></Modal.Header>
                    <Modal.Footer className="bg-dark text-white">
                        <Button variant="secondary" onClick={sentClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </Container>
    )
}