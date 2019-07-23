import React from 'react'
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'

import { Counter, Todo } from './components'

import { Select } from '../../components/Style'
import { Wrap } from './styled'

const ReduxComponent = ({
  history, match
}) => {
  const onChangePath = (e) => {
    const { value } = e.target
    history.push('/redux' + value)
  }

  return (
    <Wrap>
      <Select onChange={onChangePath.bind(null)}>
        <option value="/">Home</option>
        <option value="/counter">Counter</option>
        <option value="/todo">Todo</option>
      </Select>

      <Router basename="redux">
        <Switch>
          {/* <Router exact path="/" component={ () => ( <div>Home</div> ) } /> */}
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/todo"  component={Todo} />
        </Switch>
      </Router>
    </Wrap>
  )
}

export default withRouter(ReduxComponent)
