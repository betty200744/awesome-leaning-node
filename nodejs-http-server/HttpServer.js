/**
 * Created by betty on 8/1/17.
 */
"use strict";

var http = require("http");

http.createServer( (require, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hello betty')
}).listen(8888);


console.log('server is start at http://localhost:8888/');

