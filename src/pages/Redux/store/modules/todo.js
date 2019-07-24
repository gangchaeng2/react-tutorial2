import { handleActions } from 'redux-actions'

const ADD_TODO_LIST = 'todo/ADD_TODO_LIST'
const REMOVE_TODO_LIST = 'todo/REMOVE_TODO_LIST'
const UPDATE_TODO_LIST = 'todo/UPDATE_TODO_LIST'

export const addTodo = ({ todo }) => ({ type: ADD_TODO_LIST, data: todo})
export const removeTodo = ({ idx }) => ({ type: REMOVE_TODO_LIST, idx })
export const updateTodo = ({ idx, todo }) => ({ type: UPDATE_TODO_LIST, data: todo, idx })

const initialState = {
  list: [],
}

// const todo = ({ state = initialState, action }) => {
//   console.log(action)

//   switch(action.type) {
//     case ADD_TODO_LIST:
//       return {
//         list: [...state.list, action.data]
//       }

//     case UPDATE_TODO_LIST:
//       return {
//         list: [...state.list, action.data]
//       }

//     default:
//       return state
//   }
// }

// export default todo

export default handleActions(
  {
    [ADD_TODO_LIST]: (state, action) => {
      console.log(action)
      return ({
        list: [...state.list, ...action.data],
       })
    }
  },
  initialState
)