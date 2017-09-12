/**
 * Created by betty on 8/6/17.
 */
"use strict";

var cluster = require("cluster");

var os = require("os");
var numCPUs = os.cpus().length;
var http = require("http");


if (cluster.isMaster) {
  console.log(numCPUs);
  var worker = cluster.fork();

  cluster.on('online', (worker) => {
    console.log(`worker: ${worker.process.pid} is online`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.pid} died`);
  });

  worker.send('hi this is master');

  process.on('message', (message) => {
    console.log(message);
  })

} else if (cluster.isWorker){
  process.on('message', (message) => {
    console.log(message);
    process.send('hi this is work');
  })
  console.log();
  process.send( {message: "test"});
  console.log(cluster.worker.process.pid);
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}


