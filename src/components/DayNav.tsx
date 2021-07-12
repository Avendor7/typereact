import React from 'react';
import './../styles/DayNav.scss';
import { Tabs, Tab, } from 'react-bootstrap';
import NavTab from './NavTab'

function DayNav() {
    return (
        <div className="myTabs">
            <NavTab number="23"/>
            <NavTab number="24" />
            <NavTab number="25" />
            <NavTab number="26" />
            <NavTab number="27" />
            <NavTab number="28" />
            <NavTab number="29" />
        </div>

    );
}

export default DayNav;
