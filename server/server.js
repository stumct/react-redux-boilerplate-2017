// Node/Express imports
const path = require('path');
const express = require('express');
const app = express();

// Setup webpack dev server
require('./webpack-dev-server')(app);

// React/Redux lib imports
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router').StaticRouter;
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
const reducers = require('../src/Redux/Reducers').default;
const App = require('../src/Components/App').default;
const Home = require('../src/Components/Home').default;

// Setup the ejs view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// expose the public directory to host files
app.use('/public', express.static(path.join(__dirname, '/public')));

// Route handler, renders the react app
app.get('*', (req, res) => {
  const context = {};
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    const preloadedState = { Test: { hello: 'test' } };
    const store = createStore(reducers, preloadedState);
    res.render('pages/index.ejs', {
      app: ReactDOMServer.renderToString(<Provider store={store}><StaticRouter location={req.url} context={context}><App /></StaticRouter></Provider>),
      state: JSON.stringify(store.getState()).replace(/</g, '\\u003c'),
    });
  }
});

// Start the server
app.listen(8080, () => console.log('Example app listening on port 8080!'));
