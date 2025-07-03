import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="glass-navbar my-4 mx-auto rounded justify-content-center">
      <Container className="d-flex flex-column align-items-center">
        {/* <Navbar.Brand as={Link} to="/" className="text-white fw-bold fs-3 mb-2">
          Shamii
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-flex flex-row gap-4 align-items-center text-center">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#footer" className="nav-link-custom">Contact</Nav.Link>

            {/* <Button className="hire-btn">Hire Me</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
