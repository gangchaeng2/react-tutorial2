import React from 'react'
import { withRouter } from 'react-router-dom'

import { Select } from '../../../../components/Style'

const SelectComponent = ({
  history
}) => {
  const onChangePath = (e) => {
    const { value } = e.target
    history.push(value)
  }

  return (
    <Select onChange={onChangePath.bind(null)}>
      <option value="/counter">Counter</option>
      <option value="/todo">Todo</option>
    </Select>
  )
}

export default withRouter(SelectComponent)