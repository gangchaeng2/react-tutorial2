import React from 'react'

const CounterComponent = ({
  number,
  onClickIncrement,
}) => {
  console.log(onClickIncrement)
  return (
    <div onClick={onClickIncrement}>
      ggg
    </div>
  )
}

export default CounterComponent
