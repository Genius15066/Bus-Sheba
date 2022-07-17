import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/common/footer/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/common/NavBar'
import Contact from './components/Home/Contact'
import BuslistPage from './pages/BuslistPage'
import AddBusPage from './pages/AddBusPage'
import ManageBusPage from './pages/ManageBusPage'

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<BuslistPage />} />
        <Route path="/dashboard/buslist" element={<BuslistPage />} />
        <Route path="/dashboard/addbus" element={<AddBusPage />} />
        <Route path="/dashboard/managebus" element={<ManageBusPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter
