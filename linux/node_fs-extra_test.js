/**
 * Created by betty on 8/13/17.
 */
"use strict";

var Promise = require('bluebird');
var co = require("co");
var fs = Promise.promisifyAll(require("fs-extra"));


function test() {
  return co.call(this, function *() {

    yield  fs.copyAsync('./public/input.txt', './public/copy2.txt');
    yield fs.ensureFileAsync('./public/input2.txt');
    yield fs.ensureDirAsync('./public/test');
    yield fs.removeAsync('./public/movetest');
    yield fs.move('./public/test', './public/movetest');
    var stringout = yield fs.readFileAsync('./public/input.txt');
    yield fs.outputFileAsync('./public/output.txt', stringout)

    let currentDir = yield fs.readdirAsync('./public');
    console.log(currentDir)
  });
}

test();

