import React from 'react'

import { Wrap, InputText, Btn, CardWrap } from './styled'

const TodoComponent = ({
  text, category, categoryList,
  list,
  onChangeToState, onClickAddTodo
}) => {
  return (
    <>
      <Wrap>
        <InputText name="category" value={category} onChange={onChangeToState.bind(null)} placeholder="카테고리" />
        <InputText name="text" value={text} onChange={onChangeToState.bind(null)} placeholder="내용" />
  
        <Btn onClick={onClickAddTodo.bind(null)}>추가</Btn>
      </Wrap>
  
      {list && list.length > 0 && 
        <CardWrap>
          {list.map((item, key) => {
            return (
              <div key={key}>
                {key}
                {item.text}
              </div>
            )
          })}
        </CardWrap>
      }
    </>
  )
}

export default TodoComponent
