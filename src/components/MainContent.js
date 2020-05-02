import React, { useEffect, useState } from 'react'
import { Grid, Select, MenuItem, InputLabel } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import Loader from './loader'
import EmptyResult from './emptyResult'
import useRequests from '../hooks/useRequest'
import { congressService } from '../services/congressService'
import PersonCard from './personCard'
import Actions from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const MainContent = ({ history }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedChamber, setSelectedChamber] = useState('senate')
  const [selectedCongress, setSelectedCongress] = useState(116)
  const [res, loading, setNewParams] = useRequests(congressService, {
    chamber: selectedChamber,
    congress: selectedCongress
  })

  const filteredItems = useSelector(state => state.Search.searchResults)

  const dispatch = useDispatch()

  useEffect(() => {
    if (res) {
      dispatch(Actions.Responses.SetResponsePeople(res.results[0].members))
      dispatch(Actions.Search.setSearchResults(res.results[0].members))
    }
    return () => {
      dispatch(Actions.Responses.SetResponsePeople([]))
    }
  }, [res])

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredItems])

  const getResults = () => {
    if (filteredItems.length === 0) return [<EmptyResult />]

    const pageResults = []
    for (let i = 10 * (currentPage - 1), limit = 10 * currentPage; i < limit; i++) {
      if (!filteredItems[i]) break
      pageResults.push(filteredItems[i])
    }
    return pageResults.map(item => {
      return <PersonCard person={item} history={history} key={item.id} />
    })
  }

  const changePage = (e, value) => {
    setCurrentPage(value)
  }

  const changeChamber = e => {
    const chamber = e.target.value
    const congress = e.target.value === 'senate' ? 80 : 102
    setSelectedChamber(chamber)
    setSelectedCongress(congress)
    setNewParams({ chamber, congress })
  }

  const changeCongress = e => {
    setSelectedCongress(e.target.value)
    setNewParams({ chamber: selectedChamber, congress: e.target.value })
  }

  const getCongressOptions = () => {
    const options = []

    for (let i = selectedChamber === 'senate' ? 80 : 102, limit = 116; i <= limit; i++) {
      options.push(
        <MenuItem value={i} key={i}>
          {i}
        </MenuItem>
      )
    }
    return options
  }

  return (
    <Grid container className="main-content" alignContent="center" justify="center">
      <Grid item container lg={4} xs={12} alignContent="center" justify="space-evenly" className="options-select">
        <Grid item lg={3} xs={5}>
          <InputLabel htmlFor="select-chamber">Chamber</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedChamber}
            onChange={changeChamber}>
            <MenuItem value={'senate'}>Senate</MenuItem>
            <MenuItem value={'house'}>House</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={3} xs={5}>
          <InputLabel htmlFor="select-congress">Congress</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectedCongress}
            onChange={changeCongress}>
            {getCongressOptions()}
          </Select>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} alignContent="center" justify="center">
        <Pagination
          className="paginator"
          count={Math.ceil(filteredItems.length / 10)}
          page={currentPage}
          onChange={changePage}
          siblingCount={0}
          color="primary"
        />
      </Grid>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <Grid item lg={6} xs={12}>
          {getResults()}
        </Grid>
      )}
      <Grid item container lg={12} xs={12} alignContent="center" justify="center">
        <Pagination
          className="paginator"
          count={Math.ceil(filteredItems.length / 10)}
          page={currentPage}
          onChange={changePage}
          siblingCount={0}
          color="primary"
        />
      </Grid>
    </Grid>
  )
}

export default MainContent
