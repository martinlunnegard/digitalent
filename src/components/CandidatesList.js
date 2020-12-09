import React, { useContext } from 'react'
import CandidatesFilter from './CandidatesFilter';
import Candidate from './Candidate';
import { CandidatesContext } from '../context/CandidatesState';

const CandidatesList = () => {
  const { candidates, filtered, filterValue } = useContext(CandidatesContext); 
  let data = candidates;

  if(filterValue !== 'All') data = filtered; 
  
  return (
    <section>
      <h2 className="text-white font-weight-bold mb-4">Kandidater</h2>
      <CandidatesFilter />
        <ul>
          {data && data.map(candidate => (<Candidate key={candidate.id} candidate={candidate} />))}
        </ul>
    </section>  
  )
}

export default CandidatesList;
