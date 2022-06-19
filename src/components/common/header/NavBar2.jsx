import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo.svg'

function NavBar() {
  const [isSticky, setSticky] = useState(false)
  const [isCollapsed, setCollapsed] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className={isSticky || isCollapsed ? 'shadow-sm nav_header p-3' : 'p-3'}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="brand_name"
        style={{ color: '#3a4256', fontSize: '1.55rem' }}
      >
        <img
          alt="Logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        <strong>Bus Sheba</strong>
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? 'show' : null)}
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
        <Nav className="ms-lg-auto text-sm-center py-2">
          <Nav.Link
            as={Link}
            to="/"
            className="mr-md-5 link_style"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>
          <Nav.Link href="/registration" className="link_style" active>
            Registration
          </Nav.Link>
          <Nav.Link href="/admin" className="link_style" active>
            Admin
          </Nav.Link>

          <Nav.Link href="/login" className="btn btn-main link_style" active>
            Login
          </Nav.Link>
          <Nav.Link href="/contact" className="link_style" active>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
