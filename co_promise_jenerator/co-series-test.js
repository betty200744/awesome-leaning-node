/**
 * Created by betty on 9/8/17.
 */
"use strict";

var co = require("co");
var series = require("co-series");

var names = [1, 2, 3];
var products;
var createProduct = function* (p) {
  products.push(`start ${p}`);
  yield Promise.resolve();
  products.push(`end ${p}`);
};

var createProductPromise = function (p) {
  products.push(`start ${p}`);
  return Promise.resolve().then(function () {
    products.push(`end ${p}`);
    });
};

function seriesExecCreate() {
  return co.call(this, function *() {
    products = [];
    yield names.map(series(createProduct));
    products.push('finished')
    console.log(products)
  });
}


function parallelExecCreate() {
  return co.call(this, function *() {
    products = [];
    yield names.map(co.wrap(createProduct));
    products.push('finished')
    console.log(products)
  });
}

function promiseParallelExecCreate() {
  products = [];
  Promise.all(names.map(createProductPromise));
  console.log(products);
}

function promiseSeriesExecCreate() {
  products = [];
  Promise.all(names.map(series(createProductPromise)));
  console.log(products);
}
// seriesExecCreate();
// paralledExecCreate();

// promiseParallelExecCreate()
promiseSeriesExecCreate()