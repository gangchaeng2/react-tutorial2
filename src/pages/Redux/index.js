import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import configureStore from './store'
import rootSaga from './store/sagas'
import { Select } from './components'
import { Counter, Todo } from './containers'

import { Wrap } from './styled'

const store = configureStore()
store.runSaga(rootSaga)

const ReduxComponent = () => {
  return (
    <Provider store={store}>
      <Wrap>
        <Router basename="/redux">
          <Select />
  
          <Switch>
            <Route path="/todo"  component={Todo} />
            <Route path="/counter" component={Counter} />
            <Redirect to="/counter" />
          </Switch>
        </Router>
      </Wrap>
    </Provider>
  )
}

export default ReduxComponent
