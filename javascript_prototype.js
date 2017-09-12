/**
 * Created by betty on 8/13/17.
 */
"use strict";

var o = {
  'a': 1,
  'b':1,
  f: function () {
    return this.a + 1;
  }
};

function oo(x) {
  this.x = x;
}

oo.printX = function () {
  console.log( `printx ${this.x}`);
};

console.log(o.a);
console.log(o.f());
console.log(o.__proto__);

var p = Object.create(o);

console.log(p.__proto__);

var opp = Object.create(oo);
opp.x = 12;
console.log(opp.x);
console.log(opp.printX());
console.log(opp.__proto__);

