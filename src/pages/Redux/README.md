
1\. 소개

-----------

 리액트에서 많이 쓰이는 글로벌 상태 관리 라이브러리

 글로벌 상태 관리란, 컴포넌트 간의 데이터 교류를 일반적인 부모-자식 관계의 단방향 교류가 아니라 글로벌 상태를 가지고 있는 저장소(store)에서 모든 컴포넌트로 교류를 하는 것을 의미합니다.

---

 2\. 개념

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 액션 (Action)

 액션은 평범한 자바스크립트 객체입니다. 액션은 반드시 어떤 형태의 액션이 실행될지 나타내는 `type` 속성(필수)을 가져야 합니다. 타입은 일반적으로 문자열 상수로 정의됩니다. 

 여러분의 앱이 충분히 커지면 타입들을 별도의 모듈로 분리할수도 있습니다.

 액션 생성자 (Action Creator)

 액션을 만드는 함수

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

일반적인 액션 생성자

```js
// action
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_POST = 'ADD_POST'

// basic action creator
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
// add text data action creator
export const addTodo = text => ({ type: ADD_TODO, text })
```

redux-action의 createAction을 사용한 액션 생성자

```js
// createAction 사용
export const addTodo = createAction(
  'todo/ADD_TODO_LIST', 
  todo => todo,
)

export const updateTodo = createAction(
  'todo/UPDATE_TODO_LIST', 
  ({ todo, idx }) => ({ todo, idx })
)
```

리듀서 (Reducer)

 변화를 일으키는 함수로 두가지의 파라미터 `state`, `action`​를 받아 새로운 상태를 만들어 반환하는 순수함수 입니다.

 `(prevState, action) => newState`

 순수함수 - 부수효과가 없는 함수 즉, 어떤 함수에 동일한 인자를 주었을 때 **항상** 같은 값을 리턴하는 함수

 리듀서에서 절대로 하면 안되는 행동 3가지

 1\. API 호출, 라우팅 전환같은 사이드 이펙트 발생

 2\. `Date.now()`나 `Math.random()`​ 같이 순수하지 않음 함수 호출하지 않기

 3\. 인수 변경하기 `동일 인풋 -> 동일 아웃풋`

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

일반적인 리듀서 생성

```js
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    case ADD_POST:
      return {
        ...state,
        posts: update(state.posts, {
          [state.number - 1]: { $set: action.data }
        })
      }
    default:
      return state
  }
}
```

**redux-actions의 handleActions를 사용한 리듀서 생성**

```js
export default handleActions(
  {
    [addTodo]: (state, action) => {
      return ({
        list: [...state.list, ...action.payload.todo],
      })
    },
    [updateTodo]: (state, action) => {
      const { todo, idx } = action.payload

      return ({
        list: update(state.list, {
          [idx]: { $set: todo }
        })
      })
    }
  }, 
  initialState
)
```

스토어 (Store)

 리덕스 개념에서 스토어는 애플리케이션 내에 **단 하나만 존재**해야 합니다. 스토어의 안에는 글로벌 상태 + 리듀서가 들어가있으며 추가적으로 몇가지 내장 함수들이 있습니다.

 데이터를 다루는 로직을 쪼개고 싶다면 여러개의 스토어 대신 여러개의 **리듀서를 결합`(combineReducers)`**하여 스토어를 구성 할 수 있습니다.

 스토어가 하는 일

 1\. 애플리케이션의 상태를 저장

 2\. getState()를 통한 상태 접근

 3\. dispatch를 통한 상태 수정

 4\. subscribe를 통한 리스너 등록

---

3\. 데이터의 흐름

 **모든 Redux 앱에서의 데이터는 아래와 같이 4단계의 생명주기를 따릅니다.**

1. store.dispatch(action)을 호출하여 액션을 생성
2. 스토어가 지정한 리듀서 함수들을 호출
3. 루트 리듀서가 각 리듀서들의 출력을 합쳐서 하나의 상태 트리로 생성
4. 스토어가 루트 리듀서에 의해 반한된 상태 트리 저장

---

 4\. React와 연동하기

 React와 Redux 연동에 필요한 라이브러리

1. **redux **:** **리덕스 모듈
2. **react-redux** : 리액트 컴포넌트와 리덕스를 연동하는 모듈
3. **redux-actions **: 액션 생성자와 리듀서를 편하게 사용할 수 있게 만든 모듈

** Ducks패턴을 통해 액션, 액션 생성자, 리듀서를 한 파일로 작성**

```js
import update from 'immutability-helper'

// 액션
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// 액션 생성자
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })



// 초기상태
const initialState = {
  number: 0,
  color: 'red',
  posts: [],
}

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
```

** combineReducers로 리듀서 결합**

```js
import { combineReducers } from 'redux'

import counter from './counter'
import todo from './todo'

export default combineReducers({
  counter,
  todo,
})
```

** 스토어 생성**

```js
import { createStore } from 'redux'
import rootReducer from './modules'

export default function configureStore() {
  return {
    ...createStore(
      rootReducer,
    ),
  }
}
```

** Provider를 사용하여 스토어 연동**

```js
import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'

const store = configureStore()

const ReduxComponent = ({
  children
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxComponent
```

** connect 함수를 이용하여 스토어와 컴포넌트 연동**

**
**

 Presentational 컴포넌트와 Container 컴포넌트로 나누어서 작업을 한다. 

 **Presentational 컴포넌트**는 글로벌 상태와 액션 생성자를 props로 받아 UI만 구성하는 컴포넌트로 redux와 연관이 전혀 없는 컴포넌트이다.**
**

 **Container 컴포넌트는 **redux의 상태를 구독하고 실질적으로 action을 보내는 컴포넌트로 redux와 연관이 있는 컴포넌트이다**.**

```js
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../../store/modules/counter'
import { Counter } from '../../components'      // Presentational 컴포넌트

class CounterContainer extends Component {
  onClickButton = type => {
    const { increment, decrement } = this.props

    if (type === 'plus') {
      increment()

    } else {
      decrement()
    }
  }

  render() {
    const { onClickButton } = this
    const { number, posts } = this.props

    return (
      <Counter number={number} posts={posts} onClickButton={onClickButton} />
    )
  }
}

export default connect(
  ({ counter: { number, posts } }) => ({ number, posts }),
  { increment, decrement },
)(CounterContainer)

```

---

5\. Ducks 패턴

 액션과 리듀서들을 한 파일에 작성하는 방법으로 규칙이 있다.

1. 리듀서는 export default로 작성해야 한다.
2. 액션 생성자는 export로 작성해야 한다.
3. 액션 타입은 중복되지 않도록 액션 타입 앞에 모듈명을 적어준다.