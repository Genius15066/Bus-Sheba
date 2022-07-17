import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

function ManageBusTable() {
  const [buslist, setbuslist] = useState([])
  useEffect(() => {
    const url = `https://localhost:7156/api/buslist`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbuslist(data))
  }, [])

  const deleteProduct = (id) => {
    const url = `https://localhost:7156/api/buslist/${id}`
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .then((result) => console.log(result))
  }

  return (
    <div>
      <Container>
        <Table hover className="mt-3 tables">
          <thead>
            <tr className="text-center">
              <th>Bus No</th>
              <th>Bus Name</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          {[...buslist]
            .sort((a, b) => (a.busname < b.busname ? -1 : 1))
            .map((list) => {
              return (
                <tbody key={list.id} style={{ fontWeight: '500' }}>
                  <tr className="text-center">
                    <td>{list.busnumber}</td>
                    <td>{list.busname}</td>
                    <td>{list.origin}</td>
                    <td>{list.destination}</td>
                    <td>{list.time}</td>
                    <td>
                      <Button onClick={() => deleteProduct(list.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </Table>
      </Container>
    </div>
  )
}

export default ManageBusTable
