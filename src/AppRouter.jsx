import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import BusDetailsPage from './pages/BusDetailsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import RouteDetailsPage from './pages/RouteDetailsPage'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bus_details" element={<BusDetailsPage />} />
        <Route path="/route_details" element={<RouteDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
