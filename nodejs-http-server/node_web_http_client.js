/**
 * Created by betty on 8/6/17.
 */
"use strict";

var http = require("http");

var options = {
  host: 'localhost',
  port: '8088',
  path: './public/index.html'
}
var req = http.request(options, (response) => {
  var body = '';
  response.on('data', (data) => {
    body += data;
  })
});

req.end();