import React, {useState} from 'react';
import * as dateFns from 'date-fns';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './../styles/Calendar.scss';
import SidebarLink from './SidebarLink';
import logo from './../DayJourn_cropped.png';
import UserMenu from './UserMenu';

function Sidebar() {

  let [value, onChange] = useState(new Date());

  let start = dateFns.startOfWeek(value);
  let end = dateFns.endOfWeek(value);

  //loop through dates between start and end of a week
  const getDaysArray = (start: Date , end: Date) => {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
  };

  getDaysArray(start,end);
  
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
              value = {value}
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
