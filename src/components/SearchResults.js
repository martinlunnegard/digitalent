import React, { useContext, useEffect } from 'react'
import Candidate from './Candidate';
import { CandidatesContext } from '../context/CandidatesState';

const SearchResults = () => {
  const { searchResults, query, clearQuery } = useContext(CandidatesContext); 

  useEffect(() => {
    // Reset query on unmount
    return(() => {
      clearQuery();
    });
  }, []);

  const renderResults = results => {
    return (
    <>
      <h2 className="text-white font-weight-bold mb-4">Resultat:</h2>  
      <ul>
        {results.map(candidate => (<Candidate key={candidate.id} candidate={candidate} />))}
      </ul>
    </>  
    )
  }

  const renderNoResults = () => {
    return (
      <div className="text-white font-weight-bold" style={{ fontSize: 24 }}>Inga resultat</div>
    )
  }
  
  return (
    <section className="search-results">
       { searchResults.length >= 1 && renderResults(searchResults) }
       { searchResults.length === 0 && query && renderNoResults() }
    </section>  
  )
}

export default SearchResults;
