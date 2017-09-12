/**
 * Created by betty on 9/10/17.
 */
"use strict";

var method = {
  ma: function () {
    console.log("this is a");
  },
  mb (){
    console.log("this is b");
  }
};


class A {
  constructor(a, aa){
    this.a = a ;
    this.aa = aa;
  }

  getA() {
  console.log(`this is: ${this.a}`);
  }

}

method.ma();
new A(1, 3).getA()