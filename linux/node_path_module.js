/**
 * Created by betty on 8/5/17.
 */
"use strict";

var path = require("path");
var os = require("os");

console.log(os.hostname());
console.log(path.extname('node_path_module.js')); //文件名后缀
console.log(path.join(__dirname, 'public')); //连接路径，不需要/
console.log(path.basename(__dirname));//返回路径最后一部分
console.log(path.parse('abc'))
