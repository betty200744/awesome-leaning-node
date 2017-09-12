/**
 * Created by betty on 8/8/17.
 */
"use strict";

var request = require("request");

request('http://www.google.com', (error, response, body) => {
  console.log(`error: ${error}`);
  console.log(`statusCode: ${response.statusCode}`);
})


var index = {"index":["orders"]}
var query = {"size":50,"query":{"bool":{"must":[{"query_string":{"query":"爱生活"}}]}}};

var add = {};
Object.assign(add, index, query);
console.log();
