/**
 * Created by betty on 8/13/17.
 */
"use strict";

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs-extra"));
var co = require("co");
var path = require("path");


function getFileNames() {
  return co.call(this, function *() {
    return yield fs.readdirAsync('../public');
  });
}

var fileNames = getFileNames();

Promise.map(fileNames, function (fileName) {

  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '../public', fileName), (error, buf) => {
      if (error) reject(error)
      else resolve(buf)
    });
  })
}).then(buf => {
  console.log(buf.toString());
  return 1;
})
  .then((r) => {
    if (r) {
      console.log("then false");
      return 0;
    }
  })
  .then((r) => {
    if (r) {
      console.log("then true");
      return 1;
    }
  });


function readAllFilesNoPromise() {
  return co.call(this, function *() {
    let fileNames = yield getFileNames();
    yield fileNames.map(function*(fileName) {
      let filePath = path.join(__dirname, '../public', fileName);
      let readString = yield fs.readFileAsync(filePath);
      console.log(readString.toString());
    });
  });
}

// readAllFiles()
readAllFilesNoPromise();








