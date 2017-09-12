/**
 * Created by betty on 8/6/17.
 */
"use strict";

var express = require("express");
var app = express();

app.get('/', (req, res, next) => {
  console.log('this is / page');
  res.send('this is / page');
  next()
});

app.get('/home', (req, res, next) => {
  console.log('this is /home page')
  res.send('this is /home page');
  next()
});

app.listen(8087);