import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import useRequests from '../hooks/useRequest'
import { getCongressPersonById } from '../services/congressService'
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IconContext } from 'react-icons'
import Actions from '../actions'
import { Link } from 'react-router-dom'

const DetailPage = ({ match }) => {
  const [res, loading] = useRequests(getCongressPersonById, match.params.id)
  const {
    roles,
    first_name,
    middle_name,
    last_name,
    current_party,
    gender,
    date_of_birth,
    twitter_account,
    facebook_account,
    youtube_account
  } = useSelector(state => state.Responses.detail)

  const dispatch = useDispatch()

  useEffect(() => {
    if (res) {
      dispatch(Actions.Responses.SetResponseDetail(res.results[0]))
    }
  }, [res])

  return (
    <Grid className="main-content">
      {loading ? (
        <Loader />
      ) : (
        <Grid container className="person-card">
          <Grid item lg={12} xs={12}>
            <Link to="/">
              <IoMdArrowRoundBack size={'40px'} color={'black'} />
            </Link>
          </Grid>
          <Grid item lg={12} xs={12} className="name">{`${first_name}${
            middle_name ? ' ' + middle_name : ''
          } ${last_name}`}</Grid>
          <Grid item lg={2} xs={4} className="info">
            <span>Gender: </span>
            {` ${gender === 'F' ? 'Female' : 'Male'}`}
          </Grid>
          <Grid item lg={2} xs={4} className="info">
            <span>Party: </span>
            {`${current_party === 'D' ? 'Democrat' : 'Republican'}`}
          </Grid>
          <Grid item lg={3} xs={12} className="info">
            <span>Date of birth: </span>
            {` ${date_of_birth}`}
          </Grid>
          <Grid item container lg={12} className="icons" justify="space-around" alignItems="flex-end">
            <IconContext.Provider value={{ color: 'black', size: '35px' }}>
              {twitter_account && (
                <a href={`https://twitter.com/${twitter_account}`} target="_blank" rel="noopener noreferrer">
                  <FaTwitter title="twitter" />
                </a>
              )}
              {facebook_account && (
                <a href={`https://www.facebook.com/${facebook_account}`} target="_blank" rel="noopener noreferrer">
                  <FaFacebook title="Facebook" />
                </a>
              )}
              {youtube_account && (
                <a href={`https://www.youtube.com/user/${youtube_account}`} target="_blank" rel="noopener noreferrer">
                  <FaYoutube title="YouTube" />
                </a>
              )}
            </IconContext.Provider>
          </Grid>
          <Grid item container lg={12} className="role-group">
            <Grid item lg={12} xs={12}>
              <span>Roles</span>
            </Grid>
            {roles.map(item => {
              return (
                <Grid item lg={3} xs={5} key={item.congress} className="roles">
                  <Grid className="role-info">
                    <span>Congress: </span>
                    {` ${item.congress}`}
                  </Grid>
                  <Grid className="role-info">
                    <span>Chamber: </span>
                    {` ${item.chamber}`}
                  </Grid>
                  <Grid className="role-info">
                    <span>Title: </span>
                    {` ${item.title}`}
                  </Grid>
                  <Grid className="role-info">
                    <span>State: </span>
                    {` ${item.state}`}
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default DetailPage
