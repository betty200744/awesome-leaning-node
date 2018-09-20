/**
 * Created by betty on 12/16/17.
 */
"use strict";

/**
 * Created by betty on 12/15/17.
 */
"use strict";



/**
 * TypedArray, 包括Int8Array, Int16Array等等
 * */

let int8 = new Uint8Array(2);
console.log(int8);

/**
 * buffer时间为一个16进制的字符串， 也就是Int8Array()
 * */

/*
 * create a buffer use allow */
const bufAllow = Buffer.alloc(10);
console.log(bufAllow);

const bufAllowString = Buffer.alloc(10, 'test');
console.log(bufAllowString);

/*
 * create a buffer use from
 * */

const bufFrom = Buffer.from('helloworld', 'utf8');
console.log(bufFrom);
console.log(bufFrom.toString('utf8'));
console.log(bufFrom.toString('base64'));
console.log(bufFrom.toString('ascii'));
console.log(bufFrom.toString('hex'));

const bufFromArray = Buffer.from([11, 22, 33]);
console.log(bufFromArray);
console.log(typeof bufFromArray);


