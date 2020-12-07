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
    default: 
      return state;
  }
}