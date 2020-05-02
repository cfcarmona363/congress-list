import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './containers/Home'
import DetailPage from './containers/DetailPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
