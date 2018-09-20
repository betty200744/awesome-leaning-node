/**
 * Created by betty on 1/17/18.
 */
"use strict";


let obj = {
  a: 1,
  thisTest () {
    console.log(this);
    return this;
  },
  printa () {
    console.log(this.a);
  },
}


var ff = obj.thisTest();
ff.printa();