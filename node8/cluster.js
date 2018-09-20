/**
 * Created by betty on 2/11/18.
 */
"use strict";
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  const worker = cluster.fork();
  cluster.fork().on('listening', (address) => {
    setTimeout(() => {
      const w = worker.disconnect();
      console.log(w); // undefined
                      // Worker // 7.3.0 ~
    }, 1000);
  });
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {}).listen(8000);
}