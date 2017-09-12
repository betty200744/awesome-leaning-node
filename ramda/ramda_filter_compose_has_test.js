/**
 * Created by betty on 9/8/17.
 */
"use strict";
var R = require("ramda");

var mm = [{_id: 1, name: "n1"}, {name: "n2"}];

const hasId = R.filter(R.has('_id'))(mm);
const noId = R.filter(R.compose(R.not, R.has('_id')))(mm);

console.log(hasId);
console.log(noId);
