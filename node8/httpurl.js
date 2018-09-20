/**
 * Created by betty on 2/12/18.
 */
"use strict";

const http = require('http');
const url = require('url');
const URL = url.URL;

const server = http.createServer((req, res) => {
  console.log(req.url); // /foo?bar
  console.log(req.method); // GET
  res.end();
  server.close();
});

server.listen(3000, function () {
  const u = `http://localhost:${this.address().port}/foo?bar`;
  http.get(u);
  http.get(url.parse(u));
  http.get(new URL(u)); // 7.5.0 ~
});

const u = `http://localhost:3000/foo?bar`;
console.log(u);
console.log(url.parse(u));
console.log(new URL(u));

var options = {
  hostname: 'localhost',
  port: '3000',
  method: 'GET',
  headers: {
    'Content-Type': 'applicaiton/x-www-form-urlencoded',
  }
};

var req = http.request(options, (res) => {
  console.log(`status: ${res.statusCode}`);
});

req.on('connect', (res) => {
  console.log('get conected')

});

req.end();
