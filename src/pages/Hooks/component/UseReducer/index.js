import React from 'react'

export default ({
  state, dispatch
}) => {
  const onChangeCnt = (type) => {
    dispatch({
      type,
    })
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '14px' }}>count : {state.cnt}</p>
      <div style={{ marginTop: '10px' }}>
        <button onClick={onChangeCnt.bind(null, 'increment')}>+</button>
        <button onClick={onChangeCnt.bind(null, 'decrement')}>-</button>
        <button onClick={onChangeCnt.bind(null, 'resetCnt')}>reset</button>
      </div>
    </div>
  )
}