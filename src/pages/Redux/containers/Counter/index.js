import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, incrementAsync, decrement } from '../../store/modules/counter'
import { Counter } from '../../components'

class CounterContainer extends Component {
  onClickButton = type => {
    const { incrementAsync, decrement } = this.props

    if (type === 'plus') {
      incrementAsync()

    } else {
      decrement()
    }
  }

  render() {
    const { number } = this.props
    const { onClickButton } = this

    return (
      <Counter number={number} onClickButton={onClickButton} />
    )
  }
}

export default connect(
  ({ counter: { number } }) => ({ number }),
  { increment, incrementAsync, decrement },
)(CounterContainer)
