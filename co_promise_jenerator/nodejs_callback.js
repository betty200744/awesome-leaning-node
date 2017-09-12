/**
 * Created by betty on 8/1/17.
 */
"use strict";

var fs = require("fs");

fs.readFile('./public/input.txt', (err, data) => {
  if (err) {
    console.error(err)
  }
  console.log(data.toString())
} );


console.log('end');

