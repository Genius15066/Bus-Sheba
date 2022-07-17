import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

function Stat() {
  return (
    <Container>
      <Row className="stat mb-5">
        <Col md={4}>
          <h1>
            <CountUp start={0} end={100} duration={5} delay={0} /> million
          </h1>
          <p>Tickets Sold</p>
        </Col>
        <Col md={4}>
          <h1>
            {' '}
            <CountUp start={0} end={3000} duration={5} delay={0} />+
          </h1>
          <p>Routes</p>
        </Col>
        <Col md={4}>
          <h1>
            {' '}
            <CountUp start={0} end={500} duration={5} delay={0} /> million
          </h1>
          <p>App Downloads</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Stat
