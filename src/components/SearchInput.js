import React, { useState, useContext } from 'react'
import { CandidatesContext } from '../context/CandidatesState';
import { Form, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const { searchCandidate } = useContext(CandidatesContext);

  const handleChange = e => {
    const searchText = e.target.value.trim();
    setQuery(searchText);
  }

  const handleSubmit = e => {
    e.preventDefault();
    searchCandidate(query);
  }

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Form.Group className="d-flex">
        <Form.Control type="search" name="search" onChange={(e) => handleChange(e)} />
        <Button className="ml-3 d-flex align-items-center btn-blue" type="submit">
          <span className="mr-2">Sök</span>
          <Search />
        </Button>
      </Form.Group>
    </Form>
  )
}

export default SearchInput;
