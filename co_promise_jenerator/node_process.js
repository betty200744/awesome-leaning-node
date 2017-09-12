/**
 * Created by betty on 8/6/17.
 */
"use strict";

var fs = require("fs");
var child_process = require("child_process");

console.log(process.pid);

var workProcess = child_process.exec('node node_util.js');
console.log(workProcess.pid);


