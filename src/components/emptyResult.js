import React from 'react'
import { Grid } from '@material-ui/core'
import no_results from '../assets/no_results_found.png'

const EmptyResult = () => {
  return (
    <Grid container className="empty">
      <img src={no_results} alt="no-results" />
    </Grid>
  )
}

export default EmptyResult
