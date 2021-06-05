import React from 'react';
import './../styles/Sidebar.css';
import { Nav } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="col-sm-3 col-md-2 position-fixed sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
      </Nav.Link>
      </Nav>
    </div>


  );
}

export default Sidebar;
