import React, {useState, FC} from 'react';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './../styles/Calendar.scss';
import SidebarLink from './SidebarLink';
import logo from './../DayJourn_cropped.png';
import UserMenu from './UserMenu';

interface SidebarProps {
  selectedDate: Date,
  onChange(newDate:Date):void
}


const Sidebar:FC<SidebarProps> = ({selectedDate, onChange}) =>{
  
   
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar">
      <Navbar.Brand href="#home"><h2>Dayjourn</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="col">
          <div className="row">
            <ul>
              <SidebarLink linktext="Two Weeks Ago" />
              <SidebarLink linktext="Last Week" />
              <SidebarLink linktext="This Week" />
              <SidebarLink linktext="Next Week" />
            </ul>
          </div>
          <div className="row">
            <Calendar
              calendarType = "US"
              onChange = {onChange}
              value = {selectedDate}
            />
          </div>
          <div className="row">
            <UserMenu />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
