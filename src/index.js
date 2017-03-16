import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './Redux/Reducers'; // Or wherever you keep your reducers
import createLogger from 'redux-logger';

const logger = createLogger();
const history = createHistory();
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, applyMiddleware(middleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
