import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'; 
import { Link, useHistory } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import * as constants from '../utils/constants';

const EditCandidate = () => {
  const { editCandidate, edit, cancelEdit } = useContext(CandidatesContext);
  const { handleSubmit, errors, reset, register, setValue } = useForm();
  const history = useHistory();

  useEffect(() => {
    if(edit) {
      setValue('id', edit.id);
      setValue('name', edit.name);
      setValue('age', edit.age);
      setValue('email', edit.email);
      setValue('address', edit.address);
      setValue('stage', edit.stage);
    } 
  },[edit]);
  
  const onSubmit = data => {
    const { id, name, age, email, address, stage } = data;
    
    const updatedCandidate = { 
      id,
      name, 
      age, 
      email, 
      address, 
      stage
    }

    editCandidate(updatedCandidate);
    history.goBack();
  }

  const onError = (errors, e) => console.log(errors, e);
  
  const handleCancel = () => {
    history.goForward();
    cancelEdit();
  }

  return (
    <section className="candidate-form">
      <h2>Ändra kandidat</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input name="id" type="hidden" ref={register} />
        </div>
        <div>
          <label htmlFor="name">Namn: </label>
          <input name="name" type="text" ref={register} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}
        <div>  
          <label htmlFor="age">Ålder: </label>
          <input name="age" type="number" ref={register} />
        </div>
        {errors.name && <p>{errors.age.message}</p>}
        <div>  
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" ref={register} />
        </div>
        {errors.name && <p>{errors.email.message}</p>}
        <div>
          <label htmlFor="address">Adress: </label>
          <input name="address" type="text" ref={register} />
        </div>
        {errors.name && <p>{errors.address.message}</p>}
        <div>
          <label htmlFor="stage">Steg: </label>
          <select name="stage" ref={register}>
            <option>{constants.CONTACT}</option>
            <option>{constants.DIALOGUE}</option>
            <option>{constants.INTERVIEW}</option>
            <option>{constants.OFFER}</option>
            <option>{constants.FINALIZED}</option>
          </select>
        </div>
        <input type="submit" value="Klar" />
        <button onClick={handleCancel}>Tillbaka</button>
      </form>
    </section>
  )
} 



export default EditCandidate;