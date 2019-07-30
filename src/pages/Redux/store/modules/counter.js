// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR'
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// **** 액션 생섬함수 정의
export const changeColor = color => ({ type: CHANGE_COLOR, color })
export const increment = () => ({ type: INCREMENT })
export const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' })
export const decrement = () => ({ type: DECREMENT })

// **** 초기상태 정의
const initialState = {
  number: 0,
  color: 'red',
}

// **** 리듀서 작성
export default function counter(state = initialState, action) {
  console.log(action)
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
    case CHANGE_COLOR:
      return {
        ...state,
        color: 'blue'
      }
    default:
      return state
  }
}
