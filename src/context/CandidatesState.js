import React, { createContext, useReducer} from 'react'; 
import CandidatesReducer from './CandidatesReducer';
import * as constants from '../utils/constants';
import uuid from 'react-uuid';

// Initial state
const initialState = {
  candidates: [  
    {
      id:uuid(),
      name: "Kristyn Trimnell",
      age: "23",
      email: "ktrimnell0@google.co.uk",
      address :"5 Emmet Crossing",
      stage: constants.CONTACT
    },
    {
      id:uuid(),
      name:"Finlay Biffen",
      age: "43",
      email:"fbiffen1@yahoo.co.jp",
      address:"193 Ryan Street",
      stage: constants.DIALOGUE
    },
    {
      id:uuid(),
      name:"Marve Whates",
      age: "34",
      email:"mwhates2@weebly.com",
      address:"932 Pankratz Alley",
      stage: constants.OFFER
    },
    {
      id:uuid(),
      name:"Albina Kimmel",
      age: "56",
      email:"akimmel3@chron.com",
      address:"132 Debra Avenue",
      stage: constants.INTERVIEW
    },  
    {
      id:uuid(),
      name:"Sanford Allcott",
      age: "22",
      email:"sallcott4@mashable.com",
      address:"2 Longview Drive",
      stage: constants.INTERVIEW
    },
    {
      id:uuid(),
      name:"Shaine Cornu",
      age: "20",
      email:"scornu5@wisc.edu",
      address:"5 Colorado Parkway",
      stage: constants.CONTACT
    },
    {
      id:uuid(),
      name:"Aindrea Daw",
      age: "29",
      email:"adaw6@dropbox.com",
      address:"5 Jana Alley",
      stage: constants.DIALOGUE
    },
    {
      id:uuid(),
      name:"Melodee Morrowe",
      age: "33",
      email:"mmorrowe7@fotki.com",
      address:"93267 Continental Crossing",
      stage: constants.FINALIZED
    },
    {
      id:uuid(),
      name:"Thea Shenley",
      age: "37",
      email:"tshenley8@yolasite.com",
      address:"686 Crowley Circle",
      stage: constants.OFFER
    },
    {
      id:uuid(),
      name:"Dennie Done",
      age: "61",
      email:"ddone9@dagondesign.com",
      address:"11 Arizona Park",
      stage: constants.FINALIZED
    }
  ],
  edit: {},
  query: '',
  searchResults: [],
  filtered: [],
  filterValue: ''
}

// Create Context
export const CandidatesContext = createContext(initialState);

// Provider Component
export const CandidatesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CandidatesReducer, initialState);

  // Actions
  const addCandidate = (candidate) => {
    dispatch({
      type: 'ADD_CANDIDATE',
      payload: candidate
    });
  } 

  const deleteCandidate = (id) => {
    dispatch({
      type: 'DELETE_CANDIDATE',
      payload: id
    });
  } 

  const editCandidate = (candidate) => {
    dispatch({
      type: 'EDIT_CANDIDATE',
      payload: candidate
    });
  }

  const getCandidate = (id) => {
    dispatch({
      type: 'GET_CANDIDATE',
      payload: id
    });
  }

  const cancelEdit = () => {
    dispatch({
      type: 'CANCEL_EDIT'
    });
  }

  const searchCandidate = (query) => {
    dispatch({
      type: 'SEARCH_CANDIDATE',
      payload: query
    });
  }

  const clearQuery = () => {
    dispatch({
      type: 'CLEAR_QUERY'
    })
  }

  const filterCategories = (value) => {
    dispatch({
      type: 'FILTER_CATEGORIES',
      payload: value
    })
  }

  return (
    <CandidatesContext.Provider value={{
      candidates: state.candidates,
      edit: state.edit,
      query: state.query,
      searchResults: state.searchResults,
      filtered: state.filtered,
      filterValue: state.filterValue,
      addCandidate,
      deleteCandidate,
      editCandidate,
      getCandidate,
      cancelEdit,
      searchCandidate,
      clearQuery,
      filterCategories
     
    }}>
      {children}
    </CandidatesContext.Provider>
  )
}