/**
 * Created by betty on 8/6/17.
 */
"use strict";

var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer( (request, response)=> {
  var pathname = url.parse(request.url).pathname;
  fs.readFile('./public/input.txt', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      response.write(pathname);
      response.write(data.toString());
      response.end();

    }
  });

});
server.listen(8088);