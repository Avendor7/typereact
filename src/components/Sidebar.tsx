import React from 'react';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './../styles/Calendar.scss';
import SidebarLink from './SidebarLink';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">DayJourn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="col">
          <div className="row">
            <hr></hr>
            <h3 className="header">Quick Links</h3>
            <ul>
              <SidebarLink linktext="Two Weeks Ago" />
              <SidebarLink linktext="Last Week" />
              <SidebarLink linktext="This Week" />
              <SidebarLink linktext="Next Week" />
            </ul>
          </div>
          <div className="row">
            <hr></hr>
            <h3 className="header">Calendar</h3>
            <Calendar
              calendarType = "US"
            />
          </div>
          <div className="row">
            <hr></hr>
            <h3 className="header">Tags</h3>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
