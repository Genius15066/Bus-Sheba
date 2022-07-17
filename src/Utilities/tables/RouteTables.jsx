import React from 'react'
import { Container, Table } from 'react-bootstrap'

function RouteTables() {
  return (
    <div>
      <Container>
        <Table hover className="mt-3 tables">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Route ID</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>N5</td>
              <td>Dhaka</td>
              <td>Thakurgaon</td>
              <td>Add Bus</td>
            </tr>
            <tr>
              <td>1</td>
              <td>N5</td>
              <td>Dhaka</td>
              <td>Thakurgaon</td>
              <td>Add Bus</td>
            </tr>
            <tr>
              <td>1</td>
              <td>N5</td>
              <td>Dhaka</td>
              <td>Thakurgaon</td>
              <td>Add Bus</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default RouteTables
