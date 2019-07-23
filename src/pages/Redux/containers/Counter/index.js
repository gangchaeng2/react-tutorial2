import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeColor } from '../../store/modules/counter';
import { Counter } from '../../components'

class CounterContainer extends Component {
  render() {
    return (
      <Counter />
    )
  }
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  ...state
})

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)
