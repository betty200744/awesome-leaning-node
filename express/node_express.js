/**
 * Created by betty on 8/6/17.
 */
"use strict";

var express = require('express');
var app = express();

var logger = function (req, res, next) {
  console.log('logger middleware');
  next();
};

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(logger);
app.use(requestTime);
app.use('public', express.static('public'));


app.get('/', (req, res) => {
  console.log(req.requestTime);
  res.send(`hello betty , ${req.requestTime}`);
});



app.listen(8089);