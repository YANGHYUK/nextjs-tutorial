import {
  all,
  put,
  // call,
  fork,
  // takeEvery,
  // select,
  takeLatest,
} from "redux-saga/effects"

import { fetchData } from "store/sagas/baseSaga"

function* onAddReqeust(action) {
  console.log("bye")
  const payload = action.payload

  const successAction = (res) => {
    return function* () {
      console.log("success side")
      // let payload = res.data
      yield put({
        type: "count/ADD_SAGA_REQUEST_SUCCESS",
        // payload,
      })
    }
  }
  const failureAction = () => {
    return function* () {
      console.log("failure!, wrong request!")
    }
  }
  yield fork(fetchData, payload, successAction, failureAction)
}

function* onAbstractReqeust(action) {
  const payload = action.payload

  const successAction = (res) => {
    return function* () {
      console.log("success side")
      // let payload = res.data
      yield put({
        type: "count/ABSTRACT_REQUEST_SUCCESS",
        // payload,
      })
    }
  }
  const failureAction = () => {
    return function* () {
      console.log("failure!, wrong request!")
    }
  }
  yield fork(fetchData, payload, successAction, failureAction)
}

export default function* watcherCountSaga() {
  yield all([takeLatest("count/ADD_COUNT_SAGA", onAddReqeust)])
  yield all([takeLatest("count/ABSTRACT_COUNT_SAGA", onAbstractReqeust)])
}
