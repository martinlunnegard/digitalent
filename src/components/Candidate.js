import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import { Card, Button } from 'react-bootstrap';
import './Candidate.css';

const Candidate = ({ candidate }) => {
  const { deleteCandidate, getCandidate } = useContext(CandidatesContext);

  const { id, name, age, stage, address } = candidate;
  return (
    <li className="candidate" key={id}>
      <Card className="mb-2">
        <Card.Body>
          <Card.Text>
            Namn: {name}
          </Card.Text>
          <Card.Text>
            Ålder: {age}
          </Card.Text>
          <Card.Text>
            Adress: {address}
          </Card.Text>
          <Card.Text>
            Steg: {stage}
          </Card.Text>
          <Link className="btn btn-primary" onClick={() => getCandidate(id)} to={`/edit/${id}`}>Ändra</Link>
          <Button variant="danger" onClick={() => deleteCandidate(id)}>Ta bort</Button>
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
