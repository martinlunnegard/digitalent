import React, { useState, useContext, useEffect } from 'react'
import { CandidatesContext } from '../context/CandidatesState';
import { Form } from 'react-bootstrap';
import * as constants from '../utils/constants';

const CandidatesFilter = () => {
  const [value, setValue] = useState('All');
  const { filterCategories } = useContext(CandidatesContext);

  useEffect(() => {
    filterCategories(value);
  }, [value])

  return (
    <Form>
      <Form.Group>
        <Form.Label className="text-white font-weight-bold">Filtrera: </Form.Label>
        <Form.Control 
          className="mb-4" 
          as="select" 
          name="stage" 
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={e =>  setValue(e.target.value)}
        >
            <option value="All">Alla</option>
            <option value={constants.CONTACT}>{constants.CONTACT}</option>
            <option value={constants.DIALOGUE}>{constants.DIALOGUE}</option>
            <option value={constants.INTERVIEW}>{constants.INTERVIEW}</option>
            <option value={constants.OFFER}>{constants.OFFER}</option>
            <option value={constants.FINALIZED}>{constants.FINALIZED}</option>
          </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default CandidatesFilter;
