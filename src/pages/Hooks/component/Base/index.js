import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const Base = withRouter((props) => {
  const { state } = props

  useEffect(() => {
    const test = async() => {
      await axios.get(`https://dog.ceo/api/breeds/list/all`).then(response => {
        console.log(response)
        Promise.resolve(response.data, response.status).then(data => {
          console.log(data.message)
        })
      })
    }
  
    test()
  }, [])

  const onChangeToSelect = e => {
    const { value } = e.target
    const { dispatch, history } = props

    dispatch({
      type: 'select',
      name: 'path',
      value,
    })

    history.push(value)
  }

  return (
    <select value={state.path} onChange={(e) => { onChangeToSelect(e) }}>
      <option value="">home</option>
      <option value="/useState">useState</option>
      <option value="/useReducer">useReducer</option>
    </select>
  )
})

export default Base
