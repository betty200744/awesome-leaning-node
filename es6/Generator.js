/**
 * Created by betty on 9/28/17.
 */
"use strict";



function* say() {
  console.log('please called next() ');
  yield 'hello';
  // done();
}

let sayer = say();
console.log(sayer);
let next = sayer.next();
console.log(next)