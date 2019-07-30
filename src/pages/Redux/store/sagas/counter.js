import axios from 'axios'
import { delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const callAPi = url => {
  return axios.get(url)
}

export function* incrementAsync(action) {
  try {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const data = yield call(callAPi, url)
    yield put({ type: 'counter/CHANGE_COLOR', data: data })

  } catch (err) {
    console.log(err)
  }

  console.log('delay....')
  yield delay(3000)
  console.log('increment')
  yield put({ type: 'counter/INCREMENT' })
}

export function* decrementAsync(action) {
  console.log('delay....')
  yield delay(3000)
  console.log('decrement')
  yield put({ type: 'counter/DECREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync)
  yield takeEvery("DECREMENT_ASYNC", decrementAsync)
}
