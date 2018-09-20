/**
 * Created by betty on 11/17/17.
 */
"use strict";

const co = require('co');

// pro is a promise, is only a promise
var pro = (req, res, next) => {
  return co.call(this, function *() {
    return yield Promise.resolve('hello');
  });
};

pro().then(a => {
  console.log(a)
});


//
var pro = co(function* say() {
  return yield Promise.resolve('hello');
});

pro.then((value) => {
  console.log(value);
});
