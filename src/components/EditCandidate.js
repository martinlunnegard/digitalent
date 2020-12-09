import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'; 
import { useHistory } from 'react-router-dom';
import { CandidatesContext } from '../context/CandidatesState';
import { Form, Button } from 'react-bootstrap'; 
import * as constants from '../utils/constants';

const EditCandidate = () => {
  const { editCandidate, edit, cancelEdit } = useContext(CandidatesContext);
  const { handleSubmit, register, setValue, errors } = useForm();
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
  },[edit, setValue]);
  
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
    history.push('/');
  }

  const onError = (errors, e) => console.log(errors, e);
  
  const handleCancel = () => {
    history.goBack();
    cancelEdit();
  }

  return (
    <section id="candidate-edit-form">
      <h2 className="text-white font-weight-bold mb-4">Ändra kandidat</h2>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group>
            <Form.Control type="hidden" name="id" ref={register} />
            <Form.Label className="text-white font-weight-bold">Namn: </Form.Label>
            <Form.Control className="mb-3 bold" type="text" name="name" placeholder="Namn" ref={register({ required: true })} />
            <div className="errors">{errors.name && "*Du behöver skriva in ett namn!"}</div>
            <Form.Label className="text-white font-weight-bold">Ålder: </Form.Label>
            <Form.Control className="mb-3" type="number" name="age" placeholder="Ålder" ref={register({ required: true })} />
            <div className="errors">{errors.age && "*Du behöver fylla i ålder!"}</div>
            <Form.Label className="text-white font-weight-bold">Email: </Form.Label>
            <Form.Control className="mb-3" type="email" name="email" placeholder="Email" ref={register({ required: true })} />
            <div className="errors">{errors.email && "*Du behöver fylla i en emailaddress!"}</div>
            <Form.Label className="text-white font-weight-bold">Adress: </Form.Label>
            <Form.Control className="mb-3" type="text" name="address" placeholder="Adress" ref={register({ required: true })} />
            <div className="errors">{errors.address && "*Du behöver fylla i en address!"}</div>
            <Form.Label className="text-white font-weight-bold">Steg: </Form.Label>
            <Form.Control className="mb-4" as="select" name="stage" ref={register({ required: true })}>
              <option>{constants.CONTACT}</option>
              <option>{constants.DIALOGUE}</option>
              <option>{constants.INTERVIEW}</option>
              <option>{constants.OFFER}</option>
              <option>{constants.FINALIZED}</option>
            </Form.Control>
            <div className="errors">{errors.stage && "*Du behöver väja ett steg!"}</div>
            <Button size="lg" className="mr-2" type="submit">Spara</Button>
            <Button size="lg" variant="secondary" onClick={handleCancel}>Tillbaka</Button>
          </Form.Group>
        </Form>
    </section>
  )
} 

export default EditCandidate;