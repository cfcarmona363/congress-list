import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Router from './Router'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
