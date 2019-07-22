import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

import { Header } from './components'
import { LifeCycle, Hooks, Redux } from './pages'

export default () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/life-cycle" component={LifeCycle} />
          <Route path="/hooks" component={Hooks} />
          <Route path="/redux" component={Redux} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  )
}
