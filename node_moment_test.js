/**
 * Created by betty on 7/28/17.
 */
"use strict";
var moment = require("moment");

// let now = moment().startOf('days').format('YYYY-MM-DD HH:mm:ss');


let today = moment().startOf('days').format('YYYY-MM-DD HH:mm:ss');
let previousWeek = moment().startOf('days').add(-7, 'day').format('YYYY-MM-DD HH:mm:ss');


let yesterday = moment(today).subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss');

console.log(today)
console.log(previousWeek)
console.log(yesterday)
// console.log(now)
