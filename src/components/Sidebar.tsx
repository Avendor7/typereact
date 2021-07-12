import React from 'react';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './../styles/Calendar.scss';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column">
      <Navbar.Brand href="#home">DayJourn</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="col">
          <div className="row">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/twoweeksago">Two Weeks Ago</a></li>
              <li><a href="/lastweek">Last Week</a></li>
              <li><a href="/thisweek">This Week</a></li>
              <li><a href="/nextweek">Next Week</a></li>
            </ul>
          </div>
          <div className="row">
            <Calendar
              calendarType = "US"
            />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
