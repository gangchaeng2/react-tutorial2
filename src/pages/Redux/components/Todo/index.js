import React from 'react'
import { filter } from 'lodash'

import { Wrap, InputText, TextArea, Btn, CardWrap, Name } from './styled'

import Card from '../Card'

const TodoComponent = ({
  mode, text, category, categoryList,
  list,
  onChangeToState, onClickReset, onClickAddTodo, onClickUpdateTodo, onClickCard
}) => {
  return (
    <>
      <Wrap>
        <InputText name="category" value={category} onChange={onChangeToState.bind(null)} placeholder="CATEGORY" />
        <Btn onClick={onClickReset.bind(null)} style={{ backgroundColor: 'red' }}>RESET</Btn>
        {mode === 'add' ? <Btn onClick={onClickAddTodo.bind(null)}>ADD</Btn> : <Btn onClick={onClickUpdateTodo.bind(null)}>UPDATE</Btn>}

        <TextArea name="text" value={text} onChange={onChangeToState.bind(null)} placeholder="TEXT" />
      </Wrap>
  
      {categoryList && categoryList.length > 0 && categoryList.map((cate, key) => {
        const cateList = filter(list, (item) => {
          return item.category === cate
        })

        return (
          <CardWrap key={cate}>
            <Name>{cate}</Name>
            {cateList.map((item, key) => {
              return (
                <Card key={key} id={item.id} text={item.text} onClickCard={onClickCard} />
              )
            })}
          </CardWrap>
        )
      })}
    </>
  )
}

export default TodoComponent
