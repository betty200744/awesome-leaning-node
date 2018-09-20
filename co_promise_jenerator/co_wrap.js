/**
 * Created by betty on 11/17/17.
 */
"use strict";

const co = require('co');

var fn = co.wrap(function* say() {
  return yield Promise.resolve('hello');
});

fn().then(function (val) {
  console.log(val);
});
