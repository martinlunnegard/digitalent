import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { Form, Button } from 'react-bootstrap';
import { CandidatesContext } from '../context/CandidatesState';
import Candidate from '../utils/Candidate';
import * as constants from '../utils/constants';

const CandidatesForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const { addCandidate } = useContext(CandidatesContext);

  const onSubmit = data => {  
    const { name, age, email, address, stage } = data;
    const newCandidate = new Candidate(name, age, email, address, stage); 

    addCandidate(newCandidate);
    reset();
  }

  return (
    <section className="candidate-form mb-5">
      <h2 className="text-white font-weight-bold mb-4">Lägg till kandidat</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label className="text-white font-weight-bold">Namn: </Form.Label>
          <Form.Control className="mb-3 bold" type="text" name="name" placeholder="Namn" ref={register({required: 'Fyll i namn'})} />
          <Form.Label className="text-white font-weight-bold">Ålder: </Form.Label>
          <Form.Control className="mb-3" type="number" name="age" placeholder="Ålder" ref={register({required: 'Fyll i ålder'})} />
          <Form.Label className="text-white font-weight-bold">Email: </Form.Label>
          <Form.Control className="mb-3" type="email" name="email" placeholder="Email" ref={register({required: 'Fyll i Email'})} />
          <Form.Label className="text-white font-weight-bold">Adress: </Form.Label>
          <Form.Control className="mb-3" type="text" name="address" placeholder="Adress" ref={register({required: 'Fyll i adress'})} />
          <Form.Label className="text-white font-weight-bold">Steg: </Form.Label>
          <Form.Control className="mb-4" as="select" name="stage" ref={register}>
            <option>{constants.CONTACT}</option>
            <option>{constants.DIALOGUE}</option>
            <option>{constants.INTERVIEW}</option>
            <option>{constants.OFFER}</option>
            <option>{constants.FINALIZED}</option>
          </Form.Control>
          <Button variant="primary" type="submit">
            Lägg till
          </Button>
        </Form.Group>
      </Form>
    </section>
  )
}

export default CandidatesForm;
