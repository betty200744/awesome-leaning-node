/**
 * Created by betty on 8/12/17.
 */
"use strict";

function Car(a, b, c) {
  this.a = a || '';
  this.b = b;
  this.c = c;
  
}
Car.prototype.d = null;
Car.prototype.printD = function(){
  console.log(this.d);
}

var car1 = new Car('1', '2', '3');
var car2 = new Car('3', '4', '5');

var car3 = {
  'a': 4,
  'b': 5,
  'c': 6,
};

car1.d = 'd';

console.log(car1)
console.log(car2)
console.log(car3)
car1.printD();


console.log(car1.a);
console.log(car2.a);
console.log(car3.a);

console.log(car3.prototype)
console.log(car1.prototype);