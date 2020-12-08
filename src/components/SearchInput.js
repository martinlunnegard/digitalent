import React, { useState, useContext } from 'react'
import { CandidatesContext } from '../context/CandidatesState';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const { searchCandidate } = useContext(CandidatesContext);

  const handleChange = e => {
    const searchText = e.target.value.trim();
    setQuery(searchText);
    console.log(query);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(query, 'handle');
    searchCandidate(query);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={(e) => handleChange(e)} />
      <input type="submit" value="Sök" />
    </form>
  )
}

export default SearchInput;
