/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import MainContent from './MainContent'

const Home = ({ history }) => {
  return (
    <div className="general-container">
      <Header />
      <MainContent history={history} />
      <Footer />
    </div>
  )
}

export default Home
