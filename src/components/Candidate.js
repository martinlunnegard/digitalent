import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import { Card, Button, Col, Row } from 'react-bootstrap';

const Candidate = ({ candidate }) => {
  const { deleteCandidate, getCandidate } = useContext(CandidatesContext);
  const { id, name, age, stage, address } = candidate;

  return (
    <li className="candidate z-depth-1-half" key={id}>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col sm="12" md="6" className="mb-4">
              <Card.Text style={{ fontSize: 18 }}>
                <span className="font-weight-bold mr-1">Namn:</span>{name}
              </Card.Text>
              <Card.Text style={{ fontSize: 18 }}>
                <span className="font-weight-bold mr-1">Ålder:</span>{age}
              </Card.Text>
              <Card.Text style={{ fontSize: 18 }}>
                <span className="font-weight-bold mr-1">Adress:</span>{address}
              </Card.Text>
              <Card.Text style={{ fontSize: 18 }}>
                <span className="font-weight-bold mr-1">Steg:</span>{stage}
              </Card.Text>
            </Col>
            <Col sm="12" md="6" className="d-flex justify-content-center justify-content-md-end align-items-center">
              <Link className="mr-2" onClick={() => getCandidate(id)} to={`/edit/${id}`}>
                <Button size="lg" variant="primary">Ändra</Button>
              </Link>
              <Button size="lg" variant="secondary" onClick={() => deleteCandidate(id)}>
                Ta bort
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </li>
  )
}

export default Candidate;
