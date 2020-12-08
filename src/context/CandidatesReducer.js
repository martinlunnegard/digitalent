export default (state, action) => {
  switch(action.type) {
    case 'ADD_CANDIDATE': 
    console.log(action.payload, 'payload');
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
      return state;
      // const updatedCandidate = action.payload;

      // const updatedCandidates = state.candidates.map(candidate => {
      //   if(candidate.id === updatedCandidate.id) {  
      //     return updatedCandidate;
      //   }
      //   return candidate; 
      // })

      // return {
      //   candidates: updatedCandidate  
      // }
    
    case 'GET_CANDIDATE':
    // const editCandidate = state.candidates.filter(candidate => candidate.id === action.payload);
    // console.log(editCandidate, 'ska vara obj');
      return {
        ...state,
        edit: state.candidates.find(candidate => candidate.id === action.payload)
      }
    
    case 'CANCEL_EDIT': 
      return {
        ...state,
        edit: {}
      }

    default: 
      return state;
  }
}