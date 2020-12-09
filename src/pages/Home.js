import React from 'react'
import { 
  CandidatesList,
  CandidatesForm
 } from '../components'; 
 import './Home.css';

const Home = () => {
  return (
    <main>
      <CandidatesForm />
      <CandidatesList />
    </main>
  )
}

export default Home; 
