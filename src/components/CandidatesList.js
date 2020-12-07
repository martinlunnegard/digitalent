import React, { useContext } from 'react'
import Candidate from './Candidate';
import { CandidatesContext } from '../context/CandidatesState';

const CandidatesList = () => {
  const { candidates } = useContext(CandidatesContext); 
  console.log(candidates, 'candidates');
  return (
    <section>
      <h2>Kandidater</h2>
        <ul>
          {candidates.map(candidate => (<Candidate key={candidate.id} candidate={candidate} />))}
        </ul>
    </section>  
  )
}

export default CandidatesList;
