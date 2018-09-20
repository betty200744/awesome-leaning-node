/**
 * Created by betty on 12/17/17.
 */
"use strict";

const R = require('ramda');
const moment = require('moment');

//curry test
function add(x, y) {
  return x + y;
}
const curryAdd = R.curry(add);
console.log(curryAdd(2)(3));

//区间内，number, string, date,  测试可以用到， 避免用例过期失败
console.log(R.clamp(moment('2017-12-14'), moment('2017-12-25'), moment()));

//gt
console.log(R.gt(3, 2));
console.log(R.gt('b', 'a'));
console.log(R.gt(moment(), moment('2017-12-11')));

//equals
console.log(R.equals(moment(), moment('2018-11-11')));
console.log(R.equals({}, {}));
console.log(R.equals({'a': {a: 1}}, {'a':{a: 1}}));

//
console.log(R.both( x => x > 1, x => x > 2)(5));
console.log(R.either( x => x > 1, x => x > 2)(5));

console.log(R.allPass( [x => x > 1, x => x > 6])(5));
console.log(R.anyPass( [x => x > 1, x => x > 6])(5));

//complement
console.log(R.complement( x => x > 3)(5));
console.log(R.complement(R.anyPass( [x => x > 1, x => x > 6]))(5));

//split, string to array
console.log('i, am ,betty'.split(',')) ;
console.log(R.split(',', 'i, am, betty') );

//list , javascript里面没有的
console.log(R.contains({'a': 1}, [{'a': 1}, {'b': 2}]));

//list
console.log( [1,2,3].pop() );

