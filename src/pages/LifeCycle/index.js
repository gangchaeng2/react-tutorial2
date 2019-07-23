import React from 'react'

import withController from './Controller'

import Button from './components/Button'

import { Wrap } from './styled'

const LifeCycleComponent = ({
  count,
  onClickToWrap
}) => {
  return (
    <Wrap onClick={onClickToWrap}>
      <Button count={count} />
    </Wrap>
  )
}

export default withController(LifeCycleComponent)
