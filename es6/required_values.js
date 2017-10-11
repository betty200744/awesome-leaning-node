/**
 * Created by betty on 9/28/17.
 */
"use strict";

function test({a=1, b= requiredParameter('b') }) {

  console.log(JSON.stringify({a, b}))
}

function requiredParameter(name) {
  throw  new Error(`missing parameter ${name}`)
}

try {
  test({});  
} catch (err) {
  console.log(err)
}
