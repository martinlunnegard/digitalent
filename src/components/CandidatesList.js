import React, { useContext } from 'react'
import CandidatesFilter from './CandidatesFilter';
import Candidate from './Candidate';
import { CandidatesContext } from '../context/CandidatesState';

const CandidatesList = () => {
  const { candidates, filter } = useContext(CandidatesContext); 
  const data = filter.length > 0 ? filter : candidates;

  return (
    <section>
      <h2 className="text-white mb-4">Kandidater</h2>
      <CandidatesFilter />
        <ul>
          {data.map(candidate => (<Candidate key={candidate.id} candidate={candidate} />))}
        </ul>
    </section>  
  )
}

export default CandidatesList;
