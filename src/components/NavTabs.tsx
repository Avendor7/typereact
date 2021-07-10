import React from 'react';
import './../styles/NavTabs.scss';
import { Tabs, Tab, } from 'react-bootstrap';


function NavTabs() {
    return (
        <div className="myTabs">
            <ul>
                
                <li><a href="#">Monday</a></li>
                <li><a href="#">Tuesday</a></li>
                <li><a href="#">Wednesday</a></li>
                <li><a href="#">Thursday</a></li>
                <li><a href="#">Friday</a></li>
            </ul>
        </div>

    );
}

export default NavTabs;
