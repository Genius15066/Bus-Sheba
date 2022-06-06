import React, { useState } from 'react'
import { Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

function BusDetailsForm() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <div className="mt-sm-5 mt-md-2 mb-5">
      <Container className="form_details">
        <Row className="mx-auto">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormLabel> Bus No</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom01"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="name"
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel> Bus Type</FormLabel>
                <Form.Group className="input-style">
                  <Form.Select
                    aria-label="Default select example"
                    controlId="validationCustom02"
                  >
                    <option>Select Bus Type</option>
                    <option value="1">Normal</option>
                    <option value="2">AC</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormLabel> No of Seats Rows </FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom03"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="name"
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel> Total Seats Column</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom04"
                >
                  <Form.Control type="email" name="email" />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormLabel> Origin</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom05"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="name"
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel> Destination</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom06"
                >
                  <Form.Control type="email" name="email" />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <FormLabel> Bus Name</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom07"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="name"
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center ">
              <button
                type="submit"
                className="submit-btn col-6 d-flex  justify-content-center"
              >
                Add Bus
              </button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default BusDetailsForm
