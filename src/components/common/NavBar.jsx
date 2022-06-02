import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <div className="nav_header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="brand_name" href="#home">
            Bus Sheba
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
