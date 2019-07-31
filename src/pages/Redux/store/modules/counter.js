import update from 'immutability-helper'

// 액션 타입 정의
const ADD_POST = 'counter/ADD_POST'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// **** 액션 생섬함수 정의
export const increment = () => ({ type: INCREMENT })
export const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' })
export const decrement = () => ({ type: DECREMENT })
export const decrementAsync = () => ({ type: 'DECREMENT_ASYNC' })

// **** 초기상태 정의
const initialState = {
  number: 0,
  color: 'red',
  posts: [],
}

// **** 리듀서 작성
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    case ADD_POST:
      return {
        ...state,
        posts: update(state.posts, {
          [state.number - 1]: { $set: action.data }
        })
      }
    default:
      return state
  }
}
