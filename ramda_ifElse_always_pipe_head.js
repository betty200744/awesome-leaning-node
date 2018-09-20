/**
 * Created by betty on 9/12/17.
 */
"use strict";

var R = require("ramda");

var result = {
a:{saleCount:1},
b:{saleCount:2},
};

var s = R.prop('saleCount');

const saleCount = R.ifElse(R.isEmpty, R.always(0), R.pipe(R.head, R.prop('saleCount')))(result);
