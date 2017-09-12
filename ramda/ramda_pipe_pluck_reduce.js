/**
 * Created by betty on 9/11/17.
 */
"use strict";

var R = require("ramda");

var mr = {
  martProducts:[{
    spec: "10",
    recommendPrice: 2,
    costPrice: 1,
    profitPercentage: 0.9,
    weight: 3,
    priceLimitation: {from: 2}
  }, {
    spec: "10",
    recommendPrice: 2,
    costPrice: 1,
    profitPercentage: 0.5,
    weight: 3,
    priceLimitation: {from: 2}
  }]
};

const minProp = key => R.pipe(R.prop('martProducts'), R.pluck(key), R.reduce(R.min, Infinity));
const maxProp = key => R.pipe(R.prop('martProducts'), R.pluck(key), R.reduce(R.max, -Infinity));


mr.price = minProp('price')(mr);
mr.costPrice = minProp('costPrice')(mr);
mr.minProfitPercentage = minProp('profitPercentage')(mr);
mr.maxProfitPercentage = maxProp('profitPercentage')(mr);

console.log(mr);