import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Candidate.css';

const Candidate = ({ candidate }) => {
  const { deleteCandidate, getCandidate } = useContext(CandidatesContext);

  const { id, name, age, stage, address } = candidate;
  return (
    <li className="candidate z-depth-1-half" key={id}>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col>
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
            <Col className="d-flex justify-content-end align-items-center">
              <Link className="btn btn-primary mr-2" onClick={() => getCandidate(id)} to={`/edit/${id}`}>Ändra</Link>
              <Button variant="danger" onClick={() => deleteCandidate(id)}>Ta bort</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </li>

    // <li className="candidate" key={id}>
    //   <div className="candidate__container">
    //     <div className="candidate-container__field">Namn: {name}</div>
    //     <div className="candidate-container__field">Ålder: {age}</div>
    //     <div className="candidate-container__field">Adress: {address}</div>
    //     <div className="candidate-container__field">Steg: {stage}</div>
    //   </div>  
    //   <div className="candidate__container">
    //     <div className="candidate__container__button-wrapper">
    //       <Link onClick={() => getCandidate(id)} to={`/edit/${id}`}>Ändra</Link>
    //       <button className="btn btn-primary btn--delete" onClick={() => deleteCandidate(id)} className="delete-btn">X</button>
    //     </div>
    //   </div>  
    // </li>
  )
}

export default Candidate;
