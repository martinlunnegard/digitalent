import React, { useContext, useEffect } from 'react'
import Candidate from './Candidate';
import { CandidatesContext } from '../context/CandidatesState';

const SearchResults = () => {
  const { searchResults, query, clearQuery } = useContext(CandidatesContext); 

  useEffect(() => {
    // Reset query 
    clearQuery();
  }, []);

  const renderResults = results => {
    return (
      <ul>
        {results.map(candidate => (<Candidate key={candidate.id} candidate={candidate} />))}
      </ul>
    )
  }

  const renderNoResults = () => {
    return (
      <div>Inga resultat</div>
    )
  }
  
  return (
    <section className="search-results">
      <h2>Resultat</h2>
       { searchResults.length >= 1 && renderResults(searchResults) }
       { searchResults.length === 0 && query && renderNoResults() }
    </section>  
  )
}

export default SearchResults;
