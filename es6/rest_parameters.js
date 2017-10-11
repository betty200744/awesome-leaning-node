/**
 * Created by betty on 9/28/17.
 */
"use strict";

function myFunc() {
  var items = [].splice.call(arguments, 1); //arguments  call [] 's splice method , first is argument
  console.log(items)
  console.log(arguments);
}

myFunc(1,2,3);

function Store() {
  var shoppingCart = {
    fruit: [],
    vegetalbe: [],
  }
  return {
    add: function (type, ...items) {
      items.forEach(function (v) {
        shoppingCart[type].push(v);
      });
      console.log(items);
    },
    list:shoppingCart,
  }
}

var myCart = Store();
myCart.add('fruit', 'a', 'b');
console.log(myCart.list);





