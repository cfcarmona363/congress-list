import React from 'react'
import { Grid, Button } from '@material-ui/core'

const PersonCard = ({ person, history }) => {
  const { id, title, short_title, first_name, middle_name, last_name, party, gender, state, date_of_birth } = person
  return (
    <Grid container className="person-card">
      <Grid item lg={12} xs={12} className="name">{`${short_title} ${first_name}${
        middle_name ? ' ' + middle_name : ''
      } ${last_name}`}</Grid>
      <Grid item lg={3} xs={12} className="title">
        <span>Title: </span>
        {` ${title}`}
      </Grid>
      <Grid item lg={2} xs={4} className="info">
        <span>State: </span>
        {` ${state}`}
      </Grid>
      <Grid item lg={2} xs={4} className="info">
        <span>Gender: </span>
        {` ${gender}`}
      </Grid>
      <Grid item lg={2} xs={4} className="info">
        <span>Party: </span>
        {` ${party}`}
      </Grid>
      <Grid item lg={3} xs={12} className="info">
        <span>Date of birth: </span>
        {` ${date_of_birth}`}
      </Grid>
      <Grid item container lg={12} xs={12} className="button" justify="flex-end" alignItems="flex-end">
        <Button variant="outlined" color="primary" size="small" onClick={() => history.push(`/detail/${id}`)}>
          More information
        </Button>
      </Grid>
    </Grid>
  )
}

export default PersonCard
