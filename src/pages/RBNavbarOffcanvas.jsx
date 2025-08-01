import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import CustomNavDropdown from '../components/CustomNavDropdown'
const RBNavbarOffcanvas = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <CustomNavDropdown title="Dropdown 1" />
                            <CustomNavDropdown title="Dropdown 2" />

                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                            <Button onClick={handleShow}>Contact</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={show} placement='end' onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default RBNavbarOffcanvas
