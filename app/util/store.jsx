import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import { myreducer } from '../reducers/myreducer.js'

const reducer = combineReducers({
  router: routerStateReducer,
  myreducer: myreducer
});

export default function makeStore (initialState) {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({createHistory})
  )(createStore)(reducer, initialState);
  return store;

}

