import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

import rootReducer from './store/modules'

import { Select } from './components'
import { Counter, Todo } from './containers'

import { Wrap } from './styled'

// **** 리덕스 개발자도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools)

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
