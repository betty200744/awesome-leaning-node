/**
 * Created by betty on 11/17/17.
 */
"use strict";

const co = require('co');

// pro is a promise, is only a promise
var pro = co(function* say() {
  return yield Promise.resolve('hello');
});

pro.then((value) => {
  console.log(value);
});



// fn is a function, that return a promise
var fn = co.wrap(function* say() {
  return yield Promise.resolve('hello');
});

fn().then(function (val) {
  console.log(val);
});

