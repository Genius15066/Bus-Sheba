import React, { useState, useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

function BuslistTable() {
  const [buslist, setbuslist] = useState([])
  useEffect(() => {
    const url = `https://localhost:7156/api/buslist`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setbuslist(data))
  }, [])

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
              <th>Bus Type</th>
              <th>Departure Time</th>
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
                    <td>{list.bustype}</td>
                    <td>{list.time}</td>
                  </tr>
                </tbody>
              )
            })}
        </Table>
      </Container>
    </div>
  )
}

export default BuslistTable
