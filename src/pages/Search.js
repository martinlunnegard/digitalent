import React from 'react'
import { 
  SearchInput, 
  SearchResults 
} from '../components';

export default function Search() {
  return (
    <section id="search">
      <h2 className="text-white font-weight-bold mb-4">Sök efter kandidater</h2>
      <SearchInput />
      <SearchResults />
    </section>
  )
}
