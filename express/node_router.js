/**
 * Created by betty on 8/5/17.
 */
"use strict";

console.log(__dirname);
console.log(__filename);

setTimeout(()=> console.log('hello'), 100);

process.on('exit', ()=> {
  console.log('process exit')
  console.log(process.pid)
  console.log(process.argv)
  console.log(process.config)
  console.log(process.arch)
  console.log(process.title)
  console.log(process.platform)
  console.log(process.mainModule)
  console.log(process.stdin)
})

