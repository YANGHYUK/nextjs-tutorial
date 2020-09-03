import { call, put, cancelled, delay } from "redux-saga/effects"
import { apiFetch, resCodeProc } from "lib/api"
import { showLoading, hideLoading } from "react-redux-loading-bar"

export function* fetchData(
  payload,
  successAction = true,
  failureAction,
  isLoading = false
) {
  // saga logic start
  yield put({ type: "base/IS_LOADING", payload: true })

  yield put(showLoading())
  try {
    const res = yield call(apiFetch, payload)

    if (res && successAction) {
      yield put({ type: "base/FETCH_SUCCESS", payload: true })
      yield call(successAction(res))
      yield put(hideLoading())
    } else if (!res && failureAction) {
      yield call(failureAction(res))
      yield put(hideLoading())
    }
  } catch (e) {
    yield put({ type: "base/FETCH_FAILURE", payload: e, error: true })
    yield put({
      type: "base/SHOW_MODAL",
      payload: {
        dark: true,
        modalName: "alert",
        modalContent: e.message,
        modalStyle: "purpleGradientStyle",
        modalTitle: "Wait!",
      },
    })

    yield put(hideLoading())
    yield call(failureAction(e))
  } finally {
    if (yield cancelled()) {
      if (isLoading) {
        yield put({ type: "base/IS_LOADING", payload: false })
      }
    }
  }
  // saga logic end
}
