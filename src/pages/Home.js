import React from 'react'
import { 
  CandidatesList,
  CandidatesForm
 } from '../components'; 
 import './Home.css';

const Home = () => {
  return (
    <main>
      <div className="container"> 
        <CandidatesForm />
        <CandidatesList />
      </div>
    </main>
  )
}

export default Home; 
