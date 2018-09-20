
/**
 * Created by betty on 12/12/17.
 */
"use strict";

/**
 * the ternary operator
* */
const x = 15;
const answer = x > 10 ? 'yes' : 'no';
console.log(answer);

/**
 * short-circuit , not null , undefined, empty
 * **/

//longhand
let variable1;
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  console.log('variable1 not null')
}
//short
let variable2;
if(variable2){
  console.log('variable2 not null')
}

/**
 * if 满天飞
 * **/
//longhand_1, if ture or false
let a = true;
if (a === true) console.log('is true');
//shorthand_1
if(a) console.log('is true');
if(!a) console.log('is true');
if(!!a) console.log('is true'); //fast way convert value to boolean


//longhand_2, if if , build
let aa = 1;
let bb = 2;
let arr = [];
if (aa) {
    arr.push(aa);
}
if (bb) {
    arr.push(bb);
}
console.log(arr);
//shorthand_2_1

let arr2 = [];
[aa, bb].forEach(function (e) { arr2.push(e) });
console.log(arr2);

//shorthand_2_2
let arr3 = [aa, bb].map(function (e) { return e * 2 }, this);
console.log(arr3);

//longhand_3 , if else , set
let conf;
if (process.env.development) {
    conf = process.env.development;
} else {
    conf = 'localhost';
}
console.log(conf);

//shorthand_3
const conf2 = process.env.development || 'localhost2';
console.log(conf2);

//shorthand_4
if(condition){
  doSomething();
}

condition && doSomething();

//shorthand_5

if( myvar==1 || myvar==5 || myvar==7 || myvar==22 ) console.log('yeah');

if([1,5,7,22].indexOf(myvar)!= -1) console.log('yeah');
if(~[1,5,7,22].indexOf(myvar)) console.log('yeah');


/**
 * for 满天飞
 * **/
//shorthand, for , for in , for of
var obj = {a: 1, b: 2};
var obj2 = [1, 3];
for (let o in obj) console.log(o);
for (let o of obj2) console.log(o);
for (let o of obj2) console.log(`test_${o}`);

/**
 * object x:x漫天飞
 * **/

//longhand
const xx = 1, yy = 2;
const obj3 = {xx:xx, yy:yy};

//shorthand
const obj4 = {xx, yy};

/**
 * arrow function, base function, callback function
 * **/

const sayHello = (name) => {
  console.log(`hello , ${name}`);
};

sayHello('betty');
arr.forEach((e) => {
  console.log(e);
});

/**
 * default parameter变量满天飞
 * **/
//shorthand
const volume = (l=1, w = 2, h = 4) => {
  return l * w * h;
};
console.log(volume());

/**
 * destructuring
 * **/
const {Promise, Types} = require('mongoose');
// const {name,length} = this.props;

/**
 * array short, find
 * **/
const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
];

let max = pets.find( p => { p.type === 'Dog' && p.name === 'Max'; return p;});
console.log(max);


/**
 * object short
 * **/

let obj6 = obj6 || {};

// object shorthand:
if(!!obj){
  console.log(obj)
}

/**
 * 取反
* */
// LongHand:
var something = true;
  if(something == true){
    something = false
  }else{
    something = true
  }
console.log(something);
// ShortHand:
  something = !something;
console.log(something);

/**
 * short function
 * **/
// Short function 1;
function x() {console.log('x')};
function y() {console.log('y')};
var z = 3;
(z==3?x:y)();
//short function2 ;
if(x){
  y()
}

x && y();