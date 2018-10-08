/**
 * Created by betty on 2/12/18.
 */
"use strict";

const fs = require('fs');

let wfs = fs.createWriteStream('./out.txt');
let rfs = fs.createReadStream('./input.txt');


/*

rfs.on('data', (data) => {
  console.log(data.toString());
});
*/

wfs.write('some data, ');

wfs.on('pipe', (src) => {
});

rfs.pipe(wfs);

