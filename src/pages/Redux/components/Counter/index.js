import React from 'react'

import { Wrap, BtnWrap, Btn, Number } from './styled'

const CounterComponent = ({
  number, posts,
  onClickButton,
}) => {
  return (
    <Wrap>
      <Number>{number}</Number>
      <BtnWrap>
        <Btn className="Plus" onClick={onClickButton.bind(null, 'plus')}>+</Btn>
        <Btn className="Minus" onClick={onClickButton.bind(null, 'minus')}>-</Btn>
      </BtnWrap>

      {posts && posts.length > 0 && posts.map(data => (
        <div key={data.id}>
          <p>{data.title}</p>
        </div>
      ))}
    </Wrap>
  )
}

export default CounterComponent
