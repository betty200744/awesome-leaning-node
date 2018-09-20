/**
 * Created by betty on 2/12/18.
 */
"use strict";

const fs = require('fs');

let wfs = fs.createWriteStream('./out.txt');
let rfs = fs.createReadStream('./input.txt');


// wfs.write('wfs test');
// wfs.close();
rfs.pipe(wfs);
console.log(wfs.bytesWri);


