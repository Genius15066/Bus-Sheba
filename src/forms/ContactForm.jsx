import React from 'react'
import { Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

function ContactForm() {
  return (
    <div className="mt-sm-5 mt-md-2 mb-5">
      <Container className="form_details">
        <Row className=" mx-auto">
          <Form>
            <Row>
              <Col md={6}>
                <FormLabel>
                  Your Name <span className="required">*</span>
                </FormLabel>
                <Form.Group className="input-style">
                  <Form.Control
                    type="text"
                    className="style-text"
                    placeholder="Name"
                    name="name"
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel>
                  {' '}
                  Your Email <span className="required">*</span>
                </FormLabel>
                <Form.Group className="input-style" controlId="formGroupEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <FormLabel>
              {' '}
              Subject <span className="required">*</span>
            </FormLabel>
            <Form.Group className="input-style">
              <Form.Control type="text" placeholder="Subject" name="subject" />
            </Form.Group>
            <FormLabel className="form-label">
              Message <span className="required">*</span>
            </FormLabel>
            <Form.Group className="input-style">
              <textarea
                className="form-control "
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              >
                {' '}
              </textarea>
            </Form.Group>
            <div className="d-flex justify-content-center ">
              <button
                type="submit"
                className="submit-btn col-6 d-flex  justify-content-center"
              >
                Send Message
              </button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default ContactForm
