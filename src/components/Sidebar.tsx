import React, {useState, FC, useContext} from 'react';
import './../styles/Sidebar.scss';
import { Nav, Navbar } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './../styles/Calendar.scss';
import SidebarLink from './SidebarLink';
import UserMenu from './UserMenu';
import {useSelectedDate} from './SelectedDateContext';

import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';

const Sidebar:FC = () =>{

  const [selectedDate, setDate] = useSelectedDate();
  const [value, setValue] = React.useState<Date | null>(new Date());

//const [selectedDate:, onChange] useContext(SelectedDateContext);  
   
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column sidebar">
      <Navbar.Brand href="#home"><h2>Dayjourn</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="col">
          <div className="row">
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={selectedDate}
              onChange={(date) => setDate(date || new Date())}
              renderInput={(params) => <TextField {...params} />}
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
