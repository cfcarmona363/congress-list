const search = value => ({
  type: 'SET_SEARCH_VALUE',
  payload: value
})

const setSearchParam = value => ({
  type: 'SET_SEARCH_PARAM',
  payload: value
})

const setSearchResults = value => ({
  type: 'SET_SEARCH_RESULTS',
  payload: value
})

export default { search, setSearchParam, setSearchResults }
