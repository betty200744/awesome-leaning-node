/**
 * Created by betty on 9/8/17.
 */
"use strict";

var R = require("ramda");

var c = [{_id: 1, 'a': 123}, {_id:2, 'b': 344}];
const getPid = R.map(R.prop('_id'));

console.log(getPid(c));