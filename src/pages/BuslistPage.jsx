import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/common/SideBar'
import Buslist from '../components/user/Buslist'

function BuslistPage() {
  return (
    <Row className="sidebar d-flex justify-content-between">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={9} className="box">
        <Buslist />
      </Col>
    </Row>
  )
}

export default BuslistPage
