import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <div>
      <Navbar className="nav_header" bg="light" expand="lg">
        <Navbar.Brand className="brand_name" href="/">
          Bus Sheba
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_private">
            <Nav.Link className="link-style" href="/bus_details">
              Add Bus
            </Nav.Link>
            <Nav.Link className="link-style" href="/home">
              Route Details
            </Nav.Link>
            <Nav.Link className="link-style" href="/link">
              Booking Report
            </Nav.Link>
            <Nav.Link className="link-style" href="/link">
              Bus Details
            </Nav.Link>
          </Nav>
          <Nav className="nav_public">
            <Nav.Link className="link-style" href="/home">
              Admin
            </Nav.Link>
            <Nav.Link className="link-style" href="/home">
              Registration
            </Nav.Link>
            <Nav.Link className="link-style" href="/link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
