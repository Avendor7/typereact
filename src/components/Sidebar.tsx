import React from 'react';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">DayJourn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Calendar/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
