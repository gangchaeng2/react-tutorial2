import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Base from '../Base'

const Info = withRouter((props) => {
  const { state, dispatch } = props
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    console.log(state, dispatch)
  })

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <Base state={state} dispatch={dispatch} />

      <div style={{ marginTop: '10px' }}>
        <input value={name} onChange={onChangeName} placeholder="이름" style={{ marginRight: '10px' }} />
        <input value={nickname} onChange={onChangeNickname} placeholder="닉네임" />
      </div>

      <div style={{ marginTop: '10px' }}>
        <div>
          <b>이름:</b> {name}
        </div>
        <div style={{ marginTop: '10px' }}>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  )
})

export default Info
