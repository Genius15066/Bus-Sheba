import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import bannerImg from '../../assets/images/banner-img2.jpg'

function Banner() {
  return (
    <Container fluid className="mb-4 banner">
      <Row className="align-items-center justify-content-center ">
        <Col md={4} className="p-md-5 order-2 order-md-1">
          <Fade left duration={2000} distance="40px">
            <h1>Book Your Seat </h1>
            <p className="my-4 pr-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              exercitationem asperiores officia assumenda labore! Quibusdam
              fugiat ut enim. Molestiae, assumenda!
            </p>
          </Fade>
        </Col>
        <Col md={6} className="order-1 order-md-2">
          <Fade right duration={2000} distance="40px">
            <Image src={bannerImg} fluid />
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
