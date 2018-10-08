/**
 * Created by betty on 10/8/18.
 */
"use strict";
const {Readable, Writable} = require('stream');

const write = new Writable();
const read = new Readable();

write.on('pipe');
