const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contentful = require('contentful')
const React = require('react');
const ReactDOM = require('react-dom');

const PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app.listen(PORT, function(){
  console.log("listening on PORT:" + PORT);
});


