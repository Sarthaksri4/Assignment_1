import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function BookMovie({ movie,setSumbitted }) {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState()
    

    const handleClose = () => {
        setShow(false)
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('age',age)
        setSumbitted(true)
        setTimeout(() => {
            setSumbitted(false)
        }, 3000);
    };
    const handleShow = () => {
        setShow(true)
    };

    return (
        <>
            <Button variant="success" onClick={handleShow} >
                <b>BOOK NOW</b>
            </Button>

            <Modal show={show} onHide={handleClose} centered={true} >
                <Modal.Header closeButton style={{ backgroundColor: "rgb(20, 20, 20)", color: "white" }}>
                    <Modal.Title>Book "{movie.name}" now</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "rgb(20, 20, 20)", color: "white" }}>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="John"
                                autoFocus
                                required={true}
                                value={name}
                                onChange={(event)=>setname(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="john@example.com"
                                autoFocus
                                value={email}
                                onChange={(event)=>setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="20"
                                autoFocus
                                value={age}
                                onChange={(event)=>setAge(event.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body >
                <Modal.Footer style={{ backgroundColor: "rgb(20, 20, 20)", color: "white" }}>
                    <Button variant="secondary" onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        BOOK NOW
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

