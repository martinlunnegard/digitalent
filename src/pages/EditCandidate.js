import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { Link, useParams, useHistory } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import Candidate from '../utils/Candidate';
import * as Constants from '../utils/constants';

const EditCandidate = ({ match }) => {
  const { id } = useParams();
  
  const { getCandidate, editCandidate, edit, cancelEdit } = useContext(CandidatesContext);
  const { handleSubmit, errors, reset } = useForm();
  
  const { register } = useForm({
    defaultValues: {
      name: edit.name,
      age: edit.age,
      email: edit.email,
      address: edit.address,
      stage: edit.stage
    }
  });
  
   useEffect(() => {
    if(!id) return;
    getCandidate(id);
  }, [id]);
  
    // const onSubmit = data => {  
    //   const { name, age, email, address, stage } = data;
    //   console.log(data); 
  
    //   const newCandidate = new Candidate(name, age, email, address, stage); 
    //   console.log(newCandidate, 'new candidate');
  
  
    //   addCandidate(newCandidate);
    //   reset();
    // }

  const onSubmit = data => {
    console.log(data, 'submitted');
  }
  
  const handleCancel = () => {
    cancelEdit();
  }

  return (
    <section className="candidate-form">
      <h2>Ändra kandidat</h2>
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
        <Link to="/" onClick={handleCancel}>Tillbaka</Link>
      </form>
    </section>
  )
} 



export default EditCandidate;