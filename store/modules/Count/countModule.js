import createReducer from "store/createReducer"

export const types = {
  ADD_COUNT: "count/ADD_COUNT",
  ABSTRACT_COUNT: "count/ABSTRACT_COUNT",

  ADD_COUNT_SAGA: "count/ADD_COUNT_SAGA",
  ABSTRACT_COUNT_SAGA: "count/ABSTRACT_COUNT_SAGA",

  ADD_SAGA_REQUEST_SUCCESS: "count/ADD_SAGA_REQUEST_SUCCESS",
  ABSTRACT_REQUEST_SUCCESS: "count/ABSTRACT_REQUEST_SUCCESS",
}

export const actions = {
  addNumber: (payload) => ({ type: types.ADD_COUNT, payload }),
  abstractNumber: (payload) => ({ type: types.ABSTRACT_COUNT, payload }),

  addNumberSaga: (payload) => ({ type: types.ADD_COUNT_SAGA, payload }),
  abstractNumberSaga: (payload) => ({
    type: types.ABSTRACT_COUNT_SAGA,
    payload,
  }),
}

export const INITIAL_STATE = {
  number: 0,
  message: "",
}

const reducer = createReducer(INITIAL_STATE, {
  [types.ADD_COUNT]: (state, action) => {
    state.number = state.number + 1
    state.message = "just redux"
  },
  [types.ABSTRACT_COUNT]: (state, action) => {
    state.number = state.number - 1
    state.message = "just redux"
  },

  [types.ADD_SAGA_REQUEST_SUCCESS]: (state, action) => {
    state.number = state.number + 1
    state.message = "redux-saga"
  },
  [types.ABSTRACT_REQUEST_SUCCESS]: (state, action) => {
    state.number = state.number - 1
    state.message = "redux-saga"
  },
})

export default reducer
