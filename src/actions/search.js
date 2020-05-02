const search = value => ({
  type: 'SET_SEARCH_VALUE',
  payload: value
})

const setSearchParam = value => ({
  type: 'SET_SEARCH_PARAM',
  payload: value
})

export default { search, setSearchParam }
