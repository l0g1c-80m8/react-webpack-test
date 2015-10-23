import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import makeStore from './util/store.jsx';
import Application from './components/application.jsx'
import Home from './components/pages/home.jsx'
import PageOne from './components/pages/pageone.jsx'
import PageTwo from './components/pages/pagetwo.jsx'

import './scss/main.scss';
const initialState = {
  myreducer: {
    test: null
  }
};
const store = makeStore(initialState);


class Root extends React.Component {

  render () {
    return <Provider store={store}>
        <div>
            <ReduxRouter>
              <Route component={Application}>
                <Route path="/" component={Home}/>
                <Route path="/page1" component={PageOne}/>
                <Route path="/page2" component={PageTwo}/>
              </Route>
            </ReduxRouter>
       </div>
    </Provider>

  }
}

ReactDOM.render(<Root/>, document.getElementById('app'))