import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import thunk from 'redux-thunk'
import { reducer1 } from '../reducers/reducer1.js'

const reducer = combineReducers({
  router: routerStateReducer,
  reducer1: reducer1
});


export default function makeStore (initialState) {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({createHistory})
  )(createStore)(reducer, initialState);
  return store;

}

