import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import Header from './components/common/header/Header'
import RouteDetailsPage from './pages/RouteDetailsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import BusDetailsPage from './pages/BusDetailsPage'
import LoginPage from './pages/LoginPage'
import BookingReportPage from './pages/BookingReportPage'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/route_details" element={<RouteDetailsPage />} />
        <Route path="/booking_reports" element={<BookingReportPage />} />
        <Route path="/bus_details" element={<BusDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
