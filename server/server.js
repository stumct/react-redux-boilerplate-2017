const path = require('path');
const express = require('express');
const app = express();

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router').StaticRouter;
const App = require('../src/Components/App').default;
const Home = require('../src/Components/Home').default;

const grpc = require('grpc');
const proto = grpc.load(__dirname + '/pb/hello.proto').hello;
const client = new proto.HelloService('localhost:8085', grpc.credentials.createInsecure());

require('./webpack-dev-server')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  const context = {};

  client.sayHello({ Name: 'me' }, function(err, response) {
    console.log('Greeting:', response.Message);
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
});

app.listen(8080, () => {
  console.log('Example app listening on port 3000!');
});
