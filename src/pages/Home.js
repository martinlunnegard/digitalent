import React from 'react'
import { CandidatesList, CandidatesForm } from '../components'; 

const Home = () => {
  return (
    <main>
      <CandidatesForm />
      <CandidatesList />
    </main>
  )
}

export default Home; 
