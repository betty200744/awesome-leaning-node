/**
 * Created by betty on 8/6/17.
 */
"use strict";

var express = require('express');
var app = express();
var router = express.Router();
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser')
// var methodOverride = require('method-override')


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

//Application level middleware, this is a middleware function , without res.send()

app.use((req, res, next) => {
  console.log('time:' , Date.now());
  next();
} );


//Router-level middleware , in current js file
app.use('/user', router);
router.get('/list', (req, res) => {
  res.send('this is /user/list')
});

router.get('/detail', (req, res) => {
  res.send('this is /user/detail')
});


//Router-level middleware , in an other js file
app.use('/subrouter', require('./node_express_sub_router'));


//Error-handling middleware, with four arguments

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('server error')
});

//Built-in middleware, 内置的middleware
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};
app.use(express.static('public', options));

//Thrid-party middleware , 第三方写好的middleware
// app.use(cookieParser());
// var bodyParser = require('body-parser')
// var methodOverride = require('method-override')
//
// app.use(bodyParser.json());
// app.use(methodOverride());

//this is a handler function , with res.send()

app.get('/', (req, res) => {
  console.log(req.requestTime);
  res.send(`hello betty , ${req.requestTime}`);
});



app.listen(8089);