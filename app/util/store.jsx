/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createHistory'
import thunk from 'redux-thunk'
import { reducer1 } from '../reducers/reducer1.js'
import Routes from '../routes.jsx'

const reducer = combineReducers({
  router: routerStateReducer,
  reducer1: reducer1
});


export default function configureStore (initialState) {

  const store = compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      Routes,
      createHistory
    })/*,
    devTools()*/
  )(createStore)(reducer);

  return store;

}


/*


const storeEnhancers = [ reduxReactRouter({ createHashHistory })]
let combinedCreateStore = compose(...storeEnhancers)(createStore)
const finalCreateStore = applyMiddleware(thunk)(combinedCreateStore)
const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer
}, reducers))

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot)
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })

  return store
}
*/