const initialState = {
  path: '',
  name: '',
  nickName: '',
}

const reducer = (state = initialState, action) => {
  console.log(state, action)
  switch(action.type) {
    case 'input':
    case 'select':
      return {
        ...state,
        [action.name]: action.value
      }

    default:
      return state
  }
}

export {
  initialState,
  reducer,
}