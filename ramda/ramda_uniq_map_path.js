/**
 * Created by betty on 9/20/17.
 */
"use strict";

var R = require("ramda");

var reviews = [{author:{bind:{phone:{number: 233}}}},{author:{bind:{phone:{number: 233}}}}];

let phoneNumbers = R.uniq(R.map(R.path(['author', 'bind', 'phone', 'number']))(reviews));

console.log(phoneNumbers);
