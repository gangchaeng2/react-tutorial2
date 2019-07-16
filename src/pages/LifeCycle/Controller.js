import React, { Component } from 'react'

const Controller = LifeCycleComponent => class extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      count: 0,
    }
  }


  // 일반적으로 apiCall 후 데이터 바인딩을 하려면 여기서
  componentDidMount() {
    console.log('componentDidMount')
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 'change'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  onClickToWrap = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render')
    return (
      <LifeCycleComponent 
        {...this.props}
        {...this.state}
        onClickToWrap={this.onClickToWrap}
      />
    )
  }
}

export default Controller
