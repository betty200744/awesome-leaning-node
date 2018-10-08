/**
 * Created by betty on 8/5/17.
 */
"use strict";
const EventEmitter = require('events');
const fs = require('fs');


/**
 * new EventEmitter
 */
const event = new EventEmitter();

event.on('send', () => console.log('we have receive a event'));
event.emit('send');

/**
 * extends EventEmitter
 */
class myEmitter extends EventEmitter{
}

const myEvent = new myEmitter();

myEvent.on('send', () => console.log('we have receive a event'));
myEvent.emit('send');

/**
 * fs EventEmitter
 * listened fd is open
 */







