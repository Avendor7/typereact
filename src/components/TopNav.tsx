import React from 'react';
import './../styles/TopNav.css';
import { Navbar, Nav } from 'react-bootstrap'
function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="topnav">
      <Navbar.Brand href="#home">DayJourn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">Contact Us</Nav.Link>
          <Nav.Link href="/contact-us">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
