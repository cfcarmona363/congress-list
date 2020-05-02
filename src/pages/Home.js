/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MainContent from '../components/MainContent'

const Home = ({ history }) => {
  return (
    <div className="general-container">
      <Header title={'Congress people'} showSearch />
      <MainContent history={history} />
      <Footer title={'Congress people'} />
    </div>
  )
}

export default Home
