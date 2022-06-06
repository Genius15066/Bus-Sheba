import React from 'react'
import image from '../assets/images/banner.jpg'

function HomePage() {
  return (
    <div>
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
    </div>
  )
}

export default HomePage
