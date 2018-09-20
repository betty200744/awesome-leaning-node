/**
 * Created by betty on 12/20/17.
 */
"use strict";


var obj = {
  a: '1',
  b: '2',
  c: {
    b: '3',
    hello (){
      return this.b;
    },
  },
};

console.log(obj.c.hello());

