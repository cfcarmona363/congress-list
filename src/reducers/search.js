const initialState = {
  search: '',
  searchParam: 'first_name'
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        search: action.payload
      }
    case 'SET_SEARCH_PARAM':
      return {
        ...state,
        searchParam: action.payload
      }

    default:
      return state
  }
}

export default search
