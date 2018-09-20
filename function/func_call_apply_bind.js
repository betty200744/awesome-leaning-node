/**
 * Created by betty on 10/20/17.
 */
"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.sayName = (name) => {
    console.log(name);
  };
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log(cheese);
console.log(fun);
