import {
  createStore,
  applyMiddleware,
  /* compose, */ combineReducers,
  compose,
} from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"

import * as modules from "./modules"
import rootSaga from "./sagas"

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  return next(action)
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, loggerMiddleware]
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(combineReducers({ ...modules }), enhancer)
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
})

export default wrapper
