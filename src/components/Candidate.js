import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import './Candidate.css';

const Candidate = ({ candidate }) => {
  const { deleteCandidate } = useContext(CandidatesContext);

  const { id, name, age, stage, address } = candidate;
  return (
    <li className="candidate" key={id}>
      <div className="candidate__container">
        <div className="candidate-container__field">Namn: {name}</div>
        <div className="candidate-container__field">Ålder: {age}</div>
        <div className="candidate-container__field">Adress: {address}</div>
        <div className="candidate-container__field">Steg: {stage}</div>
      </div>  
      <div className="candidate__container">
        <Link to={`/edit/${id}`}>Ändra</Link>
        <button className="btn btn--delete" onClick={() => deleteCandidate(id)} className="delete-btn">X</button>
      </div>  
    </li>
  )
}

export default Candidate;
