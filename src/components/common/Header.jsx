import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import image from '../../assets/images/banner.jpg'
import NavBar from './NavBar'

function Header() {
  return (
    <main>
      <section className="header_component">
        <div className="top_header">
          <a className="mx-5" href="https://www.shohoz.com/contact-us/en">
            Contact US
          </a>
          <FiPhoneCall />{' '}
          <a className="me-5" href="tel:16374">
            16374
          </a>
        </div>
        <NavBar />
      </section>

      <section className="header_body">
        <img src={image} alt="" />
      </section>

      <section className="bottom_header">
        <div>
          <h1>100+ million</h1>
          <p>Tickets Sold</p>
        </div>
        <div>
          <h1>3000+</h1>
          <p>Routes</p>
        </div>
        <div>
          <h1>5+ million</h1>
          <p>App Downloads</p>
        </div>
      </section>
    </main>
  )
}

export default Header
