import { createAction, handleActions } from 'redux-actions'
import update from 'immutability-helper'

import { generateUUID } from '../../../../utils'

const REMOVE_TODO_LIST = 'todo/REMOVE_TODO_LIST'

// 액션 생성자
// const ADD_TODO_LIST = 'todo/ADD_TODO_LIST'
// export const addTodo = ({ todo }) => ({ type: ADD_TODO_LIST, todo })

// createAction 사용
export const addTodo = createAction(
  'todo/ADD_TODO_LIST', 
  todo => todo,
)

export const updateTodo = createAction(
  'todo/UPDATE_TODO_LIST', 
  ({ todo, idx }) => ({ todo, idx })
)

export const removeTodo = ({ idx }) => ({ type: REMOVE_TODO_LIST, idx })

const initialState = {
  list: [
    {
      id: generateUUID(),
      text: "type script",
      category: "Todo",
    }
  ],
}

export default handleActions(
  {
    [addTodo]: (state, action) => {
      return ({
        list: [...state.list, ...action.payload.todo],
      })
    },
    [updateTodo]: (state, action) => {
      const { todo, idx } = action.payload
      console.log(todo, idx)

      return ({
        list: update(state.list, {
          [idx]: { $set: todo }
        })
      })
    }
  }, 
  initialState
)
