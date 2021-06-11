import React from 'react';
import './../styles/NavTabs.scss';
import { Tabs,Tab,  } from 'react-bootstrap'
function NavTabs() {
    return (
        <Tabs defaultActiveKey="profile" id="weekdayTabNav" className="mb-3 myTabs" nav-fill>
            <Tab eventKey="monday" title="Monday">
                <h1>Monday</h1>
            </Tab>
            <Tab eventKey="tuesday" title="Tuesday">
                <h1>Tuesday</h1>
            </Tab>
            <Tab eventKey="wednesday" title="Wednesday">
                <h1>Wednesday</h1>
            </Tab>
            <Tab eventKey="thursday" title="Thursday">
                <h1>Thursday</h1>
            </Tab>
            <Tab eventKey="friday" title="Friday">
                <h1>Friday</h1>
            </Tab>
        </Tabs>
    );
}

export default NavTabs;
