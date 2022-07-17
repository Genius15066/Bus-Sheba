import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddBus from '../components/admin/AddBus'
import SideBar from '../components/common/SideBar'

function AddBusPage() {
  return (
    <Row className="sidebar d-flex justify-content-between">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={9} className="box">
        <AddBus />
      </Col>
    </Row>
  )
}

export default AddBusPage
