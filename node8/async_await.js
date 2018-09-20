/**
 * Created by betty on 2/11/18.
 */
"use strict";
const co = require('co');
const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

async function readAsync() {
  const data = await readFile('./async_await.js');
  console.log(await data.toString());
}

readAsync();

