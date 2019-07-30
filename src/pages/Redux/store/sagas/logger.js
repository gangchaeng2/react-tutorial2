import { take, select, takeEvery } from 'redux-saga/effects'

function* printLogger() {
  while(true) {
    const action = yield take('*')
    const state = yield select()

    console.log(action)
    console.log(state)
  }
}

export function* watchLogger() {
  yield takeEvery("*", printLogger)
}
