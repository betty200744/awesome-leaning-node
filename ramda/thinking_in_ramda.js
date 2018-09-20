/**
 * Created by betty on 12/14/17.
 */
"use strict";

const R = require('ramda');

//pipe (multiply, addOne, square)
const multiply = (x, y) => {
  return x * y;
};

const addOne = (x) => {
  return x + 1;
};

const square = (x) => {
  return x * x;
};

const operator = R.pipe(multiply, R.add(1), square);
console.log(operator(3, 4));

//ifElse
const forever21 = age => age >= 21 ? 21 : age + 1;
console.log(forever21(2));

console.log(R.gte(2, 1));

const foo = R.ifElse(R.isNil, R.inc, R.dec);
console.log(foo(999));

const forever22 = age => R.ifElse(R.lte(21), R.identity, R.inc)(age);
console.log( forever22(22));

//R.curry , R.__

const ternaryAdd = (x, y, z) => {
  return x + y + z;
};
const curryTernaryAdd = R.curry(ternaryAdd);
console.log(curryTernaryAdd(1, 2, 3));
console.log(curryTernaryAdd(1, 2)(3));
console.log(curryTernaryAdd(1)(2)(3));
console.log(curryTernaryAdd(R.__,2)(3)(1));
console.log(curryTernaryAdd(R.__,R.__)(3)(1)(2));
console.log(curryTernaryAdd(R.__,R.__,R.__)(1)(2)(3));
console.log(curryTernaryAdd(R.__,2,R.__)(1)(3));
console.log(curryTernaryAdd(R.__,2,R.__)(1, 3));
console.log(curryTernaryAdd(R.__,2)(R.__,3)(1));

//

