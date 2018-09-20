/**
 * Created by betty on 1/21/18.
 */
"use strict";

const cluster = require('cluster');
const os = require('os');
const net = require('net');
const http = require('http');

if (cluster.isMaster) {
  let len = os.cpus().length;
  for (let i = 0; i < len; i += 1) {
    let work = cluster.fork();
    console.log(work.id);
  }
} else {
   http.createServer((req, res) => {
     res.writeHead(200);
   }).listen(3002);
}




