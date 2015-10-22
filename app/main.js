import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Root from './root.jsx';
import configureStore from './util/store.jsx';

import './scss/main.scss';

const initialState = {
  test: null
}

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
, document.getElementById('app'))