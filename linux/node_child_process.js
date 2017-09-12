/**
 * Created by betty on 8/6/17.
 */
"use strict";

var spawn = require("child_process").spawn;
var ls = spawn('ls', ['./']);

console.log(ls.stdout.on('data', (data) => {
  console.log(data.toString())
}));

