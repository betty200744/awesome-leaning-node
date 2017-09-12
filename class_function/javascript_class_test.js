/**
 * Created by betty on 9/10/17.
 */
"use strict";

class A {
  constructor(a, b)  {
    this.a = a ;
    this.b = b ;
  }

  getA() {
  console.log(`this is ${this.a}`)
  }

  getB(){
    console.log(`this is ${this.b}`)
  }

}

class B extends A{
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
  
  getC(){
    console.log(`this is ${this.c}`);
  }
  
  getAll(){
    console.log(`this is ${this.a}, ${this.b}, ${this.c}`)
  }
}

new B(1, 2, 3).getA();
new B(1, 2, 3).getB();
new B(1, 2, 3).getC();
new B(1, 2, 3).getAll();

