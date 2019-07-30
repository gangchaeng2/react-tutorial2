import axios from 'axios'
import { call, put, takeEvery, select } from 'redux-saga/effects'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/'

const callAPI = url => {
  return axios.get(url)
}

function* incrementAsync(action) {
  // ************ 해당 액션이 발생할 때 까지 대기상태로 있는다.
  // const action = yield take('counter/DECREMENT')

  // ************ basic get all state
  // const state = yield select()
  // ************ get state param
  // const counter = yield select((state) => state.counter)

  yield put({ type: 'counter/INCREMENT' })

  const number = yield select((state) => state.counter.number)

  try {
    const url = `${BASE_URL}${number}`
    const res = yield call(callAPI, url)
    yield put({ type: 'counter/ADD_POST', data: res.data })

  } catch (err) {
    console.log(err)
  }
}

function* decrementAsync(action) {
  // console.log('delay....')
  // yield delay(3000)
  yield put({ type: 'counter/DECREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
  yield takeEvery("DECREMENT_ASYNC", decrementAsync)
}
