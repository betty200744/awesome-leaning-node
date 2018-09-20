/**
 * Created by betty on 11/26/17.
 */
"use strict";

const R = require('ramda');

//list > adjust, 使用自定函数更改list指定位置的值
var adjust = R.adjust(R.add(1), 0 , [1, 2, 3]);
console.log(adjust);

//list > all,判断list里面所有值是否都满足给定函数
var all = R.all(R.gt(3), [1, 2, 3]);
console.log(all);


