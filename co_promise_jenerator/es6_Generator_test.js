/**
 * Created by betty on 9/10/17.
 */
"use strict";



var a = function* (x) {
  console.log("start");
  var y =  yield  x + 2;
  y = yield  y + 6;
  y = yield  y + 100;
  return y;
};


var aa = a(1);

var one = aa.next().value;
console.log("aaaa");

var two = aa.next(one).value;
console.log("bbbb");

var thr = aa.next(two).value;
console.log("cccc");

var four = aa.next(thr).value;

console.log(one, two, thr , four);



