/**
 * Created by betty on 8/7/17.
 */
"use strict";

try {
  console.log('hello, i want throw an error');
  throw new Error('hi this is a throw error');
} catch (err) {
  console.log(`hi i catch a error, the error is ${err}`);

}

