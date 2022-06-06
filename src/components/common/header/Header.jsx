import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import NavBar from './NavBar'

function Header() {
  return (
    <main>
      <section className="header_component">
        <div className="top_header">
          <a className="me-5" href="/contact">
            Contact Us
          </a>
          <FiPhoneCall />{' '}
          <a className="me-5" href="tel:16374">
            16374
          </a>
        </div>
        <NavBar />
      </section>
    </main>
  )
}

export default Header
