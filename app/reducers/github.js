import * as constants from '../constants.jsx'
import createReducer from '../util/create-reducer.jsx'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: [],
    pagination: {}
  }
}

const actionHandlers = {
  [constants.FETCH_USER]: (state, action) => ({ user: action.user }),
  [constants.FETCH_REPO]: (state, action) => ({ repo: action.repo }),
  [constants.FETCH_USER_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        user: action.stargazers,
        pagination: action.pagination
      })
    }),
  [constants.FETCH_REPO_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        repo: action.stargazers,
        pagination: action.pagination
      })
    })
}

export const github = createReducer(initialState, actionHandlers)
