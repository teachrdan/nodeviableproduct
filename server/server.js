var _ = require('lodash');
var express = require('express');
var app = express();
app.use(express.static('client'));

app.get('/', function(req, res) {
  
});

app.post('/', function(req, res) {

});

app.put('/', function(req, res) {

});

app.delete('/', function(req, res) {

});

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send('Error.');
  }
});

module.exports = app;
