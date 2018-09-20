/**
 * Created by betty on 7/28/17.
 */
"use strict";

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const testFolder = '../';
// var files = require("glob").globSync("*.txt");


fs.readdirAsync(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})



fs.readdirAsync('.', (err, files)=>{
  for (var i = 0, len = files.length; i < len; i++) {
    var match = files[i].match(/.*.cvs/);
    if(match !== null)
      fs.unlinkAsync(match[0]);
  }
});

// fs.unlinkAsync(`*.cvs`, (err) => console.log(err));