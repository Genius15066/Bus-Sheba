import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import aboutImg from '../../assets/images/about.jpg'

function About() {
  return (
    <section className="about">
      <Container fluid>
        <Row className="justify-content-center align-items-center ">
          <Col md={5}>
            <Fade left duration={2000} distance="40px">
              <Image src={aboutImg} fluid />
            </Fade>
          </Col>
          <Col md={5} className="p-md-5 mt-md-0 mt-4">
            <Fade right duration={2000} distance="40px">
              <h1>About Our Company</h1>
              <p className="pr-md-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                illo nobis explicabo similique sed! Quibusdam dolor nemo magnam
                hic quo exercitationem, cumque maxime fugiat, laudantium est,
                assumenda eligendi recusandae deserunt maiores repellat quas
                reprehenderit sint quisquam iure reiciendis minus? Reprehenderit
                similique non modi. Iste dignissimos minus eligendi? Vero,
                tenetur laboriosam.
              </p>
              <Button className="btn-main text-white" href="#pricing">
                Learn More
              </Button>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
