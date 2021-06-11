import React from 'react';
import './../styles/Sidebar.css';
import { Nav, Navbar } from 'react-bootstrap';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Navbar.Brand href="">Quick Links</Navbar.Brand>
      <Nav.Link href="/home">This Week</Nav.Link>
      <Nav.Link href="/home">This Week</Nav.Link>
      <Nav.Link eventKey="link-1">Last Week</Nav.Link>
    </Nav>
  );
}

export default Sidebar;
