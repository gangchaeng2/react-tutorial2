Hook은 React 16.8 버전부터 도입된 기능으로 기존 클래스형 컴포넌트에서만 가능했던 상태관리를 함수형 컴포넌트에서도 사용 할 수 있도록 만든 기능입니다.

* Hook 사용 규칙

최상위에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수에서 Hook을 실행하면 에러가 발생합니다.

 React 함수 컴포넌트에서만 Hook을 사용해야 합니다.

* useState

---------------

클래스형 컴포넌트의 state, setState와 비슷한 역할을 가지고 있는 함수이다.

```javascript
const initialValue = 0
const [value, setValue] = useState(initialValue)
```

상태 유지 값(value)과 그 값을 갱신하는 함수(setValue)를 반환한다.

 최초로 렌더를 하는 동안, 반환된 state는 첫 번째 전달된 인자의 값(initialState)으로 저장된다.

 예를 들어 value의 상태를 변경하고 싶다면 아래의 코드를 참고하면 됩니다.

```javascript
<div>
  <button onClick={() => setValue(value + 1)}>+1</button>
  <button onClick={() => setValue(value - 1)}>-1</button>
</div>
```



```javascript
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

위와 같이 props로 받아온 값을 계산하여 초기 값으로 설정 할 수 있습니다.

* useEffect

React 클래스 컴포넌트의 생명주기와 비슷한 함수로 componentDidMount, componentDidUpdate, componentWillUnMount를 합쳐 놓은 것과 유사하다. 

** 함수형 컴포넌트**

```javascript
// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`
})
```

**클래스형 컴포넌트**

```javascript
componentDidMount() {
  document.title = `You clicked ${this.state.count} times`
}

componentDidUpdate() {
  document.title = `You clicked ${this.state.count} times`
}
```



위 두개의 컴포넌트는 똑같은 결과를 실행합니다.

**마운트 될 때만 실행하고 싶을 때**

```javascript
useEffect(() => {
  console.log('마운트 될때만 실행합니다')
}, [])
```

** 특정값이 업데이트 될 때 실행하고 싶을 때**

```javascript
  useEffect(() => {
    console.log(name)
  }, [name])
```

