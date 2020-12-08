export default (state, action) => {
  switch(action.type) {
    case 'ADD_CANDIDATE':
      return {
        ...state,
        candidates: [action.payload, ...state.candidates]
      }
    case 'DELETE_CANDIDATE': 
      return {
        ...state,
        candidates: state.candidates.filter(candidate => candidate.id !== action.payload)
      }
    case 'EDIT_CANDIDATE':
      const updatedCandidate = action.payload;
      const updatedCandidates = state.candidates.map(candidate => {
        if(candidate.id === updatedCandidate.id) {  
          return updatedCandidate;
        }
        return candidate; 
      });

      return {
        ...state,
        candidates: updatedCandidates  
      }
    
    case 'GET_CANDIDATE':
      return {
        ...state,
        edit: state.candidates.find(candidate => candidate.id === action.payload)
      }
    
    case 'CANCEL_EDIT': 
      return {
        ...state,
        edit: {}
      }

    case 'SEARCH_CANDIDATE': 
      const query = action.payload.toLowerCase();
      return {
        ...state,
        query,
        searchResults: state.candidates.filter(candidate => {
          return candidate.name.toLowerCase().indexOf(query) !== -1;
        })
      }

    case 'CLEAR_QUERY': 
      return {
        ...state,
        query: ''
      }  

    default: 
      return state;
  }
}