import { all } from 'redux-saga/effects'

import { watchIncrementAsync } from './counter'
// import { watchLogger } from './logger'

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    // watchLogger()
  ])
}