/**
 * Created by betty on 9/10/17.
 */
"use strict";
var R = require("ramda");

var p = {r: 2, price: 3};

var l = [1, 2, 3, 4, 5];

var objL = R.map(R.objOf("spec"))(l);

var rangep = R.pipe(R.range(0))(10);

var rangeIncP = R.pipe(R.range(0), R.map(R.inc))(10);
var rangeObjP = R.pipe(R.range(0), R.map(R.objOf("spec")))(10);
var rangeObjMergeP = R.pipe(R.range(0), R.map(R.pipe(R.objOf("spec"), R.merge(p))))(10);

console.log(objL);
console.log(rangep)
console.log(rangeIncP)
console.log(rangeObjP)
console.log(rangeObjMergeP)