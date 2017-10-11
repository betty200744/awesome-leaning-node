/**
 * Created by betty on 9/20/17.
 */
"use strict";
var memoize = require('memoize');

var a = 0

function p() {
  console.log('this is p');
}

function hi(name) {
  return `hi ${name}`
}

var c = a;
var greeting = hi;
var pp = p;

var result = hi('betty');

console.log(c);
console.log(result);
console.log(hi);
console.log(pp());
console.log(greeting('betty greeting'));

var square = memoize(function(x){ return x*x; });

var result2 = square(4);
console.log(result2)