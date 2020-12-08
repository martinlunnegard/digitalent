import React from 'react'
import { 
  SearchInput, 
  SearchResults 
} from '../components';

export default function Search() {
  return (
    <section className="search container">
      <h2>Sök efter kandidater</h2>
      <SearchInput />
      <SearchResults />
    </section>
  )
}
