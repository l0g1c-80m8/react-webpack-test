import * as constants from '../constants.jsx'
import createReducer from '../util/create-reducer.jsx'

const initialState = {
  test: null
}

const actionHandlers = {
  [constants.SET_TEST]: (_, newTest) => ({ test: newTest })
}

export default createReducer(initialState, actionHandlers)
