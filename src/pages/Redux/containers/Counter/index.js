import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../../store/modules/counter'
import { Counter } from '../../components'

class CounterContainer extends Component {
  onClickButton = type => {
    const { increment, decrement } = this.props

    if (type === 'plus') {
      increment()

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
  { increment, decrement },
)(CounterContainer)
