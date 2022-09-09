import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavbarComp.css"

export default function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">/MI/</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Sobre mi</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Portafolio</Nav.Link>
            <Nav.Link href="#pricing">Contactos</Nav.Link>
          </Nav>
          <Nav >
            <div className="pruebaa">
            <Nav.Link href="#deets">facebook</Nav.Link>
            <Nav.Link href="#deets">Instagram</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">youtube</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
