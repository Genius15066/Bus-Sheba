import React from 'react'
import Contact from '../components/Home/Contact'
import About from '../components/Home/About'
import Banner from '../components/Home/Banner'
import Stat from '../components/Home/Stat'

function HomePage() {
  return (
    <div className="home">
      <Banner />
      <Stat />
      <About />
      <Contact />
    </div>
  )
}

export default HomePage
