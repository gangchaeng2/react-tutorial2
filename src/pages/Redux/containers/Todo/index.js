import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uniq, map } from 'lodash'

import { Todo } from '../../components'
import { addTodo } from '../../../Redux/store/modules/todo'

class TodoContainer extends Component {
  state = {
    text: '',
    category: '',
    categoryList: [],
  }

  componentDidUpdate(prevProps, prevState) {
    const { list } = this.props

    if (list.length !== prevProps.list.length) {
      this.setCategory()
    }
  }

  setCategory = () => {
    const { list } = this.props
    const categoryList = uniq(map(list, (item) => {
      return item.category
    }))

    this.setState({
      categoryList
    })
  }

  onChangeToState = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onClickAddTodo = () => {
    const { text, category } = this.state
    const { addTodo } = this.props

    addTodo({ todo: [{text, category}] })
  }

  render() {
    return (
      <Todo 
        {...this.state}
        {...this.props}
        onChangeToState={this.onChangeToState}
        onClickAddTodo={this.onClickAddTodo}
      />
    )
  }
}

export default connect(
  ({ todo: { list } }) => ({ list }),
  { addTodo }
)(TodoContainer)