import React from 'react'
import { Grid } from '@material-ui/core'

const Footer = ({ title }) => {
  return (
    <Grid container className="footer">
      <span>{title}</span>
    </Grid>
  )
}

export default Footer
