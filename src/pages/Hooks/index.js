import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Wrap } from './styled'

import { Base, UseState, UseReducer } from './component'
import withController from './Controller'

const Hook = ({
  state,
  dispatch
}) => {
  return (
    <Wrap>
      <Router basename="/hooks">
        <Base state={state} dispatch={dispatch} />

        <Switch>
          <Route exact path="/useState" component={UseState} />
          <Route exact path="/useReducer" component={ () => <UseReducer state={state} dispatch={dispatch} /> } />
        </Switch>
      </Router>
    </Wrap>
  )
}

export default withController(Hook)
