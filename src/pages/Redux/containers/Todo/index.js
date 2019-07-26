import React, { Component } from 'react'
import { connect } from 'react-redux'
import { find, findIndex, difference, uniq, map } from 'lodash'

import { generateUUID } from '../../../../utils'
import { addTodo, updateTodo } from '../../../Redux/store/modules/todo'
import { Todo } from '../../components'

class TodoContainer extends Component {
  state = {
    id: '',
    text: '',
    category: '',
    categoryList: [],
    mode: 'add',
  }

  componentDidMount() {
    this.setCategory()
  }

  componentDidUpdate(prevProps, prevState) {
    const { list } = this.props
    const { categoryList } = this.state

    if (list.length !== prevProps.list.length || difference(categoryList, uniq(map(list, (item) => {
      return item.category
    }))).length > 0) {
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
    const id = generateUUID()

    this.onClickReset()
    addTodo({ todo: [{id, text, category}] })
  }

  onClickUpdateTodo = () => {
    const { id } = this.state
    const { list, updateTodo } = this.props
    const idx = findIndex(list, (item) => ( item.id === id) )
    const newItem = {
      id: list[idx].id,
      text: this.state.text,
      category: this.state.category,
    }
    
    this.onClickReset()
    updateTodo({todo: newItem, idx})
  }

  onClickReset = () => {
    this.setState({
      id: '',
      text: '',
      category: '',
      mode: 'add',
    })
  }

  onClickCard = id => {
    const { list } = this.props
    const selectItem = find(list, (item) => ( item.id === id ))
    
    this.setState({
      ...selectItem,
      mode: 'update'
    })
  }

  render() {
    return (
      <Todo 
        {...this.state}
        {...this.props}
        onChangeToState={this.onChangeToState}
        onClickAddTodo={this.onClickAddTodo}
        onClickUpdateTodo={this.onClickUpdateTodo}
        onClickReset={this.onClickReset}
        onClickCard={this.onClickCard}
      />
    )
  }
}

export default connect(
  ({ todo: { list } }) => ({ list }),
  { addTodo, updateTodo }
)(TodoContainer)
