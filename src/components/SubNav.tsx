import React from 'react';
import './../styles/SubNav.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
function SubNav() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" id="subnav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Monday</Nav.Link>
                    <Nav.Link href="/about-us">Tuesday</Nav.Link>
                    <Nav.Link href="/contact-us">Wednesday</Nav.Link>
                    <Nav.Link href="/contact-us">Thursday</Nav.Link>
                    <Nav.Link href="/contact-us">Friday</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default SubNav;
