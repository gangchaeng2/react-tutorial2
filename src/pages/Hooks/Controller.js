import React, { useReducer } from 'react'

import { initialState, reducer } from './GlobalState/reducer'

export default HookComponent => {
  return () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
      <HookComponent state={state} dispatch={dispatch} />
    )
  }
}
