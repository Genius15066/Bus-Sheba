import React, { useState } from 'react'
import { Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

function AddBusForm() {
  const { handleSubmit } = useForm()
  const [busNumber, setBusNumber] = useState('')
  const [busName, setBusName] = useState('')
  const [busType, setBusType] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [time, setTime] = useState('')
  const [numberofrows, setNumberofrows] = useState('')
  const [numberofcolumns, setNumberofcolumns] = useState('')
  const [response, setResponse] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    const busData = {
      busnumber: busNumber,
      busname: busName,
      bustype: busType,
      origin,
      destination,
      time,
      num_of_row: numberofrows,
      num_of_col: numberofcolumns,
    }
    const url = `https://localhost:7156/api/buslist`

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(busData),
      // eslint-disable-next-line no-unused-vars
    }).then((res) => setResponse(true))
  }
  const handleChange = (e) => {
    if (e.target.name === 'busNo') {
      setBusNumber(e.target.value)
    }
    if (e.target.name === 'name') {
      setBusName(e.target.value)
    }

    if (e.target.name === 'bustype') {
      setBusType(e.target.value)
    }
    if (e.target.name === 'origin') {
      setOrigin(e.target.value)
    }
    if (e.target.name === 'destination') {
      setDestination(e.target.value)
    }

    if (e.target.name === 'time') {
      setTime(e.target.value)
    }
    if (e.target.name === 'rows') {
      setNumberofrows(e.target.value)
    }

    if (e.target.name === 'columns') {
      setNumberofcolumns(e.target.value)
    }
  }
  return (
    <div className="mt-sm-5 mt-md-2 mb-5">
      {response && (
        <Toast delay={3000} autohide className="d-flex p-3">
          <Toast.Body>Successfully Added the Bus</Toast.Body>
          <Button
            className="bg-white btn-sm"
            onClick={() => setResponse(false)}
          >
            {' '}
            Close
          </Button>
        </Toast>
      )}
      <Container className="form_details">
        <Row className="mx-auto">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                    name="busNo"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <FormLabel> Bus Type</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom03"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="bustype"
                    onChange={handleChange}
                  />
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
                    name="rows"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel> Total Seats Column</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom04"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="columns"
                    onChange={handleChange}
                  />
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
                    name="origin"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col Col md={6}>
                <FormLabel> Destination</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom06"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="destination"
                    onChange={handleChange}
                  />
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
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <FormLabel> Departure Time</FormLabel>
                <Form.Group
                  className="input-style"
                  controlId="validationCustom07"
                >
                  <Form.Control
                    type="text"
                    className="style-text"
                    name="time"
                    onChange={handleChange}
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

export default AddBusForm
