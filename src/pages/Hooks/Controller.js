import React, { useEffect, useReducer } from 'react'

import { initialState, reducer } from './GlobalState/reducer'

export default HookComponent => {
  return ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
      const { match, location } = props
      const path = location.pathname.replace(match.url, '')

      dispatch({
        type: 'input',
        name: 'path',
        value: path,
      })
    }, [])

    return (
      <HookComponent state={state} dispatch={dispatch} />
    )
  }
}
