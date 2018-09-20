/**
 * Created by betty on 11/26/17.
 */
"use strict";

const co = require('co');


/**
 * co， 自动执行Generator的next,  返回一个promise
 * */
var cop = co(function* () {
  var result = yield Promise.resolve('co， 自动执行Generator的next,  返回一个promise');
  return result;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});

//这里不是方法，不需要（）
cop

/**
* co,自动执行Generator的next, 自动执行Promise的then, 返回promise.then后的value,即结果
* */
co(function* () {
  let result = yield Promise.resolve('co,自动执行Generator的next, 自动执行Promise的then, 返回promise.then后的value,即结果')
  console.log(result);
});

/**
* co.wrap, 返回一个方法， 该方法会返回promise
 * */

var fn = co.wrap(function* (val) {
  return yield Promise.resolve(val)
});

fn('co.wrap, 返回一个方法， 该方法会返回promise').then(function (val) {
  console.log(val)
});

/**
* co, 自动执行Generator, yield any but one promise
 * */

co(function *(){
  // yield any promise
  var result = yield Promise.resolve('co, 自动执行Generator, yield any but one promise');
  console.log(result);
}).catch(function (err) {
  console.log(err)
});

/**
 * co,自动执行generator,并行执行yield array, 并行执行多个promise
* */

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve('第一个promise');
  var b = Promise.resolve('第二个promise');
  var c = Promise.resolve('第三个promise');
  var res = yield [a, b, c];
  console.log(res);
  // => [ '第一个promise', '第二个promise', '第三个promise' ]
}).catch(function (err) {
  console.log(err)
});


/**
 * co, 自动执行generator, 并行执行yield object,并行执行多个promise
* */
co(function* () {
  var res = yield {
    'a promise': Promise.resolve('a promise'),
    'b promise': Promise.resolve('b promise'),
  }
  console.log(res);
}).catch(function (err) {
  console.log(err);
});


/**
 * co, 自动执行generator, try/catched reject error
* */

co(function* () {
  try {
      yield Promise.reject(new Error('co, 自动执行generator, try/catched reject error'))
  } catch (err) {
    console.log(err.message);
  }
}).catch(function (err) {
  console.log(err);
});




