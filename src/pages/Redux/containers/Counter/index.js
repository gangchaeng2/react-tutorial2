import React, { Component } from 'react'
import { connect } from 'react-redux'

import { incrementAsync, decrementAsync } from '../../store/modules/counter'
import { Counter } from '../../components'

class CounterContainer extends Component {
  onClickButton = type => {
    const { incrementAsync, decrementAsync } = this.props

    if (type === 'plus') {
      incrementAsync()

    } else {
      decrementAsync()
    }
  }

  render() {
    const { onClickButton } = this
    const { number, posts } = this.props

    return (
      <Counter number={number} posts={posts} onClickButton={onClickButton} />
    )
  }
}

export default connect(
  ({ counter: { number, posts } }) => ({ number, posts }),
  { incrementAsync, decrementAsync },
)(CounterContainer)
