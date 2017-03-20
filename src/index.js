import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './Redux/Reducers';
import createLogger from 'redux-logger';

import './Styles/global.scss';

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE_;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(middleware)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
