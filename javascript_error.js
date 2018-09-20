/**
 * Created by betty on 8/13/17.
 */
"use strict";

try {
    throw new Error("oh my good")
} catch (err) {
  if (err instanceof  EvalError) {
  } else {
    console.log('not a eval error')
    console.log(typeof err)

  }
  console.log(err);
}

// console.log(new EvalError("oh my eval error"));
//
// console.log(new RangeError());

var calla = {
  x: 'calla'
};

function test(x) {
  console.log(x);
  console.log(arguments)
}
test.print = function () {
  console.log(this.x)
};

test.call(calla)



