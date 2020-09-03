import { all } from "redux-saga/effects"
import watcherCountSaga from "store/sagas/Count/countSagas"
export default function* rootSaga() {
  yield all([watcherCountSaga()])
}
