/**
 * Created by betty on 12/12/17.
 */
"use strict";

const R = require('ramda');
const {red, green, blue} = require('chalk');

//array to string
// nums to string
var nums = [4, 2];
console.log(nums.toString());

//stringList to string
var stringList = ['aa', 'bb'];
console.log(stringList.join(','));

//string to stringList
var stings = 'abc, def';
console.log(R.split(',')(stings));


const disco = R.pipe(R.zipWith(R.call, [ red, green, blue ]), R.join(' '));
console.log(disco([ 'foo', 'bar', 'xyz' ]));

R.map(R.call, R.repeat(Math.random, 5));