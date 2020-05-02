import React, { useEffect, useState } from 'react'
import { Grid, TextField, Select, MenuItem, Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../actions'

const Header = () => {
  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState('')

  const searchParam = useSelector(state => state.Search.searchParam)
  const [selectValue, setSelectValue] = useState(searchParam)

  const search = e => {
    setSearchInput(e.target.value)
  }

  const submitSearch = () => {
    dispatch(Actions.Search.search(searchInput))
  }

  const setSearchParam = e => {
    setSelectValue(e.target.value)
    dispatch(Actions.Search.setSearchParam(e.target.value))
  }

  useEffect(() => {
    return () => {
      dispatch(Actions.Search.search(''))
    }
  }, [])

  return (
    <Grid container className="header">
      <Grid item container lg={6} xs={12} alignItems="flex-end" justify="center">
        <span>Congress people</span>
      </Grid>
      <Grid item container lg={4} xs={12} spacing={2} alignItems="flex-end" justify="flex-end">
        <Grid item lg={3} xs={5}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectValue}
            onChange={setSearchParam}
            label="Search parameter">
            <MenuItem value={'first_name'}>First name</MenuItem>
            <MenuItem value={'last_name'}>Last name</MenuItem>
            <MenuItem value={'gender'}>Gender</MenuItem>
            <MenuItem value={'party'}>Party</MenuItem>
            <MenuItem value={'state'}>State</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={4} xs={6}>
          <TextField label="Search" onChange={search} />
        </Grid>
        <Grid item lg={1} xs={1}>
          <Button color="primary" size="small" onClick={submitSearch}  className="button">
            <Search />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
