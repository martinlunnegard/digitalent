import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { CandidatesContext } from '../context/CandidatesState';
import * as Constants from '../constants';
import uuid from 'react-uuid';

const CandidatesForm = () => {
  const {register, handleSubmit, errors, reset } = useForm();

  const { addCandidate } = useContext(CandidatesContext);

  const onSubmit = data => {  
    const { name, age, email, address, stage } = data;
    console.log(data); 
    const newCandidate = {
      id: uuid(),
      name,
      age,
      email,
      address,
      stage
    }

    addCandidate(newCandidate);
    reset();
  }

  return (
    <section className="candidate-form">
      <h2>Lägg till kandidat</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </section>
  )
}

export default CandidatesForm;
