import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ManageBus from '../components/admin/ManageBus'
import SideBar from '../components/common/SideBar'

function ManageBusPage() {
  return (
    <Row className="sidebar d-flex justify-content-between">
      <Col md={2}>
        <SideBar />
      </Col>
      <Col md={9} className="box">
        <ManageBus />
      </Col>
    </Row>
  )
}

export default ManageBusPage
