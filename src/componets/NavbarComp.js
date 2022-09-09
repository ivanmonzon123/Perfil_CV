import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavbarComp.css"

export default function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{height: '6vh'}}>
      <Container>
        <Navbar.Brand href="#home">/MI/</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#features" style={{color: 'rgb(255, 0, 115)'}}>Inicio</Nav.Link>
            <Nav.Link href="#pricing">Sobre mi</Nav.Link>
            <Nav.Link href="#pricing">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Portafolio</Nav.Link>
            <Nav.Link href="#pricing">Contactos</Nav.Link>
          </Nav>
          <Nav >
            <div className="pruebaa">
            <Nav.Link href="#deets"><i class="fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#deets"><i class="fa-brands fa-instagram"></i></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"><i class="fa-brands fa-youtube"></i></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
