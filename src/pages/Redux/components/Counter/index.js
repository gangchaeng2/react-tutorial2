import React from 'react'

import { Wrap, BtnWrap, Btn, Number } from './styled'

const CounterComponent = ({
  number,
  onClickButton,
}) => {
  return (
    <Wrap>
      <Number>{number}</Number>
      <BtnWrap>
        <Btn className="Plus" onClick={onClickButton.bind(null, 'plus')}>+</Btn>
        <Btn className="Minus" onClick={onClickButton.bind(null, 'minus')}>-</Btn>
      </BtnWrap>
    </Wrap>
  )
}

export default CounterComponent
