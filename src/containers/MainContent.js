import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Loader from '../components/loader'
import useRequests from '../hooks/useRequest'
import { congressService } from '../services/congressService'
import PersonCard from '../components/personCard'
import Actions from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const MainContent = ({ history }) => {
  const [res, loading] = useRequests(congressService)

  const people = useSelector(state => state.Responses.people)
  const search = useSelector(state => (state.Search.search ? state.Search.search.toLowerCase() : ''))
  const searchParam = useSelector(state => state.Search.searchParam)

  const dispatch = useDispatch()

  useEffect(() => {
    if (res) {
      dispatch(Actions.Responses.SetResponsePeople(res.results[0].members))
    }
    return () => {
      dispatch(Actions.Responses.SetResponsePeople([]))
    }
  }, [res])

  const getResults = params => {
    const page = 1
    const filteredResults = people.filter(
      item => params.length === 0 || item[searchParam].toLowerCase().includes(search)
    )

    return people.map(item => {
      return (
        (params.length === 0 || item[searchParam].toLowerCase().includes(search)) && (
          <PersonCard person={item} history={history} key={item.id} />
        )
      )
    })
  }

  return (
    <Grid container className="main-content" alignContent="center" justify="center">
      {loading ? <Loader /> : <Grid>{getResults(search)}</Grid>}
    </Grid>
  )
}

export default MainContent
