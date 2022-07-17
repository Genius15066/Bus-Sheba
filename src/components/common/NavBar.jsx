import { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

function NavBar() {
  const [isSticky, setSticky] = useState(false)
  const [isCollapsed, setCollapsed] = useState(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    })
  }, [])
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className={isSticky || isCollapsed ? 'ps-5 py-3 sticky' : 'ps-5 py-3'}
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
          <Nav className="ms-lg-auto text-sm-center pe-4">
            <Nav.Link
              as={Link}
              to="/"
              className="mr-md-5 link_style "
              onClick={() => window.scrollTo(500, 0)}
              active
            >
              Home
            </Nav.Link>
            <Nav.Link href="/dashboard" className="link_style ">
              Dashboard
            </Nav.Link>

            <Nav.Link href="/login" className=" link_style " active>
              Login
            </Nav.Link>
            <Nav.Link href="/contact" className="link_style" active>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
