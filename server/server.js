var _ = require('lodash');
var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(error);
  }
});

module.exports = app;
