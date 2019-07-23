import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../../store/modules/counter';
import { Counter } from '../../components'

class CounterContainer extends Component {
  onClickIncrement = () => {
    console.log(this.props)
  }

  render() {
    const { number } = this.props
    const { onClickIncrement } = this

    const state = {
      number
    }

    return (
      <Counter onClickIncrement={onClickIncrement} />
    )
  }
}

const mapStateToProps = state => ({
  ...state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)
