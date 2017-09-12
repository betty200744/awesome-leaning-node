/**
 * Created by betty on 8/5/17.
 */
"use strict";

var events = require("events");

var event = new events.EventEmitter();

setTimeout( () => event.emit('send'), 1000 );

event.on('send', () => console.log('we have receive a event'));

