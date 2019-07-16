import React from 'react'
import { withRouter } from 'react-router-dom'

const Base = withRouter((props) => {
  const onChangeToSelect = e => {
    const { value } = e.target
    const { dispatch, history, state } = props
    console.log(state)

    dispatch({
      type: 'select',
      name: 'path',
      value,
    })

    history.push(value)
  }

  return (
    <select value={props.state.path} onChange={(e) => { onChangeToSelect(e) } }>
      <option value="/">home</option>
      <option value="/counter">counter</option>
      <option value="/reduver">reducer</option>
    </select>
  )
})

export default Base
