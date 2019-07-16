import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Wrap } from './styled'

import { Base, Counter } from './component'
import withController from './Controller'

const Hook = ({
  state,
  dispatch
}) => {
  return (
    <Wrap>
      <Router basename="/hooks">
        <Switch>
          <Route exact path="/counter" component={ () => <Counter state={state} dispatch={dispatch} /> } />
          <Route exact path="/reducer" />
          <Route exact path="/" component={ () => <Base state={state} dispatch={dispatch} /> } />
        </Switch>
      </Router>
    </Wrap>
  )
}

export default withController(Hook)
