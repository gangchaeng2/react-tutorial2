import React from 'react'

import withController from './Controller'

const Button = ({
  count,
}) => {
  console.log('render button')
  return (
    <button onClick={ () => {} }>
      {count}
    </button>
  )
}

export default withController(Button)
