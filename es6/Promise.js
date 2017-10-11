/**
 * Created by betty on 9/28/17.
 */
"use strict";
var co = require("co");

var p = new Promise((resolve, reject) => {
  if (false) {
    resolve('hello');
  } else {
    reject('oh  oh');
  }
});

function callco() {
  return co.call(this, function *() {
    try {
      var log = yield p;
      console.log(log);
    } catch (err) {
      console.log(err)
    }
  });
}

callco();


