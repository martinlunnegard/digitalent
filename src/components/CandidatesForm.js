import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { Form, Button } from 'react-bootstrap';
import { CandidatesContext } from '../context/CandidatesState';
import Candidate from '../utils/Candidate';
import * as Constants from '../utils/constants';

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
    <section className="candidate-form">
      <h2 className="text-white mb-4">Lägg till kandidat</h2>
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
            <option>{Constants.CONTACT}</option>
            <option>{Constants.DIALOGUE}</option>
            <option>{Constants.INTERVIEW}</option>
            <option>{Constants.OFFER}</option>
            <option>{Constants.FINALIZED}</option>
          </Form.Control>
          <Button variant="primary" type="submit">
            Lägg till
          </Button>
        </Form.Group>
      </Form>









      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Namn: </label>
          <input name="name" type="text" ref={register({required: 'Fyll i namn'})} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}
        <div>  
          <label htmlFor="age">Ålder: </label>
          <input name="age" type="number" ref={register({required: 'Fyll i ålder'})} />
        </div>
        {errors.name && <p>{errors.age.message}</p>}
        <div>  
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" ref={register({required: 'Fyll i email'})} />
        </div>
        {errors.name && <p>{errors.email.message}</p>}
        <div>
          <label htmlFor="address">Adress: </label>
          <input name="address" type="text" ref={register({required: 'Fyll i adress'})} />
        </div>
        {errors.name && <p>{errors.address.message}</p>}
        <div>
          <label htmlFor="stage">Steg: </label>
          <select name="stage" ref={register}>
            <option>{Constants.CONTACT}</option>
            <option>{Constants.DIALOGUE}</option>
            <option>{Constants.INTERVIEW}</option>
            <option>{Constants.OFFER}</option>
            <option>{Constants.FINALIZED}</option>
          </select>
        </div>
        <input type="submit" value="Lägg till" />
      </form> */}
    </section>
  )
}

export default CandidatesForm;
