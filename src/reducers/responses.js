const initialState = {
  people: [],
  detail: {}
}

const responses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESPONSE_PEOPLE':
      return {
        ...state,
        people: action.payload
      }
    case 'SET_RESPONSE_DETAIL':
      return {
        ...state,
        detail: action.payload
      }

    default:
      return state
  }
}

export default responses
