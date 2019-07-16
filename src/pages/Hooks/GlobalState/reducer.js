const initialState = {
  path: '',
  cnt: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'input':
    case 'select':
      return {
        ...state,
        [action.name]: action.value,
      }
    
    case 'increment':
      return {
        ...state,
        cnt: state.cnt + 1,
      }

    case 'decrement':
      return {
        ...state,
        cnt: state.cnt - 1,
      }
    
    case 'resetCnt':
      return {
        ...state,
        cnt: 0,
      }

    default:
      return state
  }
}

export {
  initialState,
  reducer,
}
