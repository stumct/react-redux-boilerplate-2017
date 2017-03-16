const path = require('path');
const express = require('express');
const app = express();

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router').StaticRouter;
const App = require('../src/Components/App').default;
const Home = require('../src/Components/Home').defaul;

require('./webpack-dev-server')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.render('pages/index.ejs', { app: html });
  }
});

app.listen(8080, () => {
  console.log('Example app listening on port 3000!');
});
