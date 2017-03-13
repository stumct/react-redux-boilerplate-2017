var path = require('path')
var express = require('express')
var app = express()
require('./webpack-dev-server')(app);


app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(8080, () => {
  console.log('Example app listening on port 3000!')
})