import React from 'react';
import './../styles/NavTabs.scss';
import { Tabs, Tab, } from 'react-bootstrap';
import NavTab from './NavTab'

function NavTabs() {
    return (
        <div className="myTabs">
            <NavTab />
            <NavTab />
            <NavTab />
            <NavTab />
            <NavTab />
            <NavTab />
            <NavTab />
        </div>

    );
}

export default NavTabs;
