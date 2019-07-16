import React, { Component } from 'react'

const Controller = Button => class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    return {
      count: props.count
    }
  }

  render() {
    return (
      <Button 
        {...this.props}
        {...this.state}
      />
    )
  }
}

export default Controller
