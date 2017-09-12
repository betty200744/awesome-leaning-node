/**
 * Created by betty on 8/5/17.
 */
"use strict";

function task(word) {
  console.log(word)
}

function run(task, param) {
  task(param)
}

run(task, 'hello betty');

run( (a) => console.log ( a * a), 3);