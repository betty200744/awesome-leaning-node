/**
 * Created by betty on 8/14/17.
 */
"use strict";
const moment = require('moment-range').extendMoment(require('moment'));
var co = require("co");


function run() {
  return co.call(this, function* () {
    const from = moment(new Date('2017-04-25'));
    const to = moment();
    let start;
    for (let end of moment.range(from, to).by('days')) {
      if (start) {
        console.log(start)
        console.log(end)
        if (process.env.NODE_ENV !== 'production') return;
      }
      start = end;
    }
  });
}

run()