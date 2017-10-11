/**
 * Created by betty on 8/6/17.
 */
"use strict";

var express = require("express");
var app = express();


app.use('public', express.static('public'));

//Route paths
app.get('/', (req, res, next) => {
  console.log('this is / page');
  res.send('this is / page');
  next()
});

//Route methods , include get , post , put
app.get('/home', (req, res, next) => {
  console.log('this is /home page');
  res.send('this is /home page');
  next()
});

//Route path, regular express

app.get('/ab?cd', (req, res, next) => {
  res.send('this is /abcd  or /acd ')
});

app.get('/de*f', (req, res) =>{
  res.send('de*f');
});


//app.all , loading middleware, for all request methods in this and next router

app.all('/', (req, res, next) => {
  console.log('this is loading middleware');
});

//Route parameters
app.get('/channel/:id/:number', (req, res, next) => {
  res.send(req.params);
  console.log(req.params);
});

//Route handlers, multi callback function
var cb0 = function (req, res, next) {
  console.log('cb0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('cb1')
  res.download('node_express_router.js')
};

app.get('/multi/callback', [cb0, cb1]);

//app.route, the some uri for different method

app.route('/approute')
  .get( (req,res, next) => {
    res.send('get a approute')
  })
  .post((req,res,next) => {
    res.send('post a approute')
  })
  .put((req, res, next) => {
    res.send('put a approute')
  });


//express.Router ,

app.use('/api/', require('./node_express_sub_router'));

app.listen(8087);