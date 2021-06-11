import React from 'react';
import './../styles/Sidebar.css';
import { Nav, Navbar } from 'react-bootstrap';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">DayJourn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Navbar.Brand href="">Quick Links</Navbar.Brand>
          <Nav.Link href="/home">This Week</Nav.Link>
          <Nav.Link href="/home">This Week</Nav.Link>
          <Nav.Link eventKey="link-1">Last Week</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
