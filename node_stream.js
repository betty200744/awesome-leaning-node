/**
 * Created by betty on 8/5/17.
 */
"use strict";

var fs = require("fs");

var data;

var readStream = fs.createReadStream('./public/input.txt');
var writeStream = fs.createWriteStream('./public/output.txt');

readStream.on('data', (block)=>{
  data += block;
});

readStream.on('end', () => {
  // writeStream.write(data, 'UTF8');
  console.log(data);
});

readStream.pipe(writeStream);


function world() {
  console.log('hello world')
}

module.exports = {world}





